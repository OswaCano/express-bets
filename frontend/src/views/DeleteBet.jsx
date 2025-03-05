import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";
import axios from "axios";
import { useSnackbar } from 'notistack';

const DeleteBet = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [loading, setLoading] = React.useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const handleDeleteBet = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:8080/bets/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Apuesta eliminada correctamente', {variant: 'success'});
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
                enqueueSnackbar('Error al eliminar la apuesta', {variant: 'error'});
               // alert('Error al eliminar la apuesta');
            });
    };
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200'>
            <BackButton/>
            <h1 className='text-3xl my-4 font-bold'>Eliminar apuesta</h1>
            {loading ? <Spinner/> : ''}
            <div className='flex flex-col border-2 border-red-800 rounded-xl p-4 mx-auto bg-white'>
                <h3 className='text-xl font-bold'>¿Estás seguro de que deseas eliminar esta apuesta?</h3>
                <button
                    onClick={handleDeleteBet}
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4'>
                    Si, Eliminar
                </button>
            </div>
        </div>
    );
}

export default DeleteBet;