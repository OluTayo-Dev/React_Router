import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <p>This is the home page</p>
            <p>Click on this to go to the about page</p>
            <a href= '/about'>About</a>

            <p>Click on this to go to the contact page</p>
            <a href='/contact'>Contact</a>

            <p>Click on this to go the service page</p>
            <a href='/service'>Service</a>

            <p onClick={() => navigate('/service')}>Click to go to the next page</p>

            <button onClick={() => navigate('/contact')}>Submit</button>

        </div>
    )
}