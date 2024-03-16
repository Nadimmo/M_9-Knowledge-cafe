import Profile from "../../images/profile.png"
const Header = () => {
    return (
        <div className="flex justify-between mx-20 mt-5">
            <h1 className='text-4xl text-orange-400 text-center'>The Knowledge Cafe</h1>
            <img src={Profile} alt="" />
            
        </div>
    );
};

export default Header;