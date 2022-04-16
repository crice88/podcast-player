import { get } from "../http";

const url = "http://localhost:1337/episodes";

export async function findOne(id?: string) {
  return get({ url: url + `/${id}` });
}

export async function findMany() {
  return get({ url });
}
