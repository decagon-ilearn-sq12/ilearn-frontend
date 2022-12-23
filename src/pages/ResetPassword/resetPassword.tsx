import './resetPassword.css'
import React, { useState } from 'react'
import Group from '../../assets/Group.svg'
// import { toast } from "react-toastify";
import { Link } from 'react-router-dom'
import axios from 'axios'
const baseUrl = import.meta.env.VITE_SERVER_URL

const ResetPassword = () => {
  const [createForm, setCreateForm] = useState({})
  const submitDetails = (e: any) => {
    e.preventDefault()
    const { name, value } = e.target
    console.log({ name, value })
    setCreateForm({
      ...createForm,
      [name]: value,
    })
  }

  const fetchLink = async () => {
    try {
      console.log('async function')
      const response = await axios.post(
        `${baseUrl}/users/forgot-password`,
        createForm
      )
      window.alert(response.data.message)
    } catch (error) {
      console.log(error)
      window.alert(error)
    }
  }

  return (
    <div className='overallDiv'>
      <div className='resetPassword'>
        <div className='tutor-buddy'>
          <img src={Group} />
          <h3 className='learn'>iLearn</h3>
        </div>
        <div className='form-con'>
          <div className='form-box'>
            <div className='contain'>
              <h4>Forgot Password?</h4>
              <p>Send a link to your email to resend password</p>
            </div>
            <form>
              <div>
                <label htmlFor='email'>Email</label>
                <br />
                <input
                  type='email'
                  name='email'
                  onChange={submitDetails}
                  placeholder='Enter email'
                />
              </div>
              <button
                type='submit'
                onClick={async () => await fetchLink()}
                className='btn-primary'
              >
                <Link to='' className='btn'>
                  Send Reset Link
                </Link>
              </button>
              <p>
                Already have an account?{' '}
                <span className='login'>
                  <Link to='/login'>Login</Link>{' '}
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
