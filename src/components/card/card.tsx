import React from 'react'

function Card({ title, subtitle, leading }) {
    return (
        <div className="bg-white border rounded shadow p-2">
            <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4 w-40">
                    {leading}
                </div>
                <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-500">{title}</h5>
                    <h3 className="font-bold text-lg">{subtitle}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Card
