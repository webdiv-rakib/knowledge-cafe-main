import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3">
            <h2 className="text-2xl font-bold p-4">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =>
                    <Bookmark
                        key={bookmark.id}
                        bookmark={bookmark}>
                    
                    </Bookmark>
                )
            }
        </div>
    );
};
Bookmarks.propsType = {
    bookmarks: PropTypes.array
}

export default Bookmarks;