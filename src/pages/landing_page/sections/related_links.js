import React from 'react';

export default function RelatedLinksSection() {
    return (
        <div className='bg-gray-200 p-8'>
            <h2 className="text-3xl font-bold mb-6 text-gray-700">Related Links</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer'>
                {relatedLinks.map((item, index) => (
                    <div key={index} className='flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg transform hover:rotate-3 transition duration-300'>
                        <img
                            src={item.img}
                            alt={item.title}
                            className="object-cover w-32 h-32 rounded-full mb-4"
                        />
                        <h3 className='text-xl font-semibold mb-2 text-gray-700'>{item.title}</h3>
                        <p className='text-gray-500'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const relatedLinks = [
    {
        img: `${process.env.PUBLIC_URL}/assets/logos/lto.jpg`,
        title: "Land Transportation Office (LTO)",
        description: "The Land Transportation Office (LTO) is the agency responsible for all forms of land transportation in the Philippines.",
        link: ""
    },
    {
        img: `${process.env.PUBLIC_URL}/assets/logos/cghrmc.png`,
        title: "Coast Guard Human Resource Management Command (CGHRMC)",
        description: "The Coast Guard Human Resource Management Command (CGHRMC) is the human resource management arm of the Philippine Coast Guard.",
        link: ""
    },
    {
        img: `${process.env.PUBLIC_URL}/assets/logos/pcg.jpg`,
        title: "Philippine Coast Guard (PCG)",
        description: "The Philippine Coast Guard (PCG) is an armed and uniformed service tasked primarily with enforcing laws within Philippine waters.",
        link: ""
    }
];

