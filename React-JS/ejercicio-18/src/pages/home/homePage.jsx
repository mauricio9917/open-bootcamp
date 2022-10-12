import React from 'react';
import { useNavigate, useLocation } from 'react-router';


const HomePage = () => {
    const location = useLocation();
    const history = useNavigate();

    console.log('We are in Route:', location.pathname); // '/about | /faqs'

    const navigate = (path) => {
        history(path);
    }

    const navigateProps = (path) => {
        history({
            pathname: path,
            search: '?online=true', // Query Params
            state: {
                online: true
            }
        });
    }

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Dashboard</h2>
            <button onClick={() => navigateProps('/online-state')}>
                Go To Page with State / Query Params
            </button>
            <button onClick={() => navigate('/profile')}>
                Go To Profile
            </button>
        </div>
    );
}

export default HomePage;
