import { useState } from 'react'
import { PawIcon } from '../../Icons'
import PetCard from '../PetCard'
import './myPets.css'

export default function MyPets ({ userLogged, handleShowInterface }) {
  const [showAddPet, setShowAddPet] = useState(false)
  const [name, setName] = useState('')
  const [size, setSize] = useState('')
  const [moneyRequired, setMoneyRequired] = useState('')
  const [spaceRequired, setSpaceRequired] = useState('')
  const [file, setFile] = useState('')
  const [check, setCheck] = useState('')

  const petInformation = [
    {
      id: 1,
      name: 'Toby',
      urlImage: './../../../../public/perro.jpg'
    },
    {
      id: 2,
      name: 'Toby',
      urlImage: './../../../../public/buldog.webp'
    },
    {
      id: 3,
      name: 'Toby',
      urlImage: './../../../../public/cat1.webp'
    },
    {
      id: 4,
      name: 'Toby',
      urlImage: './../../../../public/cat2.webp'
    }
  ]

  const checkMoneyRequired = (money) => {
    if (isNaN(money)) {
      console.log('Debe ingresar un numero de telefono valido')
      // TODO: Hacer un modal que advierta de numero de telefono invalido
    } else {
      setMoneyRequired(money)
    }
  }

  const createPet = (event) => {
    event.preventDefault()
    if (name && size && moneyRequired && spaceRequired && file && check) {
      const newPet = {
        name,
        size,
        moneyRequired,
        spaceRequired,
        file,
        check
      }
      console.log('creando mascota', newPet)
      handleShowInterface('Home')
    } else {
      console.log('Ingresa todos los campos')
    }
  }

  // TODO: hacer metodo que traiga las mascotas del servidor y que las filtre para obtener solo mis mascotas
  // const getMyPets = () => {
  // }
  return (
    <div className='my-pets'>
      {!showAddPet &&
        <>
          <div className='add-pet-container'>
            <span className='add-pet--icon-container'>
              <PawIcon />
            </span>
            <button onClick={() => { setShowAddPet(!showAddPet) }}>Agregar mascota</button>
          </div>
          <PetCard petCardsInformation={petInformation} />
        </>}

      {showAddPet &&
        <div className='add-pet-container'>
          <form className='add-pet-form' onSubmit={createPet}>
            <label className='add-pet-label'>
              <span>Nombre</span>
              <input
                type='text'
                value={name}
                name='name'
                onChange={({ target }) => setName(target.value)}
              />
            </label>
            <label className='add-pet-label'>
              <span>Tamaño</span>
              <input
                list='Petsize'
                value={size}
                name='size'
                onChange={({ target }) => setSize(target.value)}
              />
              <datalist id='Petsize'>
                <option value='Pequeño' />
                <option value='Mediano' />
                <option value='Grande' />
              </datalist>
            </label>
            <label className='add-pet-label'>
              <span>Dinero requerido</span>
              <input
                type='text'
                value={moneyRequired}
                name='moneyRequired'
                onChange={({ target }) => checkMoneyRequired(target.value)}
              />
            </label>
            <label className='add-pet-label'>
              <span>Espacio requerido</span>
              <input
                type='text'
                value={spaceRequired}
                name='spaceRequired'
                onChange={({ target }) => setSpaceRequired(target.value)}
              />
            </label>
            <label className='add-pet-label'>
              <span>Chequeo en </span>
              <input
                type='date'
                value={check}
                name='check'
                onChange={({ target }) => setCheck(target.value)}
              />
            </label>
            <label className='add-pet-label'>
              <span>Chequeo en </span>
              <input
                type='file'
                value={file}
                name='file'
                onChange={({ target }) => setFile(target.value)}
              />
            </label>
            <button>Crear mascota</button>
          </form>
        </div>}

    </div>
  )
}
