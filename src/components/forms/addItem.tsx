import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function AddItemModal() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="">
                <button
                    type="button"
                    onClick={openModal}
                    className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Add Item
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Add Item
                                </Dialog.Title>
                                <div className="mt-2">
                                    <div className="mt-5 md:mt-0 md:col-span-2">
                                        <div className="shadow overflow-hidden sm:rounded-md">
                                            <div className="px-4 py-5 bg-white sm:p-6">
                                                <div className="grid grid-cols-6 gap-6">
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                            Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                                            Description
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="description"
                                                            id="description"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-4">
                                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                                            Price
                                                        </label>
                                                        <input
                                                            type="number"
                                                            name="price"
                                                            id="price"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-4">
                                                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                                            Image
                                                        </label>
                                                        <input
                                                            type="file"
                                                            name="image"
                                                            id="image"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
