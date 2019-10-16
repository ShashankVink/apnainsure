import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Firstpage.css";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import Figure from "react-bootstrap/Figure";
import Figcaption from "react-bootstrap/FigureCaption";
import Button from "react-bootstrap/Button"


export default class Firstpage extends Component {
    render() {
        return (
            <div>
                <Card className="w-100 mx-auto " style={{ height: "10rem", backgroundColor: "#FFAD64" }}>
                    <Card.Body>
                        <Figure class="figure">
                            <img src="" class="figure-img img-fluid rounded" alt="Profile Photo of the Agent" style={{marginLeft:"1rem"}}/>
                            <Figcaption style={{ marginLeft: "11rem", marginTop: "-2rem" }}>Name:</Figcaption>
                            <Figcaption style={{ marginLeft: "11rem", marginTop: "0rem" }}>Joined Date:</Figcaption>
                            <Figcaption style={{ marginLeft: "11rem", marginTop: "0rem" }}>Partner Code:</Figcaption>
                        </Figure>
                        <h6 class="text-center">BUSINESS SUMMARY</h6>
                        <div>
                        <Button variant="outline-dark" size="sm" >TODAY</Button>
                        <Button variant="outline-dark"size="sm">THIS MONTH</Button>
                        <Button variant="outline-dark"size="sm">THIS YEAR</Button>
                        <Button variant="outline-dark" size="sm">SELECT DATE</Button>
                        </div>
                        <div>
                            <h6>Policy Sold</h6>
                            <h6 >OD Premium</h6>
                            <h6 >Renewal Status</h6>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}