import React, {useEffect} from 'react';
import {Posts} from "./Posts";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {getPosts} from "../../store/postsReducer";

export const PostsPage = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(state => state.posts.posts)
  console.log(posts)
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);


  return (
    <main>
      <Posts/>
    </main>
  );
};

