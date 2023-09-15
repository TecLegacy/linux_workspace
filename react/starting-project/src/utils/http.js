import axios, { AxiosError } from 'axios';

// GET /events
export const fetchEventsData = async ({ searchTerm, signal }) => {
  let url = 'http://localhost:3000/events';

  if (searchTerm) {
    url += `?search=${searchTerm}`;
  }

  try {
    const response = await axios.get(url, { signal });
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = new Error('An error occurred while fetching the events');
      error.axios = err;
      throw error;
    }

    //generic message
    throw new Error('Something went wrong while fetching');
  }
};

// POSTS /events - Create new Events
export const createNewEvent = async ({ event }) => {
  let url = 'http://localhost:3000/events';
  try {
    const response = await axios.post(url, {
      event,
    });
    return response.data;
  } catch (err) {
    // console.log(err);
    if (err instanceof AxiosError) {
      const error = new Error('Please check for your inputs.');
      error.axios = err;
      throw error;
    }

    //generic message
    throw new Error('Something went Wrong while sending!');
  }
};

export async function fetchEvents() {
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

/**
 * 
export const axiosQuery = async () => {
  const { data, error, isError, isPending, refetch } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      try {
        const response = await axios.get('http://localhost:3000/events');
        return response.data;
      } catch (err) {
        const customError = new Error(
          'An error occurred while fetching the events'
        );
        if (err instanceof AxiosError) {
          customError.info = 'Error Caused by axios';
        }
        throw customError;
      }
    },
  });
};
 */
