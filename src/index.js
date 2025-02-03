import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './store/store';
import router from './router'; // Ensure your router is correctly set up
import './index.css'; // Global styles

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
