import React from "react";
import NavBar from '../navbar/navbar';
import Card from '../card/card';
import { useSelector } from 'react-redux';
import { State } from "../../interfaces";


export default function Dashboard() {
    const items = useSelector((state: State) => state.items);

    const Icon = () => {
        return (
            <div className="rounded p-3 bg-green-600">
                <i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
            </div>
        )
    }
    return (
        <>
            <NavBar></NavBar>
            <div className="container w-full mx-auto pt-20">
                <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                            <Card title="Items" subtitle={items.length} leading={<Icon />}></Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}