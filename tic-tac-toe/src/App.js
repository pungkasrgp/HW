import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  function selectSquare(square) {
    if (winner || squares[square]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[square] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  function restart() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  function renderSquare(i) {
    return (
      <Button
        className="square"
        onClick={() => selectSquare(i)}
        size="lg"
        fontSize="2xl"
      >
        {squares[i]}
      </Button>
    );
  }

  const status = calculateStatus(winner, squares, xIsNext ? "X" : "O");

  return (
    <Box textAlign="center" backgroundColor="lightgray" borderWidth='1px' borderRadius='lg' mt="3">
      <Text fontSize="24px" mb="3">Status <br></br>{status}</Text>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={2}
        maxWidth="300px"
        margin="0 auto"
      >
        <GridItem>{renderSquare(0)}</GridItem>
        <GridItem>{renderSquare(1)}</GridItem>
        <GridItem>{renderSquare(2)}</GridItem>
        <GridItem>{renderSquare(3)}</GridItem>
        <GridItem>{renderSquare(4)}</GridItem>
        <GridItem>{renderSquare(5)}</GridItem>
        <GridItem>{renderSquare(6)}</GridItem>
        <GridItem>{renderSquare(7)}</GridItem>
        <GridItem>{renderSquare(8)}</GridItem>
      </Grid>
      <Button onClick={restart} mt="4" mb="3" colorScheme="blue">
        Restart
      </Button>
    </Box>
  );
}

function Game() {
  return (
    <Box>
      <Box maxW="400px" mx="auto">
        <Board />
      </Box>
    </Box>
  );
}

function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? "Scratch: Cat's game"
    : `Player's turn: ${nextValue}`;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return <Game />;
}

export default App;
