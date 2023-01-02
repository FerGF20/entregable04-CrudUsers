import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

const BASE_URL = "https://users-crud.academlo.tech/"

function App() {

  const [users, setUsers] = useState()
  const [userEdit, setUserEdit] = useState()
  const [showForm, setShowForm] = useState()

  const getAllUsers = () => {
    const URL = `${BASE_URL}users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  const createUser = (data) => {
    const URL = `${BASE_URL}users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        handleChangeShowForm()
      })
      .catch(err => console.log(err))
  }

  const deleteUser = (id) =>{
    const URL = `${BASE_URL}users/${id}/`
      axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
    })
    .catch(err => console.log(err))
  }

  const editUser = (id, data) => {
    const URL = `${BASE_URL}users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setUserEdit()
        handleChangeShowForm()
      })
      .catch(err => console.log(err))
  }

  const handleChangeShowForm = () => {
    setShowForm(!showForm)
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  console.log(userEdit);

  return (
    <div className="App">
      <div className='header'>
        <h1>Crud Users</h1>
        <button onClick={handleChangeShowForm} className='new-user_btn'>+ Create new user</button>
      </div>
     
      <FormUsers
        createUser={createUser}
        userEdit={userEdit}
        editUser={editUser}
        showForm={showForm}
        handleChangeShowForm={handleChangeShowForm}
      />
      <div className='card_container'>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserEdit={setUserEdit}
              handleChangeShowForm={handleChangeShowForm}
            />
          ))
        }
      </div>

    </div>
  )
}

export default App