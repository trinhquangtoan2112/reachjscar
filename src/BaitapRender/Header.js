import React, { Component } from 'react'
import "./Header.css"
export default class Header extends Component {
  render() {
    return (
      <div className='header__item'>
            <div className='header__name'>
                <a href='#' >Cyberlearn Movie</a>
            </div>
            <div className='header__phu'>
                <a href='#' className='active'>Home</a>
                <a href='#'>Film</a>
                <a href='#' className='Dropdown'>Dropdown
                <ul className='dropdownmenu'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                </a>
             
            </div>
            
      </div>
    )
  }
}
