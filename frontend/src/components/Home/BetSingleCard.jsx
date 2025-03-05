import React from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import {useState} from "react";
import BetModal from "./BetModal.jsx";
import {BiShow} from "react-icons/bi";

const BetSingleCard = ({ bet }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div
            key={bet._id}
            className="bg-white border-2 border-gray-300 rounded-lg shadow-lg px-6 py-4 my-6 max-w-md mx-auto hover:shadow-2xl transition transform hover:scale-105 "
        >
            <h2 className="text-lg font-bold text-gray-700 mb-2">{bet.title}</h2>

            <h4 className="text-sm text-gray-500 mb-2">ID: {bet._id}</h4>

            <div className="flex items-center gap-2">
                <PiBookOpenTextLight className="text-red-500 text-xl" />
                <p className="text-gray-600">{bet.description}</p>
            </div>

            <div className="flex justify-between items-center mt-4">
                <BiShow
                    className="text-2xl text-blue-800 cursor-pointer hover:text-blue-600 transition"
                    onClick={() => setShowModal(true)}
                />
                <Link to={`/bets/details/${bet._id}`} className="p-2 rounded-full hover:bg-green-100 transition">
                    <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/bets/edit/${bet._id}`} className="p-2 rounded-full hover:bg-blue-100 transition">
                    <AiOutlineEdit className="text-2xl text-blue-800" />
                </Link>
                <Link to={`/bets/delete/${bet._id}`} className="p-2 rounded-full hover:bg-red-100 transition">
                    <MdOutlineDelete className="text-2xl text-red-800" />
                </Link>
            </div>
            {
                showModal && (
                    <BetModal bet={bet} onClose={() => setShowModal(false)} />
                )
            }
        </div>
    );
};

export default BetSingleCard;
