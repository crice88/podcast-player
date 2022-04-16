import { get } from "../http";

const url = `${process.env.NEXT_PUBLIC_BASE_URL}/episodes`;

export async function findOne(id?: string) {
  return get({ url: url + `/${id}` });
}

export async function findMany() {
  return get({ url });
}
