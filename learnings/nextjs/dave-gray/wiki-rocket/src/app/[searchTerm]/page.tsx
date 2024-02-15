import { getWikiResult } from '@/lib/getWikiResult';
import Item from './component/Item';

interface Props {
  params: {
    searchTerm: string;
  };
}

export default async function Page({ params: { searchTerm } }: Props) {
  const wikiResult: Promise<SearchResult> = getWikiResult(searchTerm);
  const data = await wikiResult;
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <div className='bg-slate-200 mx-auto max-w-lg py-1 min-h-screen'>
      {results ? (
        Object.values(results).map(result => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className='p-2 text-xl'>{`${searchTerm} Not Found`}</h2>
      )}
    </div>
  );

  return content;
}

export async function generateMetadata({
  params: { searchTerm },
}: {
  params: {
    searchTerm: string;
  };
}) {
  const wikiResult: Promise<SearchResult> = getWikiResult(searchTerm);
  const data = await wikiResult;

  const displayTerm = searchTerm.replaceAll('%20', ' ');

  if (!data.query?.pages) {
    return {
      title: `Not Found for search ${displayTerm}`,
    };
  }

  return {
    title: displayTerm,
    description: `Search Result for ${displayTerm}`,
  };
}
