import React, { Component } from "react";
//import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../CSS/Car.css";
//import Image from "react-bootstrap/Image";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup"


const Car = () => {

    return (
        <div className="text-center main-box-margin w-50">
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Enter Your Car Number"
                    aria-label="Enter Your Car Number"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2" className="fa fa-search"></InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            <Button className="mt-5 ml-5 mx-auto my-50" style={{ backgroundColor: "#FFAD64" }}>VIEW QUOTES</Button>

        </div>
    );
}

export default Car;


