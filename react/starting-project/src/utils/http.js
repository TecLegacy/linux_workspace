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
