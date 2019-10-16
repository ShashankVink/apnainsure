import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default class login extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="txt " style={{ marginLeft: "0%", textAlign: "center", marginTop: "5%", marginBottom: "5%" }}>
                        <h1>
                            LOGIN</h1>
                    </div>
                    <div style={{ textAlign: "center" }}>

                        <Form style={{ display: "inline-block" }}>
                            <Form.Group as={Row} controlId="formHorizontalEmail" >
                                <Form.Label column sm={4}>
                                    Email
                      </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={4}>
                                    Password
                      </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password" style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }} />
                                </Col>
                            </Form.Group>
                            <fieldset>
                                <Form.Group as={Row}>

                                </Form.Group>
                            </fieldset>


                            <Form.Group as={Row}>
                                <Col sm={10}>
                                    <Button style={{ backgroundColor: "#F97552", borderColor: "white" }} type="submit" >Login</Button>
                                </Col>
                            </Form.Group>
                            <Link to="" style={{ position: "absolute", top: "75%" }}>Forgot Password?</Link>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}