type Result = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};

type SearchResult = {
  query?: {
    pages?: Result[];
  };
};

// interface Result {
//   ns: number;
//   title: string;
//   pageid: number;
//   size: number;
//   wordcount: number;
//   snippet: string;
//   timestamp: string;
// }

// type SearchResult2 = {
//   query?: {
//     search?: Result[];
//   };
// };
