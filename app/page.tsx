import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const { userId } = await auth();

  console.log(userId);
  return (
    <div className='flex flex-col items-center justify-center h-screen p-6'>
      <div className='flex-1 flex flex-col items-center justify-center'>
        <div className='mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold text-center'>
            Welcome to <br />
            <span className='text-blue-700 text-5xl md:text-6xl'>
              Healthcare Management System
            </span>
          </h1>
        </div>

        <div className='text-center max-w-xl flex flex-col items-center justify-center'>
          <p className='mb-8'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
            reprehenderit sequi veniam, sit quos deleniti dolorem! Doloribus,
            iure.
          </p>

          <div className='flex gap-4'>
            {userId ? (
              <></>
            ) : (
              <>
                <Link href='/sign-up'>
                  <Button className='md:text-base font-light'>
                    New Patient
                  </Button>
                </Link>

                <Link href='/sign-in'>
                  <Button
                    variant='outline'
                    className='md:text-base underline hover:text-blue-600'
                  >
                    Login to account
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <footer className='mt-8'>
        <p className='text-center text-sm'>
          &copy; 2025 Hospital Management System. All right reserved.
        </p>
      </footer>
    </div>
  );
}
