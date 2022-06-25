import React from 'react';
import NavBar from '../navbar/navbar';
import Card from '../card/card';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddItemModal from '../forms/addItem';
import { State } from '../../interfaces';


export default function ItemListing() {
    const items = useSelector((state: State) => state.items);

    const ItemImage = (props) => {
        return (
            <img src={props.src} alt="Item" />
        )
    }
    return (
        <>
            <NavBar></NavBar>
            <div className="container w-full mx-auto pt-20">
                <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal place-content-center">
                    <div className="flex flex-wrap">
                        {items.map((item) => {
                            return (
                                <div key={item.id} className="w-full md:w-1/2 xl:w-1/3 p-3">
                                    <Link to={`${item.id}`} >
                                        <Card title={item.name} subtitle={item.description} leading={<ItemImage src={item.image} />} />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-full grid place-items-center'>
                        <AddItemModal></AddItemModal>
                    </div>
                </div>
            </div>
        </>
    )
}