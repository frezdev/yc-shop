import { useRef, useState } from 'react'
import './App.css'
import { uploadFiles } from './services'

function App() {
  const inputFile = useRef()
  const mainData = useRef()
  const measuresAndDetails = useRef()

  const handleClick = async () => {
    const main = new FormData(mainData.current)
    const mainDataEntries = Object.fromEntries(main)

    const measuresData = new FormData(measuresAndDetails.current)
    const measuresDataEntries = Object.fromEntries(measuresData)

    const files = Object.values(inputFile.current.files)
    const [err, data] = await uploadFiles(files, 'watches', '123')
    console.log({err, data})
    console.log({mainDataEntries, measuresDataEntries, files })
  }

  return (
    <>
      <div>
        <form ref={mainData}>
          <h3>Datos principales</h3>
          <input type="text" name='brand' placeholder='Marca'/>
          <input type="number" name='price' placeholder='Precio'/>
          <input type="text" name='ref' placeholder='Referencia'/>
        </form>

        <form ref={measuresAndDetails} action="">
        <h3>Mediadas</h3>
          <input type="text" name='dial_diameter' placeholder='Diametro del dial' />
          <input type="text" name='thickness' placeholder='Grosor de la carcasa' />
          <input type="text" name='length' placeholder='Longitud' />
          <input type="text" name='belt_width' placeholder='Ancho de la correa' />
          <input type="text" name='weight' placeholder='Peso' />
          <input type="text" name='belt_material' placeholder='Material de la correa' />
          <input type="text" name='dial_material' placeholder='Material del dial' />

          <h3>Detalles</h3>
          <textarea name="details"></textarea>
        </form>

        <form action="">
          <h3>Sube algunas imagenes</h3>
          <input ref={inputFile} type="file" name='files' id="" multiple />
          <button type='button' onClick={handleClick}>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default App
