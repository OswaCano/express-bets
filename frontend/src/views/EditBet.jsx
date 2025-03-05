import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";
import { useSnackbar } from 'notistack';

const EditBet = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {id} = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:8080/bets/${id}`)
            .then((response) => {
                const bet = response.data.bet; // Asegurar que accedemos correctamente a los datos
                if (bet) {
                    setTitle(bet.title);
                    setDescription(bet.description);
                }

                setLoading(false);

            }).catch((error) => {
            setLoading(false);
            alert('An error happened. Please Check console');
            console.log(error);
        });
    }, []);

    const handleEditBet = (event) => {
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
            .put(`http://localhost:8080/bets/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Apuesta editada correctamente', {variant: 'success'});
                navigate('/');

            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
                enqueueSnackbar('Error al editar la apuesta', {variant: 'error'});
                //alert('Error al editar la apuesta');
                navigate('/');
            });

    };
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200'>
            <BackButton/>
            <h1 className='text-3xl my-4 font-bold'>Editar Apuesta</h1>
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
                    onClick={handleEditBet}
                    className='bg-lime-500 text-white p-2 rounded-md w-full hover:bg-lime-600'>
                    Crear Apuesta
                </button>
            </div>
        </div>
    );
}

export default EditBet;