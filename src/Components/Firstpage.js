import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Firstpage.css";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";
import Car from "./Car";
import Bike from "./Bike";
import Health from "./Health";
import Commercial from "./Commercial";
import Life from "./Life";
import Third from "./Third";
import Login from "./Login";
import Link from "react-bootstrap/NavLink"


export default class Firstpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCar: true,
            isBike: false,
            isHealth: false,
            isLife: false,
            isComm: false,
            isThird: false,
            isLogin: false
        };

        this.handleCar = this.handleCar.bind(this);
        this.handleBike = this.handleBike.bind(this);
        this.handleHealth = this.handleHealth.bind(this);
        this.handleLife = this.handleLife.bind(this);
        this.handleComm = this.handleComm.bind(this);
        this.handleThird = this.handleThird.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleCar() {
        this.setState({ isCar: true, isBike: false, isHealth: false, isLife: false, isComm: false, isThird: false, isLogin: false });

    }
    handleBike() {
        this.setState({ isCar: false, isBike: true, isHealth: false, isLife: false, isComm: false, isThird: false, isLogin: false });

    }
    handleHealth() {
        this.setState({ isCar: false, isBike: false, isHealth: true, isLife: false, isComm: false, isThird: false, isLogin: false });

    }
    handleLife() {
        this.setState({ isCar: false, isBike: false, isHealth: false, isLife: true, isComm: false, isThird: false, isLogin: false });

    }
    handleComm() {
        this.setState({ isCar: false, isBike: false, isHealth: false, isLife: false, isComm: true, isThird: false, isLogin: false });

    }
    handleThird() {
        this.setState({ isCar: false, isBike: false, isHealth: false, isLife: false, isComm: false, isThird: true, isLogin: false });

    }
    handleLogin() {
        this.setState({ isCar: false, isBike: false, isHealth: false, isLife: false, isComm: false, isThird: false, isLogin: true })
    }
    render() {
        return (

            <div>
                <Card className="mx-auto mt-5 shadow-lg" style={{ height: "30rem", width: "64%" }}>
                    <Card.Header>
                        <div class="row navbarr">
                            <div class="col-md-6 col-sm-4 col-lg-2 col-xs-2"><Link onClick={this.handleCar}>CAR</Link></div>
                            <div class="col-md-6 col-sm-4 col-lg-2 col-xs-2"><Link onClick={this.handleBike}>BIKE</Link></div>
                            <div class="col-md-6 col-sm-4 col-lg-2 col-xs-2"><Link onClick={this.handleHealth}>HEALTH</Link></div>
                            <div class="col-md-6 col-sm-4 col-lg-2 col-xs-2"><Link onClick={this.handleLink}>LIFE</Link></div>
                            <div class="col-md-6 col-sm-4 col-lg-2 col-xs-2"><Link onClick={this.handleComm}>COMMERCIAL<br />VEHICLE</Link></div>
                            <div class="col-md-6 col-sm-4 col-lg-2 col-xs-2"><Link onClick={this.handleThird}>THIRD PARTY</Link></div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        {this.state.isCar && <Car />}
                        {this.state.isBike && <Bike />}
                        {this.state.isHealth && <Health />}
                        {this.state.isLife && <Life />}
                        {this.state.isComm && <Commercial />}
                        {this.state.isThird && <Third />}
                        {this.state.isLogin && <Login />}
                    </Card.Body>
                </Card>
            </div >
        );
    }
}
