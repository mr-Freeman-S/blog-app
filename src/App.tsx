import React from 'react';
import './App.css';
import {HeaderMenu} from './pagesView/HeaderMenu';
import {PostsPage} from './pagesView/postsPage/PostsPage';
import {AboutMePage} from './pagesView/aboutMePage/AboutMePage';
import {UserInfoPage} from './pagesView/userInfoPage/UserInfoPage';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <HeaderMenu/>
      <Routes>
        <Route path='/' element={<PostsPage/>}/>
        <Route path='/aboutMe' element={<AboutMePage/>}/>
        <Route path='/userInfo/:id' element={<UserInfoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
