'use client';
import { useEffect, useState } from 'react';
import { API_GESTION_INSPECCIONES_URL } from '@/constants/GlobalConstants';
import { sendGetRequest } from '@/services/GestionInspeccionesApiData';

const AdminLogin = () => {
    const ADMIN_URL = `${API_GESTION_INSPECCIONES_URL}/admin`;
    const [statusOptions, setStatusOptions] = useState([]);

    useEffect(() => {
        getStatusOptions();
        return 
    }, [])

    const getStatusOptions = () => {
        sendGetRequest(`${ADMIN_URL}/status-options`)
        .then((status) => {
            setStatusOptions(status);
        })
        .catch((error) => {
            console.error(error);
        })
    }
    
    return (
        <main>
            <h1>Admin login</h1>
        </main>
    )
}

export default AdminLogin