import React from 'react';
import { Card, ListGroup } from "react-bootstrap";
import '../App.css';
import { UserFiles } from "./UserFiles";

export const UserGistResults = (userData, userName) => {
    const data = userData.userData;    
    return (
        <React.Fragment>
            {userName !== null && userData.length !== 0 ? (
        <>
        <ul>
            {data.map((gist, index) => {
                return <>
                <Card key={index} className="cardWidth">
                    <Card.Body>
                        <Card.Title>{gist.description === "" ? "No description available." : gist.description}</Card.Title>
                        <div className="leftAlign">
                            <ListGroup variant="flush">
                                <ListGroup.Item><UserFiles filelist={gist.files} /></ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Card.Body>
                </Card>
                </>;
            })}
        </ul>
        </>
      ) : null}
        </React.Fragment>
    );
}