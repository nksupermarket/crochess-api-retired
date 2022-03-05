import Piece from './Piece';
import moves from '../logic/moves';
import { toXY } from '../logic/helpers';

import { Color, Square } from '../types/types';

const King = (color: Color) => {
  const piece = Piece('king', color);
  const type = 'king' as const;

  function isValidMove(target: Square) {
    const currentSquare = toXY(piece.current);
    const targetSquare = toXY(target);

    const oneSquareOnYAxis = moves.yByN(1)(currentSquare)(targetSquare);
    const oneSquareOnXAxis = moves.xByN(1)(currentSquare)(targetSquare);
    const oneSquareDiagonally =
      moves.yByN(1)(currentSquare)(targetSquare) &&
      moves.xByN(1)(currentSquare)(targetSquare);

    return (
      target !== piece.current &&
      (oneSquareDiagonally || oneSquareOnXAxis || oneSquareOnYAxis)
    );
  }

  return {
    color,
    isValidMove,
    to: piece.to,
    get domEl() {
      return piece.domEl;
    },
    get type() {
      return type;
    }
  };
};

export default King;
