import React from 'react';
import {Toast} from "react-bootstrap";

type ErrorPropsType = {
  message: string
}
export const Error = ({message}: ErrorPropsType) => {
  return (
    <Toast bg={'warning'}>
      <Toast.Header>
        <strong className="me-auto">Error</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

