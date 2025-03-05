import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";
import { useSnackbar } from 'notistack';

const CreateBet = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmitBet = (event) => {
        event.preventDefault(); // Evita que la página se recargue

        if (!title || !description) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const data = {
            title,
            description,
        };
        setLoading(true);
        axios
            .post('http://localhost:8080/bets', data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Apuesta creada', { variant: 'success' });
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
                enqueueSnackbar('Error al crear la apuesta', { variant: 'error' });
                //alert('Error al crear la apuesta');
            });

    };
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200'>
            <BackButton/>
            <h1 className='text-3xl my-4 font-bold'>Crear Apuesta</h1>
            {loading ? ( <Spinner/>) : ''}
            <div className='flex flex-col border-2 border-red-800 rounded-xl p-4 bg-white'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Partido:</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-400 rounded p-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Apuestas:</label>
                    <input
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='border-2 border-gray-400 rounded p-2 w-full'
                    />
                </div>
                <button
                    onClick={handleSubmitBet}
                    className='bg-lime-500 text-white p-2 rounded-md w-full hover:bg-lime-600'>
                    Crear Apuesta
                </button>
            </div>
        </div>
    );
}

export default CreateBet;