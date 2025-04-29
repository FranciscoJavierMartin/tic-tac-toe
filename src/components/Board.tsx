import { WINNING_COMBINATIONS } from '../helpers/game-logic';
import { BoardState, Player } from '../types';
import Square from './Square';

interface BoardProps {
  board: BoardState;
  winner: Player | null;
  onClick: (index: number) => void;
}

export default function Board({ board, winner, onClick }: BoardProps) {
  function isWinner(index: number): boolean {
    return winner
      ? WINNING_COMBINATIONS.some(
          (combo) =>
            combo.includes(index) && combo.every((i) => board[i] === winner),
        )
      : false;
  }

  return (
    <div className='mx-auto grid max-w-[26rem] grid-cols-3 gap-4'>
      {board.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onClick(index)}
          isWinner={isWinner(index)}
        />
      ))}
    </div>
  );
}
