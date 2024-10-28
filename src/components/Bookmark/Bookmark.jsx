import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="bg-slate-300 rounded-xl p-4 m-4">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    Bookmark: PropTypes.object
}
export default Bookmark;