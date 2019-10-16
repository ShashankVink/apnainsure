import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Login from "./Login";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

            isLogin: false
        };
        this.handleLogin = this.handleLogin.bind(this);

    }
    handleLogin() {
        this.setState({ isLogin: true, })
    }
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Image className="img-fluid" src={require("../images/logo.png")}/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="login" onClick={this.handleLogin}>Login/Sign Up</Nav.Link>
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                            <Nav.Link href="#help">Help</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {this.state.isLogin && <Login />}
            </div >
        );
    }
}


export default Header;