'use client'
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export default function Home() {
  const router = useRouter();
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (response.ok) {
          const result: Todo[] = await response.json();
          setData(result);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => router.push('/profile/admin')}>
        Go to Another Page
      </Button>
      {data.length > 0 ? (
        data.map((item) => <p key={item.id}>{item.title}</p>)
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}

