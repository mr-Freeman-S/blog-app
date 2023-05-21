import React from 'react';
import {Nav} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

export const UserInfoPage = () => {
  const navigation = useNavigate();
  return (
    <div>
        <Nav.Link onClick={() => navigation(-1)}>Back</Nav.Link>
    </div>
  );
};

