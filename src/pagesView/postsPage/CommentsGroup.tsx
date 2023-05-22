import React, {useState} from 'react';
import {Container, Navbar} from "react-bootstrap";
import {CommentCard} from "./CommentCard";

type CommentsGroupPropsType = {
  postId: number
}
export const CommentsGroup = ({postId}:CommentsGroupPropsType) => {
  const [isExpanded,setIsExpanded] = useState(false)
  const [isCommentsLoaded,setIsCommentsLoaded] = useState(false)

  const handleToggle = () => {
    if(!isCommentsLoaded){
      // my saga
    }
    setIsExpanded(!isExpanded)
    setIsCommentsLoaded(true)
  }
  return (
    <Navbar expanded={isExpanded}  expand={false}>
      <Container fluid>
        <Navbar.Toggle onClick={handleToggle} >Comments</Navbar.Toggle>
        {<Navbar.Collapse>
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
        </Navbar.Collapse>}
      </Container>
    </Navbar>
  );
};

