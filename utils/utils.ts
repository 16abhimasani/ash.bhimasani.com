export const wait = (ms: number): Promise<void> =>
  new Promise((_) => setTimeout(_, ms));

export const removeProtocolAndWww = (url: string): string =>
  url.replace(/(^\w+:|^)\/\//, "").replace(/^www\./, "");

export async function post(
  url: string,
  params: unknown,
  opts?: { headers?: { [name: string]: string } },
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

export const hexToRGB = (color: string): string => {
  const hex = Number("0x" + color.substring(1));
  const r = (hex >> 16) & 0xff;
  const g = (hex >> 8) & 0xff;
  const b = hex & 0xff;
  return `${r}, ${g}, ${b}`;
};
