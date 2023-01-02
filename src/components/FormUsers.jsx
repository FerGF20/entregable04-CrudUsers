import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const FormUsers = ({createUser, userEdit, editUser, showForm, handleChangeShowForm}) => {

  const defaultValues = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: "",
  }

  const {handleSubmit, register, reset} = useForm()

  const submitForm = (data) => {
    if(userEdit){
      editUser(userEdit.id, data)
    }else{
      createUser(data)
    }
    reset(defaultValues)
  }

  useEffect(() => {
    if(userEdit){
      reset(userEdit)
    }
  }, [userEdit])
  

  return (
    <div className={`form_container ${showForm ? "disable-form" : ""}`}>
      <form onSubmit={handleSubmit(submitForm)}>
        <i onClick={handleChangeShowForm} class='bx bx-x-circle' ></i>
        <h2>{userEdit ? "Edit User" : "New User"}</h2>
        <div>
            <label htmlFor="">Email</label>
           <input type="email" {...register("email")} />
       </div>
       <div>
           <label htmlFor="">Password</label>
           <input type="password" {...register("password")} />
       </div>
       <div>
           <label htmlFor="">First Name</label>
          <input type="text" {...register("first_name")} />
        </div>
        <div>
            <label htmlFor="">Last Name</label>
            <input type="text" {...register("last_name")} />
        </div>
        <div>
            <label htmlFor="">Birthday</label>
            <input type="date" {...register("birthday")} />
        </div>
        <button className='add_btn'>{userEdit ? "Edit user" : "Add New User"}</button>
      </form>
    </div>
    
  )
}

export default FormUsers