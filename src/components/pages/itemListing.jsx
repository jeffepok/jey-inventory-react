import React from 'react';
import NavBar from '../navbar/navbar';
import Card from '../card/card';
import { useSelector } from 'react-redux';

export default function ItemListing() {
    const items = useSelector(state => state.items);

    return (
        <>
            <NavBar></NavBar>
            <div className="container w-full mx-auto pt-20">
                <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                    <div className="flex flex-wrap">
                        {items.map((item) => {
                            return (
                                <div key={item.id} className="w-full md:w-1/2 xl:w-1/3 p-3">
                                    <Card title={item.name} subtitle={item.description}></Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}