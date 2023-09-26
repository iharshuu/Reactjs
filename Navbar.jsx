import React, {  useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import "./Navbar.scss"
import Cart from '../Cart/Cart';
import Brightness4Sharp from '@mui/icons-material/Brightness4Sharp';

const Navbar = ({x}) => {
  const [open , setOpen] = useState(false)
  const prod = useSelector(state => state.cart.products)
  const [theme , setTheme] = useState(false)

  const [contact,setContact] = useState("Contact")

  const handler=()=>{

    navigator.clipboard.writeText("+63 44571106")

    setContact("Copied")
    setTimeout(function() {
      setContact("Contact");
    }, 1000);
    
  }

  const handlee =() =>{
    setTheme(theme=>!theme)

    x(!theme)

  }
  console.log(theme)


  

  return (
    <div className='navbar'>
        <div className="wrapper">

        <div className ="left">

          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item1" onClick={handlee}>
            {theme ? <LightModeSharpIcon/> : <Brightness4Sharp/> }
            
          </div>
          <div className="item">
            <Link className='link'  to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/1">Men</Link>
          </div> <div className="item">
            <Link className='link' to="/products/1">Children</Link>
          </div>
        </div>
        <div className ="center">
          <Link  className='link' to="/">STORE</Link>
        </div>
        <div className ="right">
        <div className ="item">
          <Link className='link' to="/">Home</Link>
        </div><div className ="item">
          <Link className='link' to="/" >About</Link>
        </div><div className ="item">
          <Link className='link' to="/" onClick={handler}>{contact}</Link>
        </div><div className ="item">
          <Link className='link' to="/Products/:id">STORE</Link>
        </div>
        <div className="icons">
          <SearchIcon/>
          <PersonIcon/>
          <FavoriteBorderIcon/>
          <div className="cartIcon" onClick={()=>setOpen(!open)}>
          <AddShoppingCartIcon/>
          <span>{prod.length}</span>
          </div>
          
        </div>
        </div>

        </div>
        {open && <Cart theme ={theme}/>}

    </div>
  )
}

export default Navbar