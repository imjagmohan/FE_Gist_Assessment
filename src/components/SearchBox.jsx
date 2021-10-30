import React, { useState } from 'react';
import { getGistUrl } from './config';
import { InputGroup, FormControl, Button, Spinner, Alert } from "react-bootstrap";
import { UserGistResults } from './UserGistResults';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export const SearchBox = () => {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onUserChange = (e) => {
    if (e.length === 0) {
      setUserName('');
      setUserData([]);
      setError(false);
    } else {
      setUserName(e);
    }
  }

  const onSearch = async () => {
    const uName = userName.trim();
    setLoading(true);

    if (uName && uName !== "") {
      try {
        const URL = getGistUrl(uName);
        const res = await fetch(URL);
        const data = await res.json();
        if (data && data.length > 0) {
          setUserData(data);
          setLoading(false);
          setError(false);
          console.log(data);
        } else {
          setError(true);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    } else if (uName === "" || uName === undefined) {
      setLoading(false);
      setError(true);
    }
  }
  
  return (
    <div className="search_box">
    <InputGroup className="mb-3">
      <FormControl placeholder="Enter Username" value={userName} onChange={e => (onUserChange(e.target.value))}/>
      <Button variant="outline-secondary" id="button-addon2" onClick={onSearch}>Search</Button>
    </InputGroup>

    {loading ? <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
      </Spinner> : null
    }

    {userName !== "" && (userData && userData.length) > 0 && !error ? (
      <>
        <Alert variant="success" >
          <p>{userData.length + " Gists found for " + userName + "."}</p>
        </Alert>
        <UserGistResults userData={userData} userName={userName} />
      </>
    ) : null}

    { error ? (
      <Alert variant="danger" >
        <p>{"No Gists found for " + userName + "."}</p>
      </Alert>
    ) : null}
    
    {/* {userName && userData.length === 0 ? (
        <Alert variant="danger" >
          <p>{"No data for this User"}</p>
        </Alert>
      ) : null}

    {userName ==='' ? (
      <Alert variant="danger">
        <p>{"Please Enter Valid UserName"}</p>
      </Alert>
    ) : null} */}
    </div>
  );
}
