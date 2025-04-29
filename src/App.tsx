import { Gamepad2 } from 'lucide-react';

function App() {
  return (
    <main className='flex flex-col justify-center items-center min-h-screen bg-blue-200'>
      <div className='p-8 w-full max-w-md bg-blue-100 rounded-2xl'>
        <div className='flex gap-3 justify-between items-center mb-8'>
          <Gamepad2 className='size-8 text-pink' />
          <h1 className='text-4xl font-bold text-white'>Tic Tac Toe</h1>
        </div>
      </div>
    </main>
  );
}

export default App;
