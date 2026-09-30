import http from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve("build/client");
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".data": "text/x-script",
  ".webp": "image/webp",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};
const redirects = {
  "/category/design": "/work?type=design",
  "/category/web": "/work?type=code",
  "/category/video": "/films",
};
http
  .createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
      if (redirects[pathname]) {
        res.writeHead(308, { Location: redirects[pathname] });
        res.end();
        return;
      }
      if (pathname === "/api/contact") {
        res.writeHead(req.method === "GET" ? 200 : 503, {
          "Content-Type": "application/json",
        });
        res.end(
          JSON.stringify(
            req.method === "GET"
              ? { enabled: false }
              : { error: "Email delivery is not configured in local preview." },
          ),
        );
        return;
      }
      let file = path.resolve(root, "." + pathname);
      if (file !== root && !file.startsWith(root + path.sep)) {
        res.writeHead(403);
        res.end();
        return;
      }
      let info = await stat(file).catch(() => null);
      if (info?.isDirectory()) {
        file = path.join(file, "index.html");
        info = await stat(file).catch(() => null);
      }
      let code = 200;
      if (!info) {
        file = path.join(root, "404.html");
        info = await stat(file);
        code = 404;
      }
      const headers = {
        "Content-Type": types[path.extname(file)] || "application/octet-stream",
        "Content-Length": info.size,
        "Accept-Ranges": "bytes",
      };
      const range = /^bytes=(\d+)-(\d*)$/.exec(req.headers.range || "");
      if (range && code === 200) {
        const start = Number(range[1]),
          end = range[2]
            ? Math.min(Number(range[2]), info.size - 1)
            : info.size - 1;
        if (start > end || start >= info.size) {
          res.writeHead(416, { "Content-Range": `bytes */${info.size}` });
          res.end();
          return;
        }
        res.writeHead(206, {
          ...headers,
          "Content-Length": end - start + 1,
          "Content-Range": `bytes ${start}-${end}/${info.size}`,
        });
        createReadStream(file, { start, end }).pipe(res);
        return;
      }
      res.writeHead(code, headers);
      if (req.method === "HEAD") res.end();
      else createReadStream(file).pipe(res);
    } catch {
      res.writeHead(500);
      res.end("Preview error");
    }
  })
  .listen(Number(process.env.PORT || 4173), "0.0.0.0", () =>
    console.log(`Portfolio preview ready on port ${process.env.PORT || 4173}`),
  );
