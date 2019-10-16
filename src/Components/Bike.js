import React, { Component } from "react";
//import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../CSS/Bike.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";



const Bike = () => {

    return (
        <div className="text-center main-box-margin w-50">
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Enter Your Bike Number"
                    aria-label="Enter Your Bike Number"
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



export default Bike;