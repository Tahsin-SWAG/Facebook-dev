import {FaFacebook} from "react-icons/fa";
import {NavLink} from 'react-router-dom';
import { Bc } from "./Styled";
import {FaHome } from 'react-icons/fa';
import {FaUserFriends} from 'react-icons/fa';
import {RiGroup2Fill} from 'react-icons/ri';
import {SiFacebookgaming} from 'react-icons/si';
import { useContext, useState } from "react";
import Notepad from "../context/Notepad";
import { logout } from "./Firebase";
import {FiLogOut} from 'react-icons/fi';
export default function Header() {


  const width = window.innerWidth;

  const a = useContext(Notepad)

const Home = {
  fontSize: '35px',
    borderRadius: '7px',
    marginLeft:width < 600 ? '7rem' : '32rem',
    display:'flex',
    marginTop: '-43px',
    color: '#3456cf',
    marginBottom: '10px'
}
const Frinds = {
  fontSize: '35px',
    borderRadius: '7px',
    marginLeft:width < 600 ? '12rem' : '37rem',
    display: 'flex',
    marginTop: '-43px',
    color: '#3456cf',
    marginBottom: '10px'
}

const Group = {
  fontSize: '35px',
    borderRadius: '7px',
    marginLeft:width < 600 ? '17rem' : '42rem',
    display: 'flex',
    marginTop: '-43px',
    color: '#3456cf',
    marginBottom: '10px'
}

const Gaming = {
  fontSize: '33px',
    borderRadius: '7px',
    marginLeft:width < 600 ? '22rem' : '47rem',
    display: 'flex',
    marginTop: '-43px',
    color: '#3456cf',
    marginBottom: '10px'
}


const handlelogout = async() => {
  try{
     await logout()
  }catch{
     alert('Something went wrong')
  }
}


  return (
    <div style={{position:'sticky' , top:0  , background:a === false ? 'Black' : 'white'  , padding:'10px'}}> 
      <NavLink to="/Post"><FaFacebook style={{fontSize: '42px',color: '#008fff'}}/></NavLink>
      <Bc placeholder="Set Your NickName Fastly" style={{display:width < 600 ? 'none'  : 'flex'}}/>
    <NavLink to="/Post"><FaHome style={Home}/></NavLink>
    <NavLink to="/Frinds"><FaUserFriends style={Frinds}/></NavLink>
    <NavLink to="/Groups"><RiGroup2Fill style={Group}/></NavLink>
    <NavLink to="/Gaming"><SiFacebookgaming style={Gaming}/></NavLink>
    <h2 type='button' onClick={handlelogout} style={{float: 'right' , display: 'flex',  marginTop: '-38px' , color:a === false ? 'white' : 'black' ,fontSize:'26px' }}><FiLogOut/></h2>
    <hr style={{width:'100%' , marginTop:'2px'}}></hr>
    </div>
  )
}
