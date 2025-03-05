import {Link} from "react-router-dom";
import {BsArrowLeft } from "react-icons/bs";

const BackButton = ({destination = '/' }) => {
    return (
        <div className='flex justify-start'>
            <Link to={destination} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center'>
                <BsArrowLeft className='mr-2 text-sky-800 text-2xl' /> Volver
            </Link>
        </div>
        );
}

export default BackButton;