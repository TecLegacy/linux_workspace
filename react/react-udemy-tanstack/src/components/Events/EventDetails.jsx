import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import ErrorBlock from '../UI/ErrorBlock.jsx';
import Header from '../Header.jsx';
import { singleArticle } from '../../utils/http.js';

export default function EventDetails() {
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['event', { userId: id }],
    queryFn: ({ signal }) => singleArticle({ id, signal }),
    staleTime: 1000 * 60 * 2, // 2 minutes
    gcTime: 1000 * 60 * 1, // 1 minutes
  });

  const formattedDate = new Date(data?.event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  return (
    <>
      <Outlet />
      <Header>
        <Link to='/events' className='nav-item'>
          View all Events
        </Link>
      </Header>
      {isPending ? (
        <div id='event-details-content' className='center'>
          <p>Fetching events data ...</p>
        </div>
      ) : null}
      {isError ? (
        <div id='event-details-content' className='center'>
          <ErrorBlock
            message={error?.axios || error.message}
            title={'Not Events'}
          />
        </div>
      ) : null}

      {data ? (
        <article id='event-details'>
          <header>
            <h1>{data.event.title}</h1>
            <nav>
              <button>Delete</button>
              <Link to='edit'>Edit</Link>
            </nav>
          </header>
          <div id='event-details-content'>
            <img
              src={`http://localhost:3000/${data.event.image}`}
              alt={`${data.event.title}`}
            />
            <div id='event-details-info'>
              <div>
                <p id='event-details-location'>{data.event.location}</p>
                <time
                  dateTime={`Todo-DateT$Todo-Time`}
                  style={{ fontSize: '1.4rem' }}
                >
                  {formattedDate}
                </time>
              </div>
              <p id='event-details-description'>{data.event.description}</p>
            </div>
          </div>
        </article>
      ) : null}
    </>
  );
}
