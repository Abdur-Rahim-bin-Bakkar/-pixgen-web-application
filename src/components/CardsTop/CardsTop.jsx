
import React from 'react';
import CardC from '../share/Card';

const CardsTop =async () => {
    const res = await fetch('http://localhost:3000/data.json')
    const photos = await res.json()
    return (
        <div>
            <h1>Top Images</h1>
            <div className="grid md:grid-cols-4 gap-3">
                {
                    photos.map(photo => <CardC key={photo.id} photo={photo}/>)
                }
            </div>
        </div>
    );
};

export default CardsTop;