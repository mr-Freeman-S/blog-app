import React, {useState} from 'react';
import {Container, Navbar, Spinner} from 'react-bootstrap';
import {CommentCard} from './CommentCard';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getComments} from '../../store/commentsReducer';

type CommentsGroupPropsType = {
  postId: number
  isLoading:boolean
  loadingHandler: (postId:number) => void
}
export const CommentsGroup = ({postId, loadingHandler, isLoading}: CommentsGroupPropsType) => {
  const comments = useAppSelector(state => state.comments.commentsPost)
  const dispatch = useAppDispatch()


  let filteredComments = comments.filter(el => el.postId === postId)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isCommentsLoaded, setIsCommentsLoaded] = useState(false)


  const handleToggle = async () => {
    if (!isCommentsLoaded) {
      dispatch(getComments(postId))
    } else {
      setIsExpanded(true)
    }
    setIsExpanded(!isExpanded)
    setIsCommentsLoaded(true)
  }
  return (
    <Navbar expanded={isExpanded && !isLoading} expand={false}>
      <Container fluid>
        <Navbar.Toggle onClick={handleToggle}>{isLoading  ?
          <div><Spinner animation='grow' size='sm' variant='secondary'/>Loading...</div> : 'Comments'}</Navbar.Toggle>
        <Navbar.Collapse>
          {filteredComments.map((el, index) => <CommentCard email={el.email} text={el.body} key={index}/>)}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

