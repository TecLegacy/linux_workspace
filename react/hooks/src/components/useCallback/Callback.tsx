import { FC, useState, memo, useCallback } from 'react';
import { shuffle } from '../../lib/shuffle';

const usersList = ['john', 'jack', 'tracy', 'keshav', 'heroine'];

interface CallbackProps {}

const Callback: FC<CallbackProps> = ({}) => {
  const [list, setList] = useState<string[]>(usersList);

  const handleSearch = useCallback((text: string) => {
    const filterUserList = usersList.filter(user => user.includes(text));

    setList(filterUserList);
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setList(shuffle(usersList))}>Shuffle</button>
        <SearchBoxMemoized onChange={handleSearch} />
      </div>
      <ul>
        {list.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  );
};

export default Callback;

interface SearchBoxProps {
  onChange: (text: string) => void;
}

export const SearchBox: FC<SearchBoxProps> = ({ onChange }) => {
  console.log('child rendered');
  return (
    <>
      <input type='text' onChange={e => onChange(e.target.value)} />
    </>
  );
};

export const SearchBoxMemoized = memo(SearchBox);
