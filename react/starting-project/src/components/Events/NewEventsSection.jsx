// import { useEffect, useState } from 'react';

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';

import { fetchEventsData } from '../../utils/http.js';
import { useQuery } from '@tanstack/react-query';

export default function NewEventsSection() {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEventsData,
    staleTime: 1000 * 60 * 1, // 1 minutes
    gcTime: 9000,
    // queryFn: fetchEvents,
    // gcTime: 1000 * 60 * 5, // 5 minutes
    // cacheTime: 1000 * 60 * 5, // 5 minutes
  });

  /**DUMB 1 here*/

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title={'No Events Found' || error.axios?.name}
        message={'Failed to Fetch Events' || error.axios?.message}
      />
    );
  }

  if (data) {
    let initialData = data.events ?? [];
    content = (
      <ul className='events-list'>
        {initialData.map(event => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className='content-section' id='new-events-section'>
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}

/** DUMB 1 paste
 * Traditional way of fetching data with useEffect and useState
const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/events');

      if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        error.code = response.status;
        error.info = await response.json();
        throw error;
      }

      const { events } = await response.json();

      return events;
    }

    fetchEvents()
      .then((events) => {
        setData(events);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

 */
