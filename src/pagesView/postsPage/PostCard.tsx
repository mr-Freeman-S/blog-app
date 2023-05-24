import React, {useState} from 'react';
import {Card, Image, Nav} from 'react-bootstrap';
import profileImg from './../../assets/img/profileImg.png'
import {PostType} from '../../types';
import {CommentsGroup} from './CommentsGroup';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {getComments} from "../../store/commentsReducer";

type PostTypeProps = {
  post: PostType
}

export const PostCard = ({post}: PostTypeProps) => {

  const comments = useAppSelector(state => state.comments.commentsPost)
  const commentsPostIsLoading = useAppSelector(state => state.posts.commentsPostIsLoading)
  const dispatch = useAppDispatch()

  let filteredComments = comments.filter(el => el.postId === post.id)

  const [isExpanded, setIsExpanded] = useState(false)
  const [isCommentsLoaded, setIsCommentsLoaded] = useState(false)


  const handleToggle = async () => {
    if (!isCommentsLoaded) {
       dispatch(getComments(post.id))
    } else {
      setIsExpanded(true)
    }
    setIsExpanded(!isExpanded)
    setIsCommentsLoaded(true)
  }

  return (
    <Card border='primary' className='flex-row align-items-center m-4 p-2'>
      <Nav.Link href={`/userInfo/${post.userId}`}>
        <Image roundedCircle width={50} height={50} src={profileImg}/>
      </Nav.Link>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <CommentsGroup isLoadingComments={post.id === commentsPostIsLoading} handleToggle={handleToggle}
                       isExpanded={isExpanded}
                       comments={filteredComments}/>
      </Card.Body>
    </Card>
  );
};

