'use client';
import { useEffect, useState } from 'react';
import { API_GESTION_INSPECCIONES_URL } from '@/constants/GlobalConstants';
import { sendGetRequest } from '@/services/GestionInspeccionesApiData';

const AdminHome = () => {
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
        <section>
            <select name="statusSelector" id="statusSelectorId">
                {statusOptions.map((status, index) => (
                    <option key={index} value={status}>{status}</option>
                ))}
            </select>
        </section>
    )
}

export default AdminHome