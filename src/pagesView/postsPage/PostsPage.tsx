import React, {useEffect} from 'react';
import {Posts} from './Posts';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getPosts} from '../../store/postsReducer';
import {Error} from "../../commonComponents/Error";
import {Spinner} from "react-bootstrap";

export const PostsPage = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(state => state.posts.posts)
  const error = useAppSelector(state => state.user.error)
  const isLoadingPosts = useAppSelector(state => state.posts.isLoadingPosts)


  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);

  return (
    <main>
      {error && <Error message={error}/>}
      {isLoadingPosts
        ? <div><Spinner animation='border' size='sm' variant='secondary'/>Loading...</div>
        : <Posts posts={posts}/>}
    </main>
  );
};

