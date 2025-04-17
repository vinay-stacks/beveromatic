'use client';
import React, { useState, useEffect } from 'react';

function VisitorCounter() {
    const [visits, setVisits] = useState(null);


    const fetchData = async () => {
        try {
            
            const response = await fetch('https://visits.hovermedia.in/api/visit/beveromatic');
            //const response = await fetch('https://visits.hovermedia.in/api/visit-count/beveromatic');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setVisits(data.visit.visits);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div id="visit-count" className='mt-8 bg-[#f26522] text-lg font-bold p-5 rounded-lg'>{visits !== null ? `Visiters: ${visits}` : 'Loading...'}</div>
        </>
    );
}

export default VisitorCounter;