import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import "../CSS/Firstpage.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";


export default class Firstpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isManf: false,
            isVariant: false,
            isRegister: false,
        };
        this.handleManf = this.handleManf.bind(this);
        this.handleVariant = this.handleVariant.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }
    handleManf() {
        this.setState({ isManf: true, isVariant: false, isRegister: false });

    }
    handleVariant() {
        this.setState({ isManf: false, isVariant: true, isRegister: false });

    }
    handleRegister() {
        this.setState({ isManf: false, isVariant: false, isRegister: true });

    }
    render() {
        return (
            <div>
                <Card className="w-50 mx-auto mt-5 shadow-lg" style={{ height: "30rem" }}>
                    <Card.Body >
                        <Dropdown className="text-left" onClick={this.handleManf} >
                            <Dropdown.Toggle variant="light" style={{ marginTop: "1rem" }} >
                                MANUFACTURER
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Chevrolet</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Fiat</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Honda</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Chevrolet</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Fiat</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Honda</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Chevrolet</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Fiat</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Honda</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="text-center" onClick={this.handleVariant} >
                            <Dropdown.Toggle variant="light" style={{ marginTop: "-4rem", width: "10rem" }} >
                                CAR VARIANT
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Aveo</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Beat</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Captiva</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Aveo</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Beat</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Captiva</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Aveo</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Beat</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Captiva</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="text-right"onClick={this.handleRegister}>
                            <Dropdown.Toggle variant="light" style={{ marginTop: "-7rem" }} >
                                REGISTRATION YEAR
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">2019</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">2018</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">2017</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">2019</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">2018</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">2017</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">2019</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">2018</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">2017</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="light" className="" style={{marginTop:"18rem",marginLeft:"22rem"}}><i>	&#xf0a4;</i></Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}