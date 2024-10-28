import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3">
            <h2 className="text-2xl font-bold p-4">Reading Time: {readingTime} Minutes</h2>
            <h2 className="text-2xl font-bold p-4">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) =>
                    <Bookmark
                        key={idx}
                        bookmark={bookmark}
                    >
                    </Bookmark>
                )
            }
        </div>
    );
};
Bookmarks.propsType = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;