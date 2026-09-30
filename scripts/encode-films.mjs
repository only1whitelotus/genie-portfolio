import { spawnSync } from "node:child_process";
import { mkdirSync } from "node:fs";
mkdirSync("public/media", { recursive: true });
const films = [
  ["reck.MOV", "reckless-era"],
  ["ciddy.MP4", "ciddy-collection"],
  ["fruison.MOV", "fruision"],
  ["yte.mp4", "channel-opener"],
];
for (const [source, slug] of films) {
  const result = spawnSync(
    "ffmpeg",
    [
      "-hide_banner",
      "-loglevel",
      "error",
      "-y",
      "-i",
      `public/videos/${source}`,
      "-map",
      "0:v:0",
      "-map",
      "0:a:0?",
      "-vf",
      "scale=1280:-2:force_original_aspect_ratio=decrease",
      "-c:v",
      "libx264",
      "-crf",
      "23",
      "-preset",
      "medium",
      "-threads",
      "2",
      "-pix_fmt",
      "yuv420p",
      "-c:a",
      "aac",
      "-b:a",
      "128k",
      "-movflags",
      "+faststart",
      "-map_metadata",
      "-1",
      `public/media/${slug}.mp4`,
    ],
    { stdio: "inherit" },
  );
  if (result.status !== 0) throw new Error(`Failed to encode ${source}`);
  console.log(`Encoded ${slug}.mp4`);
}
