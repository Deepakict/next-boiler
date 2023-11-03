'use client';
import {LocalizationContext} from '@/lang/Localization/LocalizationProvider';
import {getTodos} from '@/redux/todo/todoSlice';
import {RootState} from '@/redux/rootReducer';
import Button from '@mui/material/Button';
import {useRouter} from 'next/navigation';
import {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export default function Home() {
  const router = useRouter();
  const {translations} = useContext(LocalizationContext);
  //only work on client
  const {todos} = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push('/profile/admin')}
      >
        {translations?.GO_TO}
      </Button>
      {todos.length > 0 ? (
        todos.map((item: Todo) => <p key={item.id}>{item.title}</p>)
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}
