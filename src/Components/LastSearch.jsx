import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';
import { useData } from '../Context/DataContext';

function LastSearch() {
    const scrollContainerRef = useRef(null);
    console.log('///////');
    const { data, loading, error } = useData();
    console.log(data,loading,error,'-.-.-.-.-.-.-.-.-.-.-.-.');
    const [isLeft, setIsLeft] = useState(false);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: scrollContainerRef.current.scrollLeft - 1125,
                behavior: 'smooth',
            });
            setIsLeft(true);
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: scrollContainerRef.current.scrollLeft + 1125,
                behavior: 'smooth',
            });
            setIsLeft(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-32">
                <p>Loading......</p>
            </div>
        );
    }

    return (
        <>
            {data && (
                <div className="m-16 bg-zinc-100 rounded py-5 px-10 relative">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl pb-3">Based on your last Search</h1>
                        <a href="/" className="font-bold text-sm underline hover:no-underline cursor-pointer">
                            view more
                        </a>
                    </div>
                    <div className="flex overflow-hidden" ref={scrollContainerRef}>
                        {data.map((product) => (
                            <Card data={product} key={product.id} isFeatured={true} />
                        ))}
                    </div>
                    {error && <div><h1 className="text-red-500">{error}</h1></div>}
                    {isLeft ? (
                        <button className="scroll-button right text-5xl absolute top-44 bg-white pb-3 px-1 shadow" onClick={scrollLeft}>
                            &#8249;
                        </button>
                    ) : (
                        <button className="scroll-button right text-5xl absolute top-44 right-10 bg-white pb-3 px-1 shadow" onClick={scrollRight}>
                            &#8250;
                        </button>
                    )}
                </div>
            )}
        </>
    );
}

export default LastSearch;
