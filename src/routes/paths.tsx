function path(root: string, sublink: string): string {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/";
const ROOT_MAIN = "/main";
const ROOT_PROJECTS = "/projects";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  main: ROOT_MAIN,
  login: path(ROOTS_AUTH, "login"),
  projects: ROOT_PROJECTS,
};
export const PATH_DASHBOARD = {
  root: "/",
};
