import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    console.log(blog);
    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;
    return (
        <div>
            <img src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img className='h-[60px]' src={author_img} alt="" />
                    <div>
                        <h1>{author}</h1>
                        <h3>{posted_date}</h3>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hashtags}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.PropTypes - {
    blog: PropTypes.object.isRequired
}

export default Blog;