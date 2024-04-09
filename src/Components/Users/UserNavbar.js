import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
    const [apps, setApps] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');

    useEffect(() => {
        // Fetch the list of applications from the server
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5050/apps");
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

    // Filter applications based on search term and selected genre
    const filteredApps = apps.filter(app => {
        if (selectedGenre && app.genre !== selectedGenre) {
            return false;
        }
        return app.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <h2>Application Listings</h2>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <nav>
                <ul>
                    <li onClick={() => setSelectedGenre('')}>All</li>
                    <li onClick={() => setSelectedGenre('Games')}>Games</li>
                    <li onClick={() => setSelectedGenre('Beauty')}>Beauty</li>
                    <li onClick={() => setSelectedGenre('Fashion')}>Fashion</li>
                    <li onClick={() => setSelectedGenre('Health')}>Health</li>
                    <li onClick={() => setSelectedGenre('Women')}>Women</li>
                </ul>
            </nav>
            <ul>
                {filteredApps.map(app => (
                    <li key={app.id}>
                        <Link to={`/apps/${app.id}`}>{app.appname}</Link>
                        <p>{app.description}</p>
                        <p>Genre: {app.genre}</p>
                        <p>Rating: {app.rating}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserNavbar;
