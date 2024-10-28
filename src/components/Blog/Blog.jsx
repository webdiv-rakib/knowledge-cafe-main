import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {id, title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;
    return (
        <div className='space-y-4'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center gap-2'>
                    <img className='h-[60px]' src={author_img} alt="" />
                    <div>
                        <h1>{author}</h1>
                        <h3>{posted_date}</h3>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} ><CiBookmark className='text-2xl'></CiBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mt-5'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hashtags}</a></span>)
                }
            </p>
            <button className='underline text-purple-500' onClick={() => handleMarkAsRead(reading_time,id)}>Mark as read</button>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;