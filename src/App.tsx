import React from 'react';
import './App.css';
import {PostsPage} from './pagesView/postsPage/PostsPage';
import {AboutMePage} from './pagesView/aboutMePage/AboutMePage';
import {UserInfoPage} from './pagesView/userInfoPage/UserInfoPage';
import {Route, Routes, useLocation} from 'react-router-dom';
import {HeaderMenu} from './pagesView/HeaderMenu';


function App() {
  const location = useLocation();

  const isShowHeaderMenu = location.pathname === '/' || location.pathname === '/aboutMe';

  return (
    <div className='App'>
      {isShowHeaderMenu && <HeaderMenu/>}
      <Routes>
        <Route path='/' element={<PostsPage/>}/>
        <Route path='/aboutMe' element={<AboutMePage/>}/>
        <Route path='/userInfo/:id' element={<UserInfoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
