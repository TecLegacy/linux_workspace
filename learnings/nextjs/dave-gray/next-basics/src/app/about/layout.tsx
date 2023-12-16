import { FC } from 'react';
import type { Metadata } from 'next';

interface Props {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: 'About-static-metadata',
  description: 'About next 13 is awesome',
};
const AboutLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <nav className=' flex items-center justify-center flex-col font-semibold text-xl mt-4 gap-8'>
        About nav Nested-Layout
        <ul className='  list-none flex items-center  min-w-[80%]  justify-center py-4 gap-4'>
          <li>Lobby</li>
          <li>Trending</li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default AboutLayout;
