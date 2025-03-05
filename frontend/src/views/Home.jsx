import React, {useState, useEffect} from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BetsCard from "../components/Home/BetsCard.jsx";
import BetsTable from "../components/Home/BetsTable.jsx";

const Home = () => {
    const [bets, setBets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:8080/bets")
            .then((response) => {
                setBets(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => setShowType('table')}
                > Tabla
                </button>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => setShowType('card')}
                > Tarjeta
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8 font-bold'>Ha sido apuesta</h1>
                <Link to='/bets/create' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center'>
                    <MdOutlineAddBox className='mr-2 text-sky-800 text-4xl' /> Crear Bet
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : showType === 'table' ? (
                <BetsTable bets={bets} />
            ) : (
                <BetsCard bets={bets} />
            )}
        </div>
    );
}

export default Home;