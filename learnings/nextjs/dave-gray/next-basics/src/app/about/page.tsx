import Link from 'next/link';
import { FC, useEffect } from 'react';

interface Props {}

const About: FC<Props> = ({}) => {
  return (
    <>
      <div className=' bg-cyan-200 text-blue-400'>
        <h1>About-Component</h1>
        <Link href={'/'} className=' text-red-700'>
          Home page
        </Link>
      </div>
    </>
  );
};

export default About;
