import React from 'react';
import { Players } from './players';
import Player from './Player';

function PlayerList({title}) {
  return (
    <>
    <div className='text-center p-5'>

    <h1>{title}</h1>
      <div className='container d-flex  align-items-center '>
        {Players.map((player, index) => (
        <Player {...player} key={index} />         
        ))}
      </div>
    </div>
   
    </>
  );
}

export default PlayerList;
