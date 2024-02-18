'use client';
import { FormEvent, useState } from 'react';

const userState = {
  name: '',
  email: '',
  message: '',
};

function ContactForm() {
  const [userData, setUserData] = useState<typeof userState>(userState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const sendFromData = async () => {
      const searchParams = new URLSearchParams({
        name: 'keshav',
        power: 'fireball',
      });

      try {
        const response = await fetch(
          'http://localhost:3000/api/echo?' + searchParams,
          {
            method: 'POST',
            body: JSON.stringify({ ...userData }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const data = await response.json();
        console.log('data from server', data);
      } catch (err) {
        console.error(err);
      }
    };

    sendFromData();

    // Handle form submission here
    console.log(userData);
    setUserData(p => ({
      ...userState,
    }));
  };

  return (
    <div className=' mt-10 mx-auto w-5/6 flex place-items-center'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            onChange={e => setUserData(p => ({ ...p, name: e.target.value }))}
            value={userData.name}
            className='mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md'
            required
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            onChange={e => setUserData(p => ({ ...p, email: e.target.value }))}
            value={userData.email}
            className='mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md'
            required
          />
        </div>
        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700'
          >
            Message
          </label>
          <textarea
            id='message'
            onChange={e =>
              setUserData(p => ({ ...p, message: e.target.value }))
            }
            value={userData.message}
            className='mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md'
            required
          />
        </div>
        <button
          type='submit'
          className='py-2 px-4 bg-blue-500 text-white rounded-md'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
