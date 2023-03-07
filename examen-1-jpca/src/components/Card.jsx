import React from 'react'

const Card = ({nombre, genero, artista}) => {

  return (
    <div>
        <h3 className='tituloCard'>Tu cancion favorita es: {nombre}</h3>
        <h3>Del artista: {artista}</h3>
        <h3>Del genero: {genero}</h3>
        
    </div>
  )
}

export default Card