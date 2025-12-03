import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const AddUser = () => {
    const dispatch = useDispatch()

    const [user, setUser] = useState({username:'',email:''})

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(user); 
    }

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }

    dispatch()

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Username...' name='username' value={user.username} onChange={handleChange} />
        <input type="email" placeholder='Enter Email...' name='email' value={user.email} onChange={handleChange} />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddUser
