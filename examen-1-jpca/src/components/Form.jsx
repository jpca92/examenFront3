import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
    const [user, setUser] = useState({
        nombre: '',
        artista: '',
        genero: ''
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)
    
    //validaciones
    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length > 3 && user.nombre.trim() === user.nombre) {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }
    }

  return (
    <div className="mi-componente">
        <form onSubmit={handleSubmit} className="formulario">

            <div>
                <label>Nombre de tu canción favorita</label>
                <input type="text" value={user.nombre} 
                onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            </div>

            <div>
                <label>Artista: </label>
                <input type="text" value={user.artista} 
                onChange={(e) => setUser({...user, artista: e.target.value})}/>
            </div>

            <div>
                <label>Genero musical: </label>
                <select value={user.genero} 
                onChange={(e) => setUser({...user, genero: e.target.value})}>
                <option value="">Seleccione una opción</option>
                <option value="Rock">Rock</option>
                <option value="Pop">Pop</option>
                <option value="Electronica">Electronica</option>
                <option value="Metal">Metal</option>
            </select>
            </div>
            
            <>
            <button>Enviar</button>
            </>

            <>
            {err && 'Por favor chequea que la información sea correcta.'}
            </>
            
            
        </form>
        <div>
        {show  && <Card nombre={user.nombre} genero={user.genero} artista={user.artista}/>}
        </div>
        
        
       
    </div>
  )
}

export default Form