import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/home.tsx", [
    route("name-gen", "routes/name-gen.tsx"),
    route("whose-next", "routes/whose-next.tsx"),
    route("calc", "routes/calculator.tsx"),
  ]),
] satisfies RouteConfig;
