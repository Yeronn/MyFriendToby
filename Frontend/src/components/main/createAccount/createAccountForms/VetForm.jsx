import { useEffect, useState } from 'react'

export default function VetForm ({ createUser, handleShowHome }) {
  const [businessName, setBusinessName] = useState('')
  const [tradeName, setTradeName] = useState('')
  const [nit, setNit] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [newUser, setNewUser] = useState()
  const [showVeracityDataText, setShowVeracityDataText] = useState(false)

  useEffect(() => {
    console.log(nit)
  }, [nit])

  const checkNit = (nitInput) => {
    if (isNaN(nitInput)) {
      // TODO: Hacer modal que advierta que solo se permiten numeros en el nit
      console.log('EL nit solo puede contener numeros')
    } else {
      setNit(nitInput)
    }
  }

  // TODO: validar de alguna forma para validar que el nit exista
  // const validateNit = () => {
  // codigo
  // }

  const validateEmail = () => {
    const regexCorreo = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    return regexCorreo.test(email)
  }

  const checkPhoneNumber = (phoneNumberInput) => {
    if (isNaN(phoneNumberInput)) {
      console.log('Debe ingresar un numero de telefono valido')
      // TODO: Hacer un modal que advierta de numero de telefono invalido
    } else {
      setPhoneNumber(phoneNumberInput)
    }
  }

  const validateData = (event) => {
    event.preventDefault()

    const validatedEmail = validateEmail()
    if (!validatedEmail) {
      console.log('El email no es valido2', email)
      // TODO: Hacer un modal que diga que el email no es valido cuando se trate de crear el usuario
    }

    // TODO: Usar la funcion de Validar el nit

    if (businessName && tradeName && nit && validatedEmail && phoneNumber && address && password) {
      const newUserData = {
        businessName,
        tradeName,
        nit,
        email,
        phoneNumber,
        address,
        password
      }
      setNewUser(newUserData)
      setShowVeracityDataText(true)
    } else {
      console.log('Complete todos los datos')
    }
  }

  const handleCreateUser = () => {
    createUser(newUser)
  }
  return (
    <>
      {!showVeracityDataText &&
        <form className='create-account-form create-account--vet-form' onSubmit={validateData}>
          <label className='form-label'>
            <span>Razon social de la veterinaria</span>
            <input
              type='text'
              value={businessName}
              name='businessName'
              onChange={({ target }) => setBusinessName(target.value)}
            />
          </label>
          <label className='form-label'>
            <span>Nombre comercial</span>
            <input
              type='text'
              value={tradeName}
              name='tradeName'
              onChange={({ target }) => setTradeName(target.value)}
            />
          </label>
          <label className='form-label'>
            <span>Nit</span>
            <input
              type='text'
              value={nit}
              name='nit'
              onChange={({ target }) => checkNit(target.value)}
            />
          </label>
          <label className='form-label'>
            <span>Email</span>
            <input
              type='email'
              value={email}
              name='email'
              onChange={({ target }) => setEmail(target.value)}
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
            <span>Contraseña</span>
            <input
              type='password'
              value={password}
              name='password'
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>
          <button className='create-account-btn'>Crear cuenta</button>
        </form>}

      {showVeracityDataText &&
        <div className='veracity-information'>
          <h3 className='veracity-title'>Declaración de veracidad de la información</h3>
          <p className='veracity-text'>Al utilizar este sitio web y proporcionar información como profesional de la veterinaria, usted declara y garantiza que toda la información proporcionada es veraz y precisa. Usted se compromete a mantener sus credenciales y detalles de contacto actualizados, y acepta que la información que proporciona será utilizada para ofrecer servicios y asistencia relacionados con la práctica veterinaria. Reconoce la importancia de la exactitud y la integridad de la información en la atención de los pacientes y clientes, y se compromete a cumplir con los más altos estándares profesionales en su campo.</p>
          <div className='veracity--options-container'>
            <button onClick={handleShowHome}>Rechazar</button>
            <button onClick={handleCreateUser}>Aceptar</button>
          </div>
        </div>}

    </>
  )
}
