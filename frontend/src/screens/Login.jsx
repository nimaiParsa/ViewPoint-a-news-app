import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { enqueueSnackbar } from 'notistack'

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  function handleInputChange(event) {
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleLogin(event) {
    event.preventDefault()

    axios.post('http://localhost:3000/api/v1/login', {
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

  return (
    <div className='login-div'>
      <nav className="nav--bar">
        <h1 className="nav--title imbue">VIEWPOINT</h1>
        <p className="nav--sub-title imbue grey">All News One Place. Your Unbiased News Source.</p>
      </nav >
      <form onSubmit={handleLogin} className="login">
        <h2 className="login-text imbue">Login</h2>
        <input onChange={handleInputChange} value={formData.email} name='email' type="email" placeholder='Email' className='login-input' />
        <input onChange={handleInputChange} value={formData.password} name='password' type="password" placeholder='Password' className='login-input' />
        <button className="login-button">Login</button>
        <p className='login-signup-text'>Don't have an account ? <Link to={'/signup'} style={{textDecoration: "underline"}}>Signup</Link> </p>
      </form>
    </div>
  )
}
