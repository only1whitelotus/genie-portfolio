import { index, route, type RouteConfig } from "@react-router/dev/routes";
export default [
  index("routes/home.tsx"),
  route("work", "routes/work.tsx"),
  route("project/:slug", "routes/project.tsx"),
  route("films", "routes/films.tsx"),
  route("films/:slug", "routes/film.tsx"),
  route("lab", "routes/lab.tsx"),
  route("lab/:slug", "routes/experiment.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("category/:category", "routes/legacy.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
