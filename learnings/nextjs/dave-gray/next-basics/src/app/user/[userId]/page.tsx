import getUser from '@root/lib/getUser';
import { FC } from 'react';

interface Props {
  params: {
    userId: string;
  };
}

const User: FC<Props> = async ({ params: { userId } }) => {
  const userData: Promise<User> = getUser(userId);
  return <div>User</div>;
};

export default User;
