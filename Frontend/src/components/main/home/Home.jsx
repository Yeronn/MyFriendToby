import PetCard from '../PetCard'
import './home.css'

export default function Home ({ userLogged }) {
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
  // const getPets = () => {
  //   // TODO: Hacer un try catch para traer mascotas del servidor y que estas mascotas no sean las del usuario que inicio sesion
  // }
  return (
    <div className='Home'>
      <PetCard petCardsInformation={petInformation} />
    </div>
  )
}
