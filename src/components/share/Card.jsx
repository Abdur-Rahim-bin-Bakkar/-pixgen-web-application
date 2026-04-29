import React from 'react';
import { Avatar, Button, Card } from "@heroui/react";
import { FcLike } from 'react-icons/fc';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import Image from 'next/image';
const CardC = ({ photo }) => {
    console.log(photo.imageUrl)
    return (
        <Card className="">

            <Card.Header>
                <div className="relative ">
                    <Image className='w-full h-80 object-cover object-center rounded-2xl' src={photo.imageUrl} alt='Image' height={100} width={200}/>
                </div>
                <Card.Title className='text-lg font-bold my-3'>{photo.title}</Card.Title>

            </Card.Header>
            <Card.Footer className="flex flex-col gap-3">
                <div className="flex justify-between gap-5 items-center">
                    <div className="flex gap-3 items-center">
                        <FcLike />
                        <p>45</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FaCloudDownloadAlt />

                        <p>45</p>
                    </div>
                </div>
                <Button variant='outline' className={'w-full'}>View</Button>
            </Card.Footer>
        </Card>
    );
};

export default CardC;