'use client'
import { LocalizationContext } from '@/lang/Localization/LocalizationProvider';
import { getDemo } from '@/redux/demo/demoSlice';
import { RootState } from '@/redux/rootReducer';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { useEffect, useState,useContext } from 'react';
import { useSelector, useDispatch } from "react-redux";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export default function Home() {
  const router = useRouter();
  const [data, setData] = useState<Todo[]>([]);
  const { translations } = useContext(LocalizationContext);
  //only work on client 
  const { demoData } = useSelector((state: RootState) => state.demoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    //     if (response.ok) {
    //       const result: Todo[] = await response.json();
    //       setData(result);
    //     } else {
    //       console.error('Failed to fetch data');
    //     }
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

    // fetchData();
    dispatch(getDemo(''));

  }, []);

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => router.push('/profile/admin')}>
        {translations?.GO_TO}
      </Button>
      {demoData.length > 0 ? (
        demoData.map((item:Todo) => <p key={item.id}>{item.title}</p>)
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}

