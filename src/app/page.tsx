'use client'
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <Button variant="contained" color="primary" onClick={()=>router.push('/profile/admin')}>
    Go to Another Page
  </Button>
  )
}
