import type { Config } from "@react-router/dev/config";
import { projects, films, experiments } from "./app/data/content";
export default {
  ssr: false,
  prerender: [
    "/",
    "/work",
    "/films",
    "/lab",
    "/about",
    "/contact",
    ...projects.map((p) => `/project/${p.slug}`),
    ...films.map((f) => `/films/${f.slug}`),
    ...experiments.map((e) => `/lab/${e.slug}`),
    "/category/design",
    "/category/web",
    "/category/video",
    "/404",
  ],
} satisfies Config;
