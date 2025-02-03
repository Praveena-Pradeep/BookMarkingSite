import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../store/authSlice";


function Navbar() {
    var user = useSelector(store=>store.auth.user);
    const dispatch = useDispatch();
    const navigate =useNavigate();
    function Logout() {
        if (user) {
            console.log('Logging out with token:', user.token);
            axios.post('https://demo-blog.mashupstack.com/api/logout', {}, {
                headers: { 'Authorization': "Bearer " + user.token }
            })
            .then(() => {
                dispatch(removeUser());
                navigate('/login');
            })
            .catch(err => {
                console.error('Logout failed:', err); // Log any error
                alert('Logout failed. Please try again.'); // Inform user
            });
        }
    }
    
  return (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand">
            <h4>My Bookmark website</h4>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
data-target="#navbarNav" aria-controls="navbarNav"aria-expanded="false"
           aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mr-auto" id="navbarNav"  style={{ float: "left" }}>
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
                <li className="nav-item">
                <NavLink to={"/"} className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
                    Home
                </NavLink>
                </li>
                <li className="nav-item">
               <NavLink to={"/Aboutus"} className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
         About us
</NavLink>
      </li>          
 <li className="nav-item">
                <NavLink to={"/register"} className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
                  Signup
                </NavLink>
                </li>
                {user ? (
                        <>
                            <li className="nav-item">
                                <NavLink to="/BookmarkForm" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
                                    Add Bookmark
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/BookmarkList" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
                                    Bookmark List
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" onClick={Logout}>Logout</span>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <NavLink to="/login" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
                                Login
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
  );
}
export default Navbar;