import fetch from "isomorphic-unfetch";

export async function get(req, res, next) {
  const fetched = await fetch("https://repos.pablo.pink/api");
  const json = await fetched.json();

  if (json) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(json));
  } else {
    next();
  }
}
