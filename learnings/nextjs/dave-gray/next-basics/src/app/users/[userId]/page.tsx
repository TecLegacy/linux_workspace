import getUser from '@root/lib/getUser';
import { FC, Suspense } from 'react';
import UserPosts from './components/UserPosts';
import getPosts from '@root/lib/getPosts';
import type { Metadata } from 'next';
import getALlUsers from '@root/lib/getAllUsers';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    userId: string;
  };
}

//? Dynamic Metadata
export async function generateMetadata({
  params: { userId },
}: Props): Promise<Metadata> {
  //* Dedupe request are cached
  const userData: Promise<User> = getUser(userId);
  const user = await userData;

  //* Not found user
  if (!user?.name) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: user.name,
    description: `These Post belong to ${user.username} `,
  };
}

const User: FC<Props> = async ({ params: { userId } }) => {
  //* Parallel Data fetching
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getPosts(userId);

  // const [user, post] = Promise.all([userData, userPostsData]);

  const user = await userData;

  //* Not found user
  if (!user?.name) {
    return notFound();
  }

  return (
    <>
      <h2 className=' text-amber-600'>{user.name}</h2>
      <p> UserName 👤 {user.username}</p>

      {/* Progressively Rendering Page */}
      {/* Loading UI for better user experience */}
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
};

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getALlUsers();
  const users = await usersData;

  return users.map(user => ({ userId: user.id.toString() }));
}

export default User;
