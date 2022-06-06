function qs(params: Record<string, string>) {
  return Object.keys(params)
    .map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    })
    .join("&");
}

export function fetchCharacters(
  name: string,
  setCalls?: React.Dispatch<React.SetStateAction<number>>
) {
  return fetch(
    `https://rickandmortyapi.com/api/character/?${qs({ name })}`
  ).then((r) => {
    if (setCalls) setCalls((c) => c + 1);
    return r.json();
  });
}
