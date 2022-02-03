// Exercise with fifteen tasks

// Task 6

const piece = "banana";

switch(piece.toLowerCase()) {
    case "pawn":
        console.log("moves one square forward");
        break;
    case "bishop":
        console.log("moves n squares diagonally");
        break;
    case "knight":
        console.log("moves three squares in L shape");
        break;
    case "rook":
        console.log("moves n squares horizontally or vertically");
        break;
    case "queen":
        console.log("moves n squares in any direction");
        break;
    case "king":
        console.log("moves one square in any direction");
        break;
    default:
        console.log("error, piece not found");
        break;
}