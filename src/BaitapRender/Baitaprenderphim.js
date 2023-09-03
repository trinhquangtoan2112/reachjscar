import React, { Component } from 'react'
import Header from './Header'
import "./Background.css"
import Carditem from './Carditem'
export default class Baitaprenderphim extends Component {
  render() {
    return (
      <div className='background'>
        <Header></Header>

        <div className='body1'>
          <Carditem></Carditem>
        </div>
      </div>
    )
  }
}
