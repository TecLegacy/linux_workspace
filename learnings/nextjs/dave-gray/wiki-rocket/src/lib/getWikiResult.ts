export async function getWikiResult(searchTerm: string) {
  // const searchParams = new URLSearchParams({
  //   action: 'query',
  //   origin: '*',
  //   format: 'json',
  //   formatversion: '2',
  //   srsearch: 'cat',
  //   srlimit: '20',
  //   list: 'search',
  //   prop: 'pageimages|extracts',
  // });

  const searchParams = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: searchTerm,
    gsrlimit: '20',
    // prop: 'info|extracts|pageimages',
    prop: 'extracts|pageimages',
    inprop: 'url',
    exchars: '100',
    exintro: 'true',
    explaintext: 'true',
    // exsentences: '1',
    exlimit: 'max',
    format: 'json',
    origin: '*',
  });
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?${searchParams}`
  );

  return response.json();
}
