import { useState } from "react"
import { validation } from "../validation";


export const Form = ({login}) => { 

  const handleSubmit = (event) => { 
    event.preventDefault()
    login(userData);
  }

  const [errors, setErrors] = useState({})

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
    
    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <form onSubmit = {handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input type="email" placeholder="ingrese su email" name="email" value={userData.email} onChange={handleChange}/>
        {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
        <hr />
        <label htmlFor="password">Password: </label>
        <input type="text" placeholder="ingrese su contraseña" name="password" value={userData.password} onChange={handleChange}/>
        {errors.password && <p style={{color:"red"}}>{errors.password}</p>}

        <button>Submit</button> 

    </form>
  )
}
