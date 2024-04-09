import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddApp from './AddApp';

export const AppList = () => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5050/app");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setApps(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const addApp = async (appData) => {
        try {
            const maxId = apps.length > 0 ? Math.max(...apps.map(app => app.id)) : 0;
            const newApp = { ...appData, id: maxId + 1 };
            const response = await fetch('http://localhost:5050/app', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newApp)
            });
            if (!response.ok) {
                throw new Error('Failed to add app');
            }
            const addedApp = await response.json();
            setApps(prevApps => [...prevApps, addedApp]);
        } catch (error) {
            console.error('Error adding app:', error);
        }
    }

    const deleteApp = (id) => {
        fetch(`http://localhost:5050/app/${id}`,{
            method:'DELETE'
        });
        setApps(apps.filter(app => app.id!==id));
    }

    return (
        <>
            <h1>Fetching data</h1>
            <AddApp addApp={addApp}/>
            <ul>
                {apps.map(app => (
                    <li key={app.id}>
                        {app.id} <br />
                        {app.appname} <br />
                        <Link to={`/${app.id}`}><button type='button'>View More</button></Link>
                        <button onClick={() => deleteApp(app.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

