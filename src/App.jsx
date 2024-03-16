/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blog/Blogs'
import Bookmarks from './components/Bookmark/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setbookmarks] = useState([])
  const [marks, setmarks] = useState(0)



  const hadlerAddBookmark = blog=>{
    console.log('btn click ')
    const newBookmark = [...bookmarks, blog];
    setbookmarks(newBookmark)
  }

  const hadlerAddMarkAs =( id,time) =>{
    // console.log('btn click', time)
    const newMark =[...marks, time]
    setmarks(newMark)

    // remove item 
    const removeMark = bookmarks.filter(bookmark => bookmark.id !== id)
    setbookmarks(removeMark)
  }

  return (
    <div>
      <Header></Header>
      < hr className='mt-3 mx-20'/>

        <div className='flex justify-between mx-20 mt-4'>
          <Blogs hadlerAddMarkAs = {hadlerAddMarkAs} hadlerAddBookmark = {hadlerAddBookmark} ></Blogs>
          <Bookmarks marks = {marks} bookmarks = {bookmarks}  ></Bookmarks>

        </div>

    </div>
  )
}

export default App
