export async function get({ url }: { url: string }) {
  return fetch(url);
}
