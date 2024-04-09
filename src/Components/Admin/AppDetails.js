import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

export const AppDetails = () => {

    const { id } = useParams();

    const [app, setApp] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5050/app/${id}`);
            const data = await response.json()
            setApp(data)
        };
        fetchData()
    }, [id])
    return (
        <>
            <h1>Adding new Application</h1>
            <ul>
                
                {app.id}<br/>
                {app.appname}<br/>
                {app.genre}<br/>
                {app.rating}<br/>
                {app.version}
                <Link to={'/'}>
                    <button type='button'>Back</button>
                </Link>
            </ul>
        </>
    )
}