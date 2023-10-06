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
    console.log(formData);
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending ? (
          <button disabled={true} className='button'>
            Submitting...
          </button>
        ) : (
          <>
            <Link to='../' className='button-text'>
              Cancel
            </Link>
            <button type='submit' className='button'>
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError ? (
        <ErrorBlock
          title={'Failed to Create new event.' || error.axios?.name}
          message={error.message || error.axios?.message}
        />
      ) : null}
    </Modal>
  );
}
