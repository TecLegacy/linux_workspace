import { FC } from 'react';
import Link from 'next/link';
import getAllUsers from '@root/lib/getAllUsers';
import type { Metadata } from 'next';

interface Props {}

export const metadata: Metadata = {
  title: 'Users',
  description: 'List of all Users in Our DataBase',
};

const User: FC<Props> = async ({}) => {
  const userData: Promise<User[]> = getAllUsers();
  const user = await userData;

  const content = user.map(user => {
    return (
      <p className='m-2 p-2' key={user.id}>
        <Link href={`/${user.name}`}>{user.name}</Link>
      </p>
    );
  });
  return (
    <>
      <h2>User Page</h2>
      <Link href={'/'} className=' text-red-700 ml-20  '>
        Home Page
      </Link>
      <section>{content}</section>
    </>
  );
};

export default User;
