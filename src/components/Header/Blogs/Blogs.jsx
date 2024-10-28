import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark = {handleAddToBookmark}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propsTypes = {
    handleAddToBookmark: PropTypes.func
}

export default Blogs;