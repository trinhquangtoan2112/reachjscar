import React, { Component } from "react";

export default class Renderloop extends Component {
//   ProductList =[
//       {id:1,name:"blackcar",price:1000,img:require("../assets/CarBasic/products/black-car.jpg")},
//        {id:2,name:"redcar",price:61000,img:require("../assets/CarBasic/products/red-car.jpg")},
//      { id:3,name:"steelcar",price:31000,img:require("../assets/CarBasic/products/steel-car.jpg")},
//      { id:4,name:"whitecar",price:17000,img:require("../assets/CarBasic/products/silver-car.jpg")},
//   ]
  ProductList = [
    {
      id: 1,
      name: "blackcar",
      price: 1000,
      img: "./carbasic/products/black-car.jpg",
    },
    {
      id: 2,
      name: "redcar",
      price: 61000,
      img: "./carbasic/products/red-car.jpg",
    },
    {
      id: 3,
      name: "steelcar",
      price: 31000,
      img: "./carbasic/products/steel-car.jpg",
    },
    {
      id: 4,
      name: "whitecar",
      price: 17000,
      img: "./carbasic/products/silver-car.jpg",
    },
  ];

  renderTable = () => {
    let mangCompoment = [];
    for (var i = 0; i < this.ProductList.length; i++) {
        let product = this.ProductList[i];
        let trJs = <tr key={i}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td><img style={{width:"100px"}} src={product.img} alt={product.name +"hinh anh"} /></td>
        </tr>
        mangCompoment.push(trJs)
    }

    return mangCompoment;
  };
  render() {
    return (
      <div>
        {/* <img src={require(this.ProductList[2].img)} alt='12241'></img> */}
        {/* <img src={this.ProductList[2].img} alt='12241'></img> */}

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <td>id</td>
                <td>Name</td>
                <td>price</td>
                <td>Img</td>
              </tr>
            </thead>
            <tbody>
            {this.renderTable()}
            </tbody>
          </table>
        </div>
         {/* <img src={this.ProductList[2].img} alt='12241'></img>  */}
      </div>
    );
  }
}
