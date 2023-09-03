import React, { Component } from 'react'
    import data1 from "../Data/DataFilms.json";
export default class Carditem extends Component {

    
     render123(){
      return console.log(data1);
     }
  render() {
    return (
      <div>
       <div className='row'>
        <div className="col-2 card__item1">
          <img src='' style={{width:"100%"}} ></img>
        </div>
         </div>
      </div>
    )
  }
}
