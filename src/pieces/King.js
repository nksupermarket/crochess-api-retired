import Piece from './Piece';
import moves from '../moves.js';

const King = (color) => {
  const piece = Piece('king');

  function isValidMove(target) {
    const currentSquare = piece.toXY(piece.current);
    const targetSquare = piece.toXY(target);

    const oneSquareOnYAxis = moves.yByN(1)(currentSquare.y)(targetSquare.y);
    const oneSquareOnXAxis = moves.xByN(1)(currentSquare.x)(targetSquare.x);
    const oneSquareDiagonally =
      moves.yByN(1)(currentSquare.y)(targetSquare.y) &&
      moves.xByN(1)(currentSquare.x)(targetSquare.x);

    return oneSquareDiagonally || oneSquareOnXAxis || oneSquareOnYAxis;
  }

  return {
    color,
    isValidMove,
    to: piece.to,
    type: 'king',
    domEl: piece.domEl,
  };
};

export default King;