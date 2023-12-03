import './createAccountForm.css'
import UserForm from './UserForm'
import VetForm from './VetForm'

export default function CreateAccountForms ({ selectedUserForm, handleShowHome }) {
  const createUser = async (newUser) => {
    console.log('Creando Usuario', newUser)
    handleShowHome()
    // try {
    //   if (email && name && username && phoneNumber && password) {
    //     const newUser = await loginService.createUser({
    //       email,
    //       name,
    //       username,
    //       phoneNumber,
    //       password
    //     })
    //     console.log(newUser)
    //     handleShowHome()
    //   } else {
    //     console.log('faltan datos para crear la cuenta')
    //   }
    // } catch (error) {
    //   console.log('Hubo un error: ', error)
    // }
  }
  return (
    <article className='create-account--form-container'>
      <div className='create-account--logo-container' onClick={handleShowHome}>
        <img src='./../../../../public/logo.png' alt='Logotipo de la pagina web' />
      </div>
      {selectedUserForm && <UserForm createUser={createUser} />}

      {!selectedUserForm && <VetForm createUser={createUser} handleShowHome={handleShowHome} />}
    </article>
  )
}
