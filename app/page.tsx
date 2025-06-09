import Image from 'next/image';

export default function Home() {
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
        </div>
      </div>
    </div>
  );
}
