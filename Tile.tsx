import * as React from 'react';
import { useState } from 'react';
import './tile.css';

export default function Tile({ row, col, handlePlayerClick, char, disabled }) {
  return (
    <div
      className={`tile ${disabled ? 'disabled' : ''} ${char ? 'selected' : ''}`}
      onClick={() => handlePlayerClick(row, col)}
    >
      {char}
    </div>
  );
}
