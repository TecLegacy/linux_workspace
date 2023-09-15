import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { createNewEvent } from '../../utils/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';

export default function NewEvent() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
  });

  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        <>
          <Link to='../' className='button-text'>
            Cancel
          </Link>
          <button type='submit' className='button'>
            Create
          </button>
        </>
      </EventForm>
      {isError ? (
        <ErrorBlock
          title='New Event Error'
          message={
            error.axios ||
            error.message?.axios ||
            'Failed to Create new event. Please check for your inputs.'
          }
        />
      ) : null}
    </Modal>
  );
}
