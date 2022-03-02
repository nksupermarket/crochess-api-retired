import Piece from './Piece.js';
import moves from '../logic/moves.js';

const Queen = (color) => {
  const piece = Piece('queen', color);

  function isValidMove(target) {
    const currentSquare = piece.toXY(piece.current);
    const targetSquare = piece.toXY(target);
    return (
      moves.diagonal(currentSquare)(targetSquare) ||
      moves.vertAndLateral(currentSquare)(targetSquare)
    );
  }

  return {
    color,
    isValidMove,
    to: piece.to,
    type: 'queen',
    domEl: piece.domEl,
  };
};

export default Queen;
