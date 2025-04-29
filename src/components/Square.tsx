import { motion } from 'motion/react';
import { Player } from '../types';

interface SquareProps {
  value: Player | null;
  isWinner: boolean;
  onClick: () => void;
}

function getTextColor(value: Player | null): string {
  return value === 'X' ? 'text-pink' : 'text-white';
}

function getBorderColor(value: Player | null, isWinner: boolean): string {
  return isWinner
    ? value === 'X'
      ? 'border-pink'
      : 'border-white'
    : 'border-gray-200';
}

export default function Square({ value, isWinner, onClick }: SquareProps) {
  return (
    <motion.button
      className={`size-32 rounded-xl border-4 text-4xl font-bold ${getTextColor(value)} ${getBorderColor(value, isWinner)}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      {value && (
        <motion.span
          className='block'
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
        >
          {value}
        </motion.span>
      )}
    </motion.button>
  );
}
