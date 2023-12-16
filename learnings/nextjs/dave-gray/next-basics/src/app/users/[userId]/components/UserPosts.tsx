import { FC } from 'react';

interface UserPostsProps {
  promise: Promise<Post[]>;
}

const UserPosts: FC<UserPostsProps> = async ({ promise }) => {
  const posts = await promise;

  const content = posts.map(post => {
    return (
      <ul key={post.id}>
        <li className=' m-4 p-2 flex gap-4  place-items-center flex-col'>
          <h2>TITLE : {post.title}</h2>
          <p>BODY : {post.body}</p>
        </li>
      </ul>
    );
  });

  return <article>{content}</article>;
};

export default UserPosts;
