// src/components/TopicItem.js
import React from 'react';
import './topici.css'; 

const TopicItem = ({ name }) => {
    return (
        <div className="topic-item">
            <div className="icon">🧬🔷</div> 
            <br />
            <div className="name">{name}</div>
        </div>
    );
};

export default TopicItem;
