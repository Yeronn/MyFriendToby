import { useState } from 'react'
import './createAccount.css'
import SelectCreateAccount from './SelectAccountType'
import CreateAccountForms from './createAccountForms/CreateAccountForms'

export default function CreateAccount ({ handleShowInterface }) {
  const [selectedAccountType, setSelectedAccountType] = useState(false)
  const [selectedUserForm, setSelectedUserForm] = useState(false)
  const handleShowHome = () => {
    handleShowInterface('Home')
  }
  const handleShowLogin = () => {
    handleShowInterface('Login')
  }
  const handleShowForm = (form) => {
    setSelectedAccountType(!selectedAccountType)
    setSelectedUserForm(form)
  }
  return (
    <section className='create-account'>
      {(!selectedAccountType) &&
        <SelectCreateAccount handleShowHome={handleShowHome} handleShowLogin={handleShowLogin} handleShowForm={handleShowForm} />}
      {selectedAccountType &&
        <CreateAccountForms selectedUserForm={selectedUserForm} handleShowHome={handleShowHome} />}
    </section>
  )
}
