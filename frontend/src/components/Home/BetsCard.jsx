import React from "react";
import BetSingleCard from './BetSingleCard';

const BetsCard = ({ bets }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-y-10 space-x-4'>
            {bets.map((item) => (
                <BetSingleCard key={item._id} bet={item} />
            ))}
        </div>
    );
};

export default BetsCard;