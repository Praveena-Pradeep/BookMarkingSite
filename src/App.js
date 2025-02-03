import { RouterProvider } from 'react-router-dom';
import router from './router';
import Navbar from './components/Navbar';

function App() {
    return (
        <div>
            <Navbar />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
