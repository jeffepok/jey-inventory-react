import NavBar from '../navbar/navbar';
import Card from '../card/card';
import Icon from '../card/icon';
import { useEffect } from 'react';
import ItemsService from '../../services/items/items';
import { useDispatch } from 'react-redux';
import * as itemsActions from '../../store/items';

export default function Dashboard() {
    const dispatch = useDispatch();

    useEffect(()=>{
        const itemsService = new ItemsService();
        itemsService.getItems().then(response =>{
            dispatch(itemsActions.itemsRetrieved(response.data));
        });
    }, []);

    return (
        <>
            <NavBar></NavBar>
            <div className="container w-full mx-auto pt-20">
                <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                            <Card title="Items" icon={Icon}></Card>
                        </div>
                    </div>

                    <hr className="border-b-2 border-gray-400 my-8 mx-4" />

                </div>
            </div>
        </>
    )
}