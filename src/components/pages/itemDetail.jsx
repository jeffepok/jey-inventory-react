import { useSelector } from "react-redux";
import NavBar from "../navbar/navbar";

export default function ItemDetail() {
    const itemId = window.location.pathname.split('/').at(-1);
    let items = useSelector(state => state.items);
    items = items.filter(item => {
        return item.id.toString() === itemId;
    })
    const item = items.length ? items[0] : {};
    return (
        <>
            <NavBar></NavBar>
            <div className="container w-full pt-20 px-10">
                <div className="">
                    <div className="grid place-items-center mt-20 w-full">
                        <img className="w-40" src={item.image} alt="item" />
                        <h1>Name: {item.name}</h1>
                        <h1>Price: {item.price}</h1>
                        <h1>Owner: {item.owner}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}