import { useState } from 'react'

export default function UserForm ({ createUser }) {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validateEmail = () => {
    const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    return regexEmail.test(email)
  }

  const checkPhoneNumber = (phoneNumberInput) => {
    if (isNaN(phoneNumberInput)) {
      console.log('Debe ingresar un numero de telefono valido')
      // TODO: Hacer un modal que advierta de numero de telefono invalido
    } else {
      setPhoneNumber(phoneNumberInput)
    }
  }

  const validatePhone = () => {
    const regexPhone = /^\d{10}$/
    return regexPhone.test(phoneNumber)
  }

  const handleCreateUser = (event) => {
    event.preventDefault()

    const validatedEmail = validateEmail()
    if (!validatedEmail) {
      console.log('El email no es valido', email)
      // TODO: Hacer un modal que diga que el email no es valido cuando se trate de crear el usuario
    }

    const validatedPhone = validatePhone()
    if (!validatedPhone) {
      console.log('El telefono debe ser de diez cifras')
    }

    if (name && lastName && validatedEmail && validatedPhone && address && password) {
      const newUser = {
        name,
        lastName,
        phoneNumber,
        address,
        username,
        email,
        password
      }
      createUser(newUser)
    } else {
      console.log('Complete todos los datos')
    }
  }

  return (
    <form className='create-account-form create-account--user-form' onSubmit={handleCreateUser}>
      <label className='form-label'>
        <span>Nombre</span>
        <input
          type='text'
          value={name}
          name='name'
          onChange={({ target }) => setName(target.value)}
        />
      </label>
      <label className='form-label'>
        <span>Apellidos</span>
        <input
          type='text'
          value={lastName}
          name='lastname'
          onChange={({ target }) => setLastName(target.value)}
        />
      </label>
      <label className='form-label'>
        <span>Teléfono</span>
        <input
          type='tel'
          value={phoneNumber}
          name='phoneNumber'
          onChange={({ target }) => checkPhoneNumber(target.value)}
        />
      </label>
      <label className='form-label'>
        <span>Dirección</span>
        <input
          type='text'
          value={address}
          name='address'
          onChange={({ target }) => setAddress(target.value)}
        />
      </label>
      <label className='form-label'>
        <span>Nombre de usuario</span>
        <input
          type='text'
          value={username}
          name='username'
          onChange={({ target }) => setUsername(target.value)}
        />
      </label>
      <label className='form-label'>
        <span>E-mail</span>
        <input
          type='email'
          value={email}
          name='email'
          onChange={({ target }) => setEmail(target.value)}
        />
      </label>
      <label className='form-label'>
        <span>Contraseña</span>
        <input
          type='password'
          value={password}
          name='password'
          onChange={({ target }) => setPassword(target.value)}
        />
      </label>
      <button className='create-account-btn'>Crear cuenta</button>
    </form>
  )
}
