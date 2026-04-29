
import React from 'react';
import CardC from '../share/Card';

const ALLImage =async () => {
    const res = await fetch('http://localhost:3000/data.json')
    const photos = await res.json()
    return (
        <div className='mt-10'>
            <h1 className='my-4 font-bold text-2xl'>All Images</h1>
            <div className="grid md:grid-cols-4 gap-3">
                {
                    photos.map(photo => <CardC key={photo.id} photo={photo}/>)
                }
            </div>
        </div>
    );
};

export default ALLImage;