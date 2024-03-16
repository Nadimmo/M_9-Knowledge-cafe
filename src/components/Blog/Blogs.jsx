/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";
import Blog from "./Blog";

const Blogs = ({hadlerAddBookmark,hadlerAddMarkAs }) => {
    const [blogs, setBlog] = useState([])
    useEffect(()=>{
        fetch('Blogs.json')
        .then(rs => rs.json())
        .then(data => setBlog(data))
    },[])

    return (
        <div className="w-3/5">
            <h1>Blogs Length : {blogs.length} </h1>
            <div>
                {
                    blogs.map(blog => 
                    <Blog 
                        hadlerAddMarkAs = {hadlerAddMarkAs }  
                        hadlerAddBookmark = {hadlerAddBookmark} 
                        key={blog.id} 
                        blog = {blog}
                     ></Blog>)
                }
            </div>
           
        </div>
    );
};

export default Blogs;