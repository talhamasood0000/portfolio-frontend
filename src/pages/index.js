import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/dashboard');
  }, []);
  return null; 
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/dashboard',
      permanent: true,
    },
  };
}