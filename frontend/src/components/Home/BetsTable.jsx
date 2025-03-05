import React from "react";
import {Link} from "react-router-dom";
import {BsInfoCircle} from "react-icons/bs";
import {AiOutlineEdit} from "react-icons/ai";
import {MdOutlineDelete} from "react-icons/md";

const BetsTable = ({ bets }) => {
    return (
        <table className='w-full border-separate border-spacing-2'>
            <thead>
            <tr>
                <th className='border border-red-800 p-2 rounded-md text-red-800'>ID</th>
                <th className='border border-red-800 p-2 rounded-md text-red-800'>Partido</th>
                <th className='border border-red-800 p-2 rounded-md text-red-800'>Apuestas</th>
                <th className='border border-red-800 p-2 rounded-md text-red-800'>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {bets.map((bet,index) => (
                <tr key={bet._id} className='h-8'>
                    <td className='border border-red-700 p-2 rounded-md'>{index+1}</td>
                    <td className='border border-red-700 p-2 rounded-md'>{bet.title}</td>
                    <td className='border border-red-700 p-2 rounded-md'>{bet.description}</td>
                    <td className='border border-red-700 p-2 rounded-md text-center'>
                        <div className='flex justify-center gap-x-4'>
                            <Link to={'/bets/details/' + bet._id} className='text-red-500 hover:text-red-700'>
                                <BsInfoCircle className='text-2xl text-green-800' />
                            </Link>
                            <Link to={'/bets/edit/' + bet._id} className='text-blue-500 hover:text-blue-700'>
                                <AiOutlineEdit className='text-2xl text-blue-800' />
                            </Link>
                            <Link to={'/bets/delete/' + bet._id} className='text-yellow-500 hover:text-yellow-700'>
                                <MdOutlineDelete className='text-2xl text-yellow-800' />
                            </Link>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};

export default BetsTable;