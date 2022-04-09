import Piece from './Piece';
import moves from '../utils/moves';
import { toXY } from '../utils/helpers';

import { Color, Square } from '../types/types';

const Knight = (color: Color) => {
  const piece = Piece('knight', color);
  const type = 'knight' as const;

  function isValidMove(target: Square) {
    const currentSquare = toXY(piece.current);
    const targetSquare = toXY(target);
    return (
      target !== piece.current &&
      ((moves.xByN(1)(currentSquare)(targetSquare) &&
        moves.yByN(2)(currentSquare)(targetSquare)) ||
        (moves.xByN(2)(currentSquare)(targetSquare) &&
          moves.yByN(1)(currentSquare)(targetSquare)))
    );
  }

  return {
    color,
    isValidMove,
    to: piece.to,
    get current() {
      return piece.current;
    },
    get domEl() {
      return piece.domEl;
    },
    get type() {
      return type;
    }
  };
};

export default Knight;
