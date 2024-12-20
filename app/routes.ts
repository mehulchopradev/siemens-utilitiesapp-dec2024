import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/home.tsx", [
    route("name-gen", "routes/name-gen.tsx"),
    route("whose-next/:departmentId", "routes/whose-next.tsx"),
    route("calc", "routes/calculator.tsx"),
    route("tasks", "routes/TaskApp.tsx"),
    route("users", "routes/Users.tsx"),
  ]),
] satisfies RouteConfig;
