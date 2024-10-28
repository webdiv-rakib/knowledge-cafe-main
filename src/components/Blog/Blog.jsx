import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleAddToBookmark }) => {
    console.log(blog);
    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;
    return (
        <div>
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
                    <button onClick={handleAddToBookmark} ><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mt-5'>{title}</h2>
            <p>
                {
                    hashtags.map((hasht, idx) => <span key={idx}><a href="">#{hashtags}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.PropTypes - {
    blog: PropTypes.object.isRequired
}

export default Blog;