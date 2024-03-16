/* eslint-disable react/prop-types */
const Bookmark = ({bkm}) => {
    const {title} = bkm
    return (
        <div className="bg-gray-400 p-5">
            <div className="bg-white p-5 rounded-xl">
                <h1>Title : {title}</h1>
            </div>
        </div>
    );
};

export default Bookmark;