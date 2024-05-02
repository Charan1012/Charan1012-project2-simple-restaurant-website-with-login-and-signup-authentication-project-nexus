import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import "../styles/Register.scss"

const Registerpage = () => {
    const[formData,setFormData] = useState({
        firstName: "",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        profileImage:null
    })
    const handleChange = (e) => {
        const{name,value,files} = e.target
        setFormData({
            ...formData,
            [name]:value,
            [name]:name === "profileImage" ? files[0]:value
        })
    }
    console.log(formData)
  const [passwordMatch , setPasswordMatch] = useState(true)

  useEffect(() => {
   setPasswordMatch(formData.password === formData.confirmPassword || formData.confirmPassword === "")
  })


  const navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault()
       
        try{
            const register_form = new FormData()
            for(var key in formData){
                register_form.append(key,formData[key])
            }

            const response =  await fetch("http://localhost:4001/auth/register",{
                method: "POST",
                body: register_form
            })

            if(response.ok){
                navigate("/login")
            }

        }catch(err){
           console.log("Registration failed", err.message) 
        }
    }


  return (
    <div className='register'>
        <div className="register_content">
            <form className='register_content_form' onSubmit={handleSubmit}>
                <input
                name='firstName'
                placeholder='First Name' 
                value={formData.firstName}
                onChange={handleChange}
                required
                />
                <input
                name='lastName'
                placeholder='Last Name' 
                value={formData.lastName}
                onChange={handleChange}
                required
                />
                <input
                name='email'
                placeholder='Email' 
                type='email'
                value={formData.email}
                onChange={handleChange}
                required
                />
                <input
                name='password'
                placeholder='Password' 
                type='password'
                value={formData.password}
                onChange={handleChange}
                required
                />
                <input
                name='confirmPassword'
                placeholder='Confirm Password' 
                type='password'
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                />
                {!passwordMatch && (
                    <p style={{color: "red"}}>Passwords are not matched!</p>
                )}



                <input
                id='image'
                name='profileImage'
                type='file'
                accept='image/*'
                style={{display:"none"}}
                onChange={handleChange}
                required
                />
                <label htmlFor='image'>
                    <img src='/assests/addImage.png' alt='your profile image'/>
                    <p>Upload your Photo</p>
                </label>
                {formData.profileImage && (
                    <img src={URL.createObjectURL(formData.profileImage)}
                    alt='profile photo'
                    style={{maxWidth: "80px"}}/>
                )}
                <button type='submit' disabled={!passwordMatch}>Register</button>
            </form>
            <a href='/login'>Already have an account? Log in</a>


        </div>
    </div>
  )
}

export default Registerpage