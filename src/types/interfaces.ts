import {
  Color,
  Square,
  Board,
  Moves,
  PieceType,
  CastleSquaresType
} from './types';

export interface Coord {
  x: number;
  y: number;
}

export interface xCoord {
  x: number;
}

export interface yCoord {
  y: number;
}

export interface PieceInterface {
  hasMove: (from: Square, to: Square) => boolean;
  getPawnCaptures: (origin: Square) => Square[] | undefined;
  readonly color: Color;
  readonly type: 'king' | 'queen' | 'knight' | 'bishop' | 'rook' | 'pawn';
}

export interface PieceObj {
  type: PieceType;
  color: Color;
}

export interface EnPassantObj {
  color: Color;
  current: Square;
}

export interface SquareObj {
  piece: PieceObj | null;
  enPassant?: EnPassantObj;
}

interface At {
  place: (piece: PieceInterface) => void;
  remove: () => void;
  piece: () => PieceInterface | null;
  getValidMoves: () => undefined | string[];
}

interface From {
  to: (endSquare: Square) => void;
}

interface Check {
  inCheckAfterMove: (startSquare: Square, endSquare: Square) => Moves;
  checkmate: (color: Color, squaresGivingCheck: string[]) => boolean;
}

export interface Gameboard {
  at: (square: Square) => At;
  from: (square: Square) => From;
  check: Check;
  board: Board;
  domBoard: Element;
}

export interface PieceMap {
  rook: Square[];
  bishop: Square[];
  knight: Square[];
  king: Square[];
  queen: Square[];
  pawn: Square[];
}

export interface AllPieceMap {
  white: PieceMap;
  black: PieceMap;
}

export interface GameboardObj {
  createBoard: () => Board;
  makeMove: (s1: Square, s2: Square, promote?: PieceType) => Board | undefined;
  castling: {
    castle: (color: Color, side: 'kingside' | 'queenside') => void;
    canCastle: (color: Color, side: 'kingside' | 'queenside') => boolean;
    getRightsAfterMove: (square: Square) => CastleObj;
  };
  enPassant: {
    checkToggle: (from: Square, to: Square) => boolean;
    toggle: (current: Square, color: Color) => void;
    remove: () => void;
  };
  at: (square: Square) => {
    place: (piece: PieceObj) => void;
    remove: () => void;
    promote: (pieceType: PieceType) => void;
    setEnPassant: (color: Color, current: Square) => void;
    readonly piece: PieceObj | null | undefined;
    getLegalMoves: () => Moves;
  };
  from: (s1: Square) => {
    to: (s2: Square) => void;
  };
  get: {
    kingPosition: (color: Color) => Square | undefined;
    pieceMap: () => {
      white: PieceMap;
      black: PieceMap;
    };
    squaresGivingCheckAfterMove: (from: Square, end: Square) => Square[];
    isCheckmate: (color: Color, squaresGivingCheck: string[]) => boolean;
    castleSquares: (color: Color) => CastleSquaresType;
  };
  validate: {
    move: (from: Square, to: Square) => boolean;
    promotion: (from: Square, to: Square) => boolean;
  };
  readonly board: Board;
}

export interface HistoryObj {
  get: {
    piecePrefix: (from: Square, to: Square) => string;
    castleNotation: (side: 'kingside' | 'queenside') => 'O-O' | 'O-O-O';
  };
  affix: {
    capture: (move: Square, prefix: string) => string;
    promote: (move: Square, pieceType: PieceType) => string;
    check: (notation: string) => string;
    checkmate: (notation: string) => string;
  };
  insertMove: (notation: string) => void;
}

export interface CastleObj {
  white: {
    kingside: boolean;
    queenside: boolean;
  };
  black: {
    kingside: boolean;
    queenside: boolean;
  };
}
