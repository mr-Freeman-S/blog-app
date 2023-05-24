import React, {useEffect} from 'react';
import {Button, Card, Spinner} from 'react-bootstrap';
import {useNavigate, useParams} from "react-router-dom";
import {Posts} from '../postsPage/Posts';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {getUserInfo} from "../../store/userReducer";
import {resetCommentsState} from "../../store/commentsReducer";

export const UserInfoPage = () => {
  const {id: paramId} = useParams()
  const navigation = useNavigate();
  const dispatch = useAppDispatch()
  const userInfo = useAppSelector(state => state.user.userInfo)
  const userPosts = useAppSelector(state => state.user.userPosts)
  const isLoadingUser = useAppSelector(state => state.user.isLoadingUser)

  useEffect(() => {
    dispatch(getUserInfo(Number(paramId)))
  }, [dispatch, paramId]);

  const goBackHandler = () => {
    dispatch(resetCommentsState())
    navigation('/')
  }

  return (
    <div>
      <Button onClick={goBackHandler} variant="primary" size="sm">
        Go Back
      </Button>
      {isLoadingUser ? <div><Spinner/>Loading Profile</div> : <Card>
        <Card.Header>
          {userInfo.name}
        </Card.Header>
        <Card.Body>
          <Card.Text>{`my email: ${userInfo.email}`}</Card.Text>
          <Card.Text>{`my adress: ${userInfo.address.city}, ${userInfo.address.street}, ${userInfo.address.suite}`}</Card.Text>
          <Card.Text>{`my phone: ${userInfo.phone}`}</Card.Text>
        </Card.Body>
        <Posts posts={userPosts}/>
      </Card>}

    </div>
  );
};

