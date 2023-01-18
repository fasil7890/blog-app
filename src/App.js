import Header from "./components/header";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/auth";
import Blogs from "./components/blogs";
import UserBlogs from "./components/userBlogs";
import BlogDetail from "./components/blogDetail";
import AddBlog from "./components/addBlog";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

function App() {
const dispatch = useDispatch();  
useEffect(()=>{
  if(localStorage.getItem("userId")){
    dispatch(authActions.login());
  }
},[dispatch])
  const isLoggedIn = useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn);
  return <React.Fragment>
    <header>
      <Header/>
    </header>

    <main>
    <Routes>
      { !isLoggedIn ? <Route path="/auth" element={<Auth/>}/>:
      <>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/myBlogs" element={<UserBlogs/>}/>
      <Route path="/myBlogs/:id" element={<BlogDetail/>}/>
      <Route path="/blogs/add" element={<AddBlog/>}/> {" "}
      </>
}
    </Routes>
    </main>
  </React.Fragment>
}

export default App;
