import React from 'react'

const UserCard = ({user, deleteUser, setUserEdit, handleChangeShowForm}) => {

    const handleClickEdit = () =>{
        setUserEdit(user)
        handleChangeShowForm()
    }

  return (
    <article>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <div className='vector'></div>
        <ul>
            <li>
                <span>Email: </span>
                {user.email}
            </li>
            <li>
                <span>Birthday: </span>
                {user.birthday}
            </li>
        </ul>
        <div className='vector'></div>   
        <div className='btn_container'>
            <button className='delete_btn btn_style' onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
            <button className='edit_btn btn_style' onClick={() => handleClickEdit()}><i className='bx bx-edit'></i></button>
        </div>
    </article>
  )
}

export default UserCard