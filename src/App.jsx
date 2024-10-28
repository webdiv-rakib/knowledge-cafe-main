import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = blog => {
    console.log('Bookmark adding soon');
  }
  return (
    <>
      <Header></Header>
      <main className='md:flex container mx-auto'>
        <Blogs handleAddToBookmark = {handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
