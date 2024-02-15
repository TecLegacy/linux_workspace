'use client';

import { FC, FormEvent, useRef } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerm = searchRef.current?.value;

    router.push(`/${searchTerm}/`);

    if (searchRef.current) {
      searchRef.current.value = '';
    }
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className=' flex  justify-center items-center gap-4'
      >
        <input
          className='border rounded  border-white px-4 py-2 leading-none  '
          type='text'
          placeholder='search'
          ref={searchRef}
        />
        <Button className='hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 md:mt-0'>
          Submit
        </Button>
      </form>
    </>
  );
};

export default Search;
