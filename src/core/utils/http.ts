export async function handleResponse(response: Promise<Response>) {
  const res = await response;

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Http exception");
  }
}
