import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Usercard = ({ user }) => {
  return (
    <div>
      <Card border="danger" style={{ width: "18rem" , display:'flex' , flexWrap:"wrap"}}>
        <Card.Header>name: {user.name}</Card.Header>
        <Card.Body>
          <Card.Title> email: {user.email}</Card.Title>
          <Card.Text> Geo:{user.address.geo.lat} : {user.address.geo.lng}</Card.Text>
          {console.log(user)}
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default Usercard;
