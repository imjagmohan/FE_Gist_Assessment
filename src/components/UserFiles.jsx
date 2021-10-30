import React from "react";
import { Card, Badge, ListGroup } from "react-bootstrap";
import "../App.css";

export const UserFiles = (filelist) => {
    const files = filelist.filelist;

    var arrFileType = [];
    for (let file in files) {
        let language = files[file].language;
        
        if (arrFileType.indexOf(language) === -1) {
            arrFileType.push(language);
        }
    }
    return (
        <div className="fileBox">
            <Card className="cardWidth">
                <Card.Header>
                    <div className="badgeDisplay">
                        {arrFileType.map((lang, index) => {
                            return (
                                <h5 key={index}>
                                    <Badge key={index} bg="primary">{lang}</Badge>
                                </h5>
                            );
                        })}
                    </div>
                </Card.Header>
            </Card>
            <p>Files:</p>
            <ListGroup variant="flush" as="ul">
                {Object.values(files).map((file, index) => {
                    return (
                        <ListGroup.Item as="li" key={index}>
                            <a href={file.raw_url} target="_blank" rel="noreferrer" class="link-primary">{file.filename}</a>
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        </div>
    );
};