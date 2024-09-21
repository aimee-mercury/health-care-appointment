// src/Nextb.js
import React, { useState } from 'react';
import TopicItem from '../components/Topic'; 

const topics = [
    'Heart',
    'Asthma',
    'Lungs',
    'Oxygen',
    'Diabetics',
    'Prescribe',
    'Oxygen',
    'Heart',
    'Diabetics',
    'Asthma',
    'Lungs',
    'Heart',
];

function Nextb() {
    const [viewAll, setViewAll] = useState(false);

    const toggleViewAll = () => {
        setViewAll(!viewAll);
    };

    // Show only a limited number of topics based on the viewAll state
    const displayedTopics = viewAll ? topics : topics.slice(0, 6); // Show first 6 topics by default

    return (
        <div className="ap">
            <h1>Medical Topics</h1>
            <div className="grid-container">
                {displayedTopics.map((topic, index) => (
                    <TopicItem key={index} name={topic} />
                ))}
            </div>
            <button onClick={toggleViewAll} className="view-toggle-btn">
                {viewAll ? 'View Less' : 'View All'}
            </button>
        </div>
    );
}

export default Nextb;
