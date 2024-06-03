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

    return (
        <div className="ap">
            <h1>Medical Topics</h1>
            <div className="grid-container">
                {topics.map((topic, index) => (
                    <TopicItem key={index} name={topic} />
                ))}
            </div>
           
        </div>
    );
}

export default Nextb;
