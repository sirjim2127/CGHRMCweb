import React from 'react';

export default function MultiSectorChart() {
    return (
        <div className='w-full p-4'>
            <div className='flex justify-center'>
                <CardObject src={`${process.env.PUBLIC_URL}/assets/org_chart/col.png`} />
            </div>
            <div className='flex justify-center mt-12'>
                <CardObject src={`${process.env.PUBLIC_URL}/assets/org_chart/col.png`} />
            </div>
            <div className='flex justify-between mt-12'>
                <CardObject src={`${process.env.PUBLIC_URL}/assets/org_chart/col.png`} />
                <CardObject src={`${process.env.PUBLIC_URL}/assets/org_chart/col.png`} />
                <CardObject src={`${process.env.PUBLIC_URL}/assets/org_chart/col.png`} />
                <CardObject src={`${process.env.PUBLIC_URL}/assets/org_chart/col.png`} />
                <CardObject src={`${process.env.PUBLIC_URL}/assets/org_chart/col.png`} />
                <CardObject src={`${process.env.PUBLIC_URL}/assets/org_chart/col.png`} />
            </div>
            <div className='flex justify-between mt-12'>
                <CardObject src={`${process.env.PUBLIC_URL}/assets/org_chart/col.png`} />
                <CardObject src={`${process.env.PUBLIC_URL}/assets/org_chart/col.png`} />
                <CardObject src={`${process.env.PUBLIC_URL}/assets/org_chart/col.png`} />
                <CardObject src={`${process.env.PUBLIC_URL}/assets/org_chart/col.png`} />
            </div>
        </div>
    );
}

function CardObject({ src }) {
    return (
        <div className='w-12 h-24 sm:w-20 sm:h-28 md:w-28 md:h-32 lg:w-40 lg:h-44 xl:w-52 xl:h-56 rounded-lg overflow-hidden'>
            <img
                src={src}
                alt={"aboutuscover"}
                className=" object-fill h-full w-full"
            />
        </div>);
}
