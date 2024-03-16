/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks, marks}) => {
    return (
        <div className="w-1/3 h-[500px]">
            <h1 className="text-2xl font-bold">spent on time read: {marks} </h1> <br />
            <h1 className="text-2xl font-bold">Bookmarks : {bookmarks.length} </h1> <br />
            <div>
                {
                    bookmarks.map(bkm => <Bookmark bkm = {bkm}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;