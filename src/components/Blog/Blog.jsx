/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaBookmark } from "react-icons/fa6";
const Blog = ({blog, hadlerAddBookmark,hadlerAddMarkAs }) => {
    // console.log(blog)
    const {id,cover, title, author_img, author,posted_date, reading_time, hashtags} = blog
    return (
        <div>
            <img className="mt-14" src={cover} alt="" />
            <div className="flex justify-between mt-5">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-4">
                        <h3 className="font-bold">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span> {reading_time} min Read</span>
                    <button onClick={()=>hadlerAddBookmark(blog)} className="text-red-500" ><FaBookmark /></button>
                </div>
            </div>
            <h1 className="text-4xl font-bold mt-4"> {title}</h1>
            <div className="mt-4">
                {
                    hashtags.map(has => <span className="ml-2">#{has}</span>)
                }
            </div>
            <button onClick={()=> hadlerAddMarkAs(id,reading_time)}  className="ml-2 mt-2 "><a href="" className="underline text-blue-400 font-bold">Mark as Read</a></button>
        </div>
    );
};

export default Blog;