import Piece from './Piece';
import moves from '../moves.js';

const Queen = () => {
  const piece = Piece();

  function isValidMove(target) {
    const currentSquare = piece.toXY(piece.current);
    const targetSquare = piece.toXY(target);
    return (
      moves.diagonal(currentSquare)(targetSquare) ||
      moves.vertAndLateral(currentSquare)(targetSquare)
    );
  }

  return {
    isValidMove,
    to: piece.to,
  };
};

export default Queen;
