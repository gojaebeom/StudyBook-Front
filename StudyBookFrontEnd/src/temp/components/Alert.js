import {useEffect, useState} from "react"

export default function Alert() {
    const [open, setOpen] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setOpen(false);
        }, 3000);
    });


    return (
        <div className="fixed right-5 top-5 z-50">
            <div
                className={`${open ? "block" : "hidden"} text-white px-6 py-4 border-0 rounded relative mb-4 bg-gray-500 transition delay-1000`}>
                <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell"/>
                </span>
                <span className="inline-block align-middle mr-8">
                    <b className="capitalize">teal!</b> This is a teal alert - check it out!
                </span>
                <button
                    className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                    <span>×</span>
                </button>
            </div>
        </div>
    )
}