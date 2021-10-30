import React from 'react';
import { SearchBox } from './SearchBox';
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import '../App.css';

const Gist = () => (
    <React.Fragment>
        <Card>
            <Card.Body>
                <Card.Title>Code Assessment for Front-end Engineer</Card.Title>
                <Card.Text>A user should be able to enter a username and get the full list of public Gists for that user. The following are a list of functional requirements for this assignment:
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Search: When a user enters a username, it should be able to get a full list of public Gists by that user.</ListGroupItem>
                <ListGroupItem>Filetype: Convert the filetypes of the files in the gist into a tag/badge, (e.g, if the returned gist has list of files containing python and JavaScript files, the gist should have the respective tags/badges).</ListGroupItem>
                <ListGroupItem>Fork: Username/Avatar of the last 3 users who forked it with avatar linking to the fork.</ListGroupItem>
            </ListGroup>
        </Card>
        <SearchBox />
    </React.Fragment>
)

export default Gist;