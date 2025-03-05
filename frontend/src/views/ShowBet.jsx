import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";

const ShowBet = () => {
    const [bet, setBet] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:8080/bets/${id}`)
            .then((response) => {
                setBet(response.data.bet);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);
    return (
        <div className='p-4'>
            <BackButton/>
            <h1 className='text-3xl my-4 font-bold'>Detalles de la apuesta</h1>
            {loading ? (
                <Spinner/>
            ) : (
                <div className='flex flex-col border-2 border-red-800 rounded-xl p-4'>
                    <div className='flex justify-between'>
                        <span className='text-xl font-bold'>ID del Partido:</span>
                        <span >{bet._id ? bet._id : 'N/A'}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-xl font-bold'>Partido:</span>
                        <span className='text-lg'>{bet.title}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-lg font-bold'>Apuestas:</span>
                        <span className='text-lg'>{bet.description}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-xl font-bold'>Apuesta creada:</span>
                        <span className='text-lg'>{new Date(bet.createdAt).toString()}</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShowBet;