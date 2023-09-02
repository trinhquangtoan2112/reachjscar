import React, { Component } from 'react'
import chonXE from "./Chonxe.module.css"
import "./Chonxe.css"
export default class Baitapchonxe extends Component {
    state = {
        imgProduct: require("../assets/CarBasic/products/black-car.jpg")
    }


    renderCar(imgNewProduct) {

        let newState = {
            imgProduct:imgNewProduct
        }
        this.setState(newState);
    }
    render() {





        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-7'>
                        <img style={{ width: "100%" }} src={this.state.imgProduct} alt='anh1'></img>
                    </div>
                    <div className='col-5'>
                        <div className="card ">
                            <div className={chonXE.card_header}>Exteriror color</div>
                            <div className="card-body">
                                <div className='row border border-light pt-2 pb-2 card_item' onClick={() => {
this.renderCar(require("../assets/CarBasic/products/black-car.jpg"));
                                }} style={{ cursor: 'pointer' }}>
                                    <img className='col-4' src={require("../assets/CarBasic/icons/icon-black.jpg")} alt='icon-black.jpg' />
                                    <div className='col-8' >
                                        <h3>Crystal black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className='row border border-light pt-2 pb-2 card_item' onClick={() => {
this.renderCar(require("../assets/CarBasic/products/red-car.jpg"));
                                }} style={{ cursor: 'pointer' }}>
                                    <img className='col-4' src={require("../assets/CarBasic/icons/icon-red.jpg")} alt='icon-black.jpg' />
                                    <div className='col-8' >
                                        <h3>Crystal black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className='row border border-light pt-2 pb-2 card_item' onClick={() => {
this.renderCar(require("../assets/CarBasic/products/silver-car.jpg"));
                                }} style={{ cursor: 'pointer' }}>
                                    <img className='col-4' src={require("../assets/CarBasic/icons/icon-silver.jpg")} alt='icon-black.jpg' />
                                    <div className='col-8' >
                                        <h3>Crystal black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className='row border border-light pt-2 pb-2 card_item' onClick={() => {
this.renderCar(require("../assets/CarBasic/products/steel-car.jpg"));
                                }} style={{ cursor: 'pointer' }}>
                                    <img className='col-4' src={require("../assets/CarBasic/icons/icon-steel.jpg")} alt='icon-black.jpg' />
                                    <div className='col-8' >
                                        <h3>Crystal black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
