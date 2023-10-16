import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Title from "./Title";

const GameDiv = styled.div`
    display:flex;
    padding:20px;
    flex-direction:column;
    gap:20px;
    text-align:center; 
`
const TicTacToeButton = styled.button`
    background-color:transparent;
    color: #0F0; 
    border:2px solid #0F0;
    font-size:16px;
    padding:4px;
    margin:2px;
    width:50px;
    height:50px;
    &:hover{
        border:2px dashed #0F0;
    }

`
const Board = styled.div`
   
    display:flex;
    flex-direction:column;
    gap:10px;
    
  
`
const BoardRow = styled.div`
    display:flex;
    flex-direction:row;
    gap:10px;
    text-align:center;
    justify-content:center;
    align-content:center;
`
const BoardCell = styled.div`

`


export default function  TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [status, setStatus] = useState('');
    const initialSquares = Array(9).fill(null);
   
  
    useEffect(() => {
        const winner = calculateWinner(squares);
        if (winner) {
          setStatus(`Winner: ${winner}`);
          setGameOver(true);
        } else if (!squares.includes(null)) {
          setStatus("It's a draw!");
          setGameOver(true);
        } else {
          setStatus(`Turn: ${xIsNext ? "X" : "O"}`);
        }
      }, [squares]);
  
    const handleClick = (i) => {
      const squaresCopy = [...squares];
      if (calculateWinner(squaresCopy) || squaresCopy[i] || gameOver) return;
      squaresCopy[i] = xIsNext ? "X" : "O";
      setSquares(squaresCopy);
      setXIsNext(!xIsNext);
    };
  
    const renderSquare = (i) => (
      <TicTacToeButton onClick={() => handleClick(i)}>
        {squares[i]}
      </TicTacToeButton>
    );
  
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
  
    function resetGame() {
      setGameOver(false);
      setSquares(initialSquares);
      setXIsNext(true);
    }
  
    return (
      <GameDiv>
        <Title>Tic-Tac-Toe</Title>
        <Title small="true">{status}</Title>
        <Board>
          <BoardRow>
            <BoardCell>{renderSquare(0)}</BoardCell>
            <BoardCell>{renderSquare(1)}</BoardCell>
            <BoardCell>{renderSquare(2)}</BoardCell>
          </BoardRow>
          <BoardRow>
            <BoardCell>{renderSquare(3)}</BoardCell>
            <BoardCell>{renderSquare(4)}</BoardCell>
            <BoardCell>{renderSquare(5)}</BoardCell>
          </BoardRow>
          <BoardRow>
            <BoardCell>{renderSquare(6)}</BoardCell>
            <BoardCell>{renderSquare(7)}</BoardCell>
            <BoardCell>{renderSquare(8)}</BoardCell>
          </BoardRow>
        </Board>
        {gameOver && (
          <BoardRow>
           
            <TicTacToeButton type="newGame" onClick={resetGame}>
              NEW
            </TicTacToeButton>
          </BoardRow>
        )}
      </GameDiv>
    );
  }




