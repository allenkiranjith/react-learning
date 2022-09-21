import * as React from 'react';
import Tile from './Tile';
import './tictactoe.css';

export default function TicTacToe() {
  let [game, setGame] = React.useState(
    new Array(3).fill(0).map(() => new Array(3).fill(''))
  );
  let [currPlayer, setCurrPlayer] = React.useState(true);
  let [winner, setWinner] = React.useState('');

  const checkForWinner = (game) => {
    const combinations = [
      [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: 2 },
      ],
      [
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: 2 },
      ],
      [
        { x: 2, y: 0 },
        { x: 2, y: 1 },
        { x: 2, y: 2 },
      ],
      [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
      ],
      [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
      ],
      [
        { x: 0, y: 2 },
        { x: 1, y: 2 },
        { x: 2, y: 2 },
      ],
      [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
      ],
      [
        { x: 0, y: 2 },
        { x: 1, y: 1 },
        { x: 2, y: 0 },
      ],
    ];

    let isWinnerFound = false;
    combinations.forEach((pattern) => {
      const x1 = pattern[0];
      const x2 = pattern[1];
      const x3 = pattern[2];
      if (
        game[x1.x][x1.y] !== '' &&
        game[x1.x][x1.y] === game[x2.x][x2.y] &&
        game[x2.x][x2.y] === game[x3.x][x3.y]
      ) {
        setWinner(game[x1.x][x1.y] === 'X' ? 'Player 1' : 'Player 2');
        // alert('Winner found');
      }
    });
  };

  const handlePlayerClick = (i, j) => {
    if (game[i][j] === '' && winner === '') {
      let cloneGame = [...game];
      let c = currPlayer ? 'X' : 'O';

      cloneGame[i][j] = c;
      setGame(cloneGame);
      setCurrPlayer(!currPlayer);
      checkForWinner(cloneGame);
    }
  };

  return (
    <React.Fragment>
      <div>
        <h2>Tic Tac Toe</h2>
        <div>Player 1 takes 'X'</div>
        <div>Player 2 takes 'O'</div>
        <br />

        {!winner ? (
          <React.Fragment>
            <div>
              Current player is -{' '}
              <strong>{currPlayer ? 'Player 1' : 'Player 2'} </strong>
            </div>
            <br />
          </React.Fragment>
        ) : (
          ''
        )}

        {!winner ? (
          ''
        ) : (
          <h3>
            We have a winner - <strong>{winner}</strong>
          </h3>
        )}
      </div>
      <div className={`game-container ${winner ? 'winner' : ''}`}>
        {game.map((row, rIndex) => (
          <div className="row">
            {row.map((col, cIndex) => (
              <Tile
                row={rIndex}
                col={cIndex}
                handlePlayerClick={handlePlayerClick}
                char={game[rIndex][cIndex]}
                disabled={winner ? true : false}
              ></Tile>
            ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
