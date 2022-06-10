import { Oyo  , Oo , Goolelogin} from "./Styled"
import {FaFacebook} from "react-icons/fa";
import { useContext, useState } from "react";
import { signup , login , singup2} from "./Firebase";

import Notepad from "../context/Notepad";
import { MdCheckBox } from "react-icons/md";
export default function Signup(){

  const a = useContext(Notepad)

    
    const [email , setemail ] = useState('')
    const [emailError , setemailError] = useState('')
    const [passoword , setpassoword] = useState('')
    const [confirm , setconfirm] = useState('')
    const [error ,seterror] = useState('')
    const [loading  , setloading] = useState(false)
    const [check , setcheck] = useState(true)


   const handleSign = async () => {
       setloading(true)
       try {
         await signup(email , passoword)
      }
      catch{
         seterror('Something went wrong')
      }
      setloading(false)
    }


  
const handleLogin = async () => {
    setloading(true)
    try {
     await login(email , passoword)
   }
   catch{
     seterror('Failed to login')
   }
   setloading(false)
 }

 const width = window.innerWidth;


 const google = async () => {
   setloading(true)
    try {
         await singup2(email,passoword)
    }catch{
         seterror('SignUp with google is failed')
    }
    setloading(false)
 }
 

return(
  <div style={{width:width < 600 ? '30rem' : '70rem'}}>
        <FaFacebook style={{float:'left',width: '23rem',height: '23rem', margin: '3rem', color:a === false ? 'black' : 'rgb(0 143 255)'}}/>
        <div style={{ float:'right' , marginTop:width < 600 ? '0rem' : '10rem'}}>   
            <Oyo placeholder="email" type='email' onChange={(e) => setemail(e.target.value)}/>
            <Oyo placeholder="passoword" type='password' onChange={(e) => setpassoword(e.target.value)}/>           
            <input type='checkbox' style={{float:'left' , marginLeft:'44px' , marginTop:'20px'}} onChange={() => setcheck((e) => !e)}/>
            <Oo>I Agree</Oo>
           <div style={{marginLeft:'2rem'}}>
           <h4 style={{color:'red'}}>{error}</h4>
            <Goolelogin style={{background:check === false ? '#008fff' : '#ff4747'}} onClick={handleSign}>{loading === true ? 'Loading...' : 'Sign up '}</Goolelogin>
            <Goolelogin style={{background:check === false ? '#008fff' : '#ff4747'}} onClick={handleLogin}>{loading === true ? 'Loading...' : 'Login'}</Goolelogin>
          <Goolelogin style={{background:check === false ? '#008fff' : '#ff4747'}} onClick={google} disabled={loading === true ? true : false || check === true ? true : false}>{loading === true ? 'Loading...' : 'Sign up with google'}</Goolelogin>
           </div>
     </div>
 </div>
  )
}