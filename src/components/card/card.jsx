import React from 'react'

function Card({title, subtitle, icon:Icon }) {
    return (
        <div className="bg-white border rounded shadow p-2">
            <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                    <div className="rounded p-3 bg-green-600"><i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                </div>
                <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-500">{title}</h5>
                    <h3 className="font-bold text-3xl">{subtitle} <Icon/></h3>
                </div>
            </div>
        </div>
    )
}

export default Card
