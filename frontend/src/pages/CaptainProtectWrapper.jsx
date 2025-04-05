import React, { useContext, useEffect, useState } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
        } else {
            axios.get('http://localhost:4000/captains/profile', {  // <-- Use Full URL Here
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => {
                if (response.status === 200) {
                    setCaptain(response.data);
                    setIsLoading(false);
                }
            })
            .catch(err => {
                console.log(err);
                localStorage.removeItem('token');
                navigate('/captain-login');
            });
        }
    }, [token, navigate, setCaptain]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default CaptainProtectWrapper;
