// import { useEffect, useState } from 'react';

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';

import axios, { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

// GET /events
const fetchEventsData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/events');
    return response.data;
  } catch (err) {
    const error = new Error('An error occurred while fetching the events');
    if (err instanceof AxiosError) {
      error.axios = 'Error Caused by axios';
    }
    throw error;
  }
};

export default function NewEventsSection() {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEventsData,
    staleTime: 1000 * 60 * 1, // 1 minutes
    // gcTime: 1000 * 60 * 5, // 5 minutes
    // cacheTime: 1000 * 60 * 5, // 5 minutes
    // cacheTime: 9000, // 5 minutes
    gcTime: 9000,
  });

  /**DUMB 1 here*/

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title='An error occurred'
        message={error.axios || 'Failed to Fetch Events'}
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
 * 
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