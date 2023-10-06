import { useState, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchEventsData } from '../../utils/http.js';

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';

export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState();

  const { data, error, isError, isLoading } = useQuery({
    staleTime: 1000 * 60 * 3, // 3 minutes
    enabled: searchTerm !== undefined,

    //Dynamic query keys are useful when you want to refetch data based on a value that changes over time.
    queryKey: ['events', { search: searchTerm }],
    queryFn: ({ signal }) => fetchEventsData({ searchTerm, signal }),
  });

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(() => searchElement.current.value);
  }

  let content = <p>Please enter a search term and to find events.</p>;

  if (isLoading) return <LoadingIndicator />;

  if (isError) {
    return (
      <ErrorBlock
        title='An error occurred while fetching events.'
        message={error?.axios || 'Failed To Fetch Results.'}
      />
    );
  }
  if (data) {
    // console.log(data);
    content = (
      <ul className='events-list'>
        {data.events.map(event => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <section className='content-section' id='all-events-section'>
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id='search-form'>
          <input
            type='search'
            placeholder='Search events'
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
