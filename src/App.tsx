import { useState } from 'react';
import { Gamepad2, RotateCcw } from 'lucide-react';
import Board from './components/Board';
import { BoardState, Player } from './types';
import { checkWinner, isBoardFull } from './helpers/game-logic';

function App() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const currentPlayer: Player =
    board.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
  const winner = checkWinner(board);
  const isDraw = !winner && isBoardFull(board);

  function getGameStatus(): string {
    return winner
      ? `Player ${winner} wins`
      : isDraw
        ? "It's a draw"
        : `Player ${currentPlayer}'s turn`;
  }

  function handleClick(index: number): void {
    if (!board[index] && !winner) {
      setBoard((prev) =>
        prev.map((square, i) => (index === i ? currentPlayer : square)),
      );
    }
  }

  function handleRestart() {
    setBoard(Array(9).fill(null));
  }

  return (
    <main className='flex flex-col justify-center items-center min-h-screen bg-blue-200'>
      <div className='p-8 w-full max-w-lg bg-blue-100 rounded-2xl'>
        <div className='flex gap-3 justify-center items-center mb-8'>
          <Gamepad2 className='size-8 text-pink' />
          <h1 className='text-4xl font-bold text-white'>Tic Tac Toe</h1>
        </div>
        <div className='mb-6 text-center'>
          <p className='text-xl font-semibold text-gray-100'>
            {getGameStatus()}
          </p>
        </div>
        <Board board={board} winner={winner} onClick={handleClick} />
        {(winner || isDraw) && (
          <div className='flex justify-center mt-8'>
            <button
              className='flex gap-2 items-center px-6 py-3 text-sm text-white rounded-lg group bg-pink hover:opacity-90'
              onClick={handleRestart}
            >
              Restart game
              <RotateCcw className='transition-transform duration-500 group-hover:-rotate-180' />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
