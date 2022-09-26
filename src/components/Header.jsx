import React from 'react'
import '../App.css'
const Header = () =>{
    return(
        <div className='header'>
            <div className='logo'>
                <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div className='menu'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default Header