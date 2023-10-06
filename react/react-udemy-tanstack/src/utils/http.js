import axios, { AxiosError } from 'axios';
import { QueryClient } from '@tanstack/react-query';
export const queryClient = new QueryClient();

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
  console.log(event);
  let url = 'http://localhost:3000/events';
  try {
    const response = await axios.post(
      url,
      {
        event,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const responseBack = response.data;
    console.log(responseBack);
    return responseBack;
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

// Get Images /events/images
export const selectableImages = async ({ signal }) => {
  const url = 'http://localhost:3000/events/images';

  try {
    const response = await axios.get(url, { signal });
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = new Error('Error While fetching');
      error.axios = err;
      throw error;
    }

    //generic message
    throw new Error('Something went Wrong while sending!');
  }
};

//GET /events/:id
export const singleArticle = async ({ signal, id }) => {
  const url = `http://localhost:3000/events/${id}`;

  try {
    const response = await axios.get(url, { signal });
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = new Error('Error While fetching');
      error.axios = err;
      throw error;
    }

    //generic message
    throw new Error('Something went Wrong while sending!');
  }
};

// export async function fetchEvents() {
//   const response = await fetch('http://localhost:3000/events');

//   if (!response.ok) {
//     const error = new Error('An error occurred while fetching the events');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   const { events } = await response.json();

//   return events;
// }

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
