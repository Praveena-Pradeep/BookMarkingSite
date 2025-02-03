import { createBrowserRouter } from "react-router-dom";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import Logout from "./components/auth/logout";
import BookmarkForm from "./components/BookmarkForm";
import BookmarkList from "./components/BookmarkList";
import Home from "./components/Home";
import ProtectedRoute from "./ProtectedRoute";
const router = createBrowserRouter([
    { path: '', element:<Home/>},
    { path: '/register', element: <Register />},
    { path: '/login', element: <Login /> },
    { path: '/logout', element: <Logout />},
    { path: '/BookmarkForm', element:(<ProtectedRoute><BookmarkForm /></ProtectedRoute> )},
    { path: '/BookmarkList', element: (<ProtectedRoute><BookmarkList /></ProtectedRoute> )},  
]);

export default router;
