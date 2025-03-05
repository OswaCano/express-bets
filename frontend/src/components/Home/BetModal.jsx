import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { motion } from "framer-motion";

const BetModal = ({ bet, onClose }) => {
    return (
        <div
            className="fixed bg-black bg-opacity-50 backdrop-blur-sm inset-0 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="w-[90%] max-w-md bg-white p-6 rounded-2xl shadow-2xl relative flex flex-col gap-y-4"
                onClick={(e) => e.stopPropagation()}
            >
                <AiOutlineClose
                    className="absolute top-4 right-4 text-2xl text-red-600 cursor-pointer hover:scale-110 transition"
                    onClick={onClose}
                />

                <h4 className="text-sm font-semibold text-gray-400">ID: {bet._id}</h4>

                <h2 className="text-xl font-bold text-gray-800"> Partido: {bet.title}</h2>

                <div className="flex items-center gap-2 text-gray-600">
                    <PiBookOpenTextLight className="text-red-500 text-xl" />
                    <p>{bet.description}</p>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mt-2">
                    <BiUserCircle className="text-blue-500 text-2xl" />
                    <p className="font-medium">{bet.user || "Anónimo"}</p>
                </div>
            </motion.div>
        </div>
    );
}

export default BetModal;
