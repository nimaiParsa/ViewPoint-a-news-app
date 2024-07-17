import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'

export default function Signup() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  function handleSignup(event) {
    event.preventDefault()

    console.log('signing up')

    axios.post('http://localhost:3000/api/v1/register', {
      ...formData
    }).then(response => {
      const { token } = response.data
      localStorage.setItem('token', token)
      navigate('/')
    }).catch(err => {
      if (err.name == "AxiosError") {
        enqueueSnackbar(err.response.data.msg || "something went wrong", { variant: "error" })
      } else {
        enqueueSnackbar(err.message, { variant: "error" })
      }
      setLoading(false)
      console.log(err)
    })
  }

  function handleInputChange(event) {
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  return (
    <div className='login-div'>
      <nav className="nav--bar">
        <h1 className="nav--title imbue">VIEWPOINT</h1>
        <p className="nav--sub-title imbue grey">All News One Place. Your Unbiased News Source.</p>
      </nav >
      <form onSubmit={handleSignup} className="login">
        <h2 className="login-text imbue">Signup</h2>
        <input onChange={handleInputChange} value={formData.name} name='name' type="text" placeholder='Username' className='login-input' />
        <input onChange={handleInputChange} value={formData.email} name='email' type="email" placeholder='Email' className='login-input' />
        <input onChange={handleInputChange} value={formData.password} name='password' type="password" placeholder='Password' className='login-input' />
        <button className="login-button">Signup</button>
        <p className='login-signup-text'>Already have an account ? <Link to={'/login'} style={{textDecoration: "underline"}}>Login</Link> </p>
        </form>
    </div>
  )
}
