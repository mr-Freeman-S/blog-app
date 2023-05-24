import React from 'react';
import {Container, Navbar, Spinner} from 'react-bootstrap';
import {CommentCard} from './CommentCard';
import {CommentType} from "../../types";

type CommentsGroupPropsType = {
  isExpanded: boolean
  handleToggle: () => void
  comments: CommentType[]
  isLoadingComments: boolean
}
export const CommentsGroup = ({isExpanded, handleToggle, comments, isLoadingComments}: CommentsGroupPropsType) => {

  return (
    <Navbar expanded={isExpanded && !isLoadingComments} expand={false}>
      <Container fluid>
        <Navbar.Toggle onClick={handleToggle}>{isLoadingComments ?
          <div><Spinner animation='grow' size='sm' variant='secondary'/>Loading...</div> : 'Comments'}</Navbar.Toggle>
        <Navbar.Collapse>
          {comments.map((el, index) => <CommentCard email={el.email} text={el.body} key={index}/>)}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

