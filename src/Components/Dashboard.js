import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Firstpage.css";
import Card from "react-bootstrap/Card";
//import Image from "react-bootstrap/Image";
//import InputGroup from "react-bootstrap/InputGroup";
import Figure from "react-bootstrap/Figure";
import Figcaption from "react-bootstrap/FigureCaption";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";


export default class Firstpage extends Component {
    render() {
        return (
            <div>
                <Card className="w-100 mx-auto " style={{ height: "10rem", backgroundColor: "#FFAD64" }}>
                    <Card.Body>
                        <Figure class="figure">
                            <img src="" class="figure-img img-fluid rounded" alt="Profile Photo of the Agent" style={{ marginLeft: "1rem" }} />
                            <Figcaption style={{ marginLeft: "11rem", marginTop: "-2rem" }}>Name:</Figcaption>
                            <Figcaption style={{ marginLeft: "11rem", marginTop: "0rem" }}>Joined Date:</Figcaption>
                            <Figcaption style={{ marginLeft: "11rem", marginTop: "0rem" }}>Partner Code:</Figcaption>
                        </Figure>
                        <h6 class="text-center" style={{ marginTop: "-6rem" }}>BUSINESS SUMMARY</h6>
                        <div>
                            <ButtonGroup style={{ marginLeft: "75%" }}>
                                <Button variant="outline-dark" size="sm">TODAY</Button>
                                <Button variant="outline-dark" size="sm">THIS MONTH</Button>
                                <Button variant="outline-dark" size="sm">THIS YEAR</Button>
                                <Button variant="outline-dark" size="sm">SELECT DATE</Button>
                            </ButtonGroup>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <h6>Policy Sold</h6>
                            <h6>OD Premium</h6>
                            <h6>Renewal Status</h6>
                        </div>
                    </Card.Body>
                </Card>
                <DropdownButton id="dropdown-item-button" title="Dropdown button">
                    <Dropdown.Item as="button">Today</Dropdown.Item>
                    <Dropdown.Item as="button">This Month</Dropdown.Item>
                    <Dropdown.Item as="button">This Year</Dropdown.Item>
                    <Dropdown.Item as="button">Select Date</Dropdown.Item>
                </DropdownButton>
            </div>
        );
    }
}