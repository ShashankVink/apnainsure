import React , {Component} from "react";
import Button from "react-bootstrap/Button";
import "../CSS/VehicleDetails.css";
import Card from "react-bootstrap/Card"


const Vehicle = () => {

    return (
        <div className="w-50">
            <Card className="mt-5 shadow-lg" style={{ height: "30rem", width: "94%",marginLeft:"55%" }}>
                    <Card.Body>
                        <Card className="mt-5" style={{height:"3rem", width:"15rem", borderColor:"black"}}></Card>
                        <Card className="mt-5" style={{height:"3rem", width:"15rem", borderColor:"black"}}></Card>
                        <Card className="mt-5" style={{height:"3rem", width:"15rem", borderColor:"black"}}></Card>
                        <Card className="mt-5" style={{height:"3rem", width:"15rem", borderColor:"black"}}></Card>                        
                    </Card.Body>
                </Card>
            <Button className=" ml-5" style={{ backgroundColor: "#FFAD64"}}>WRONG DETAILS?</Button>
            <Button className="" style={{ backgroundColor: "#FFAD64"}}>VIEW QUOTES</Button>

        </div>
    );
}

export default Vehicle;

