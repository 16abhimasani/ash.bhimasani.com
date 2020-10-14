export const wait = (ms: number): Promise<void> =>
  new Promise((_) => setTimeout(_, ms));

export const removeProtocolAndWww = (url: string): string =>
  url.replace(/(^\w+:|^)\/\//, "").replace(/^www\./, "");

export async function post(
  url: string,
  params: unknown,
  opts?: { headers?: { [name: string]: string } }
): Promise<unknown> {
  const response = await fetch(url, {
    method: "POST",
    headers: (opts && opts.headers) || {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  if (!response.ok) {
    const err = await response.json();
    throw Error(err.message);
  }
  const data = await response.json();
  return data;
}
