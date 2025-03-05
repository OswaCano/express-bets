import {Bet} from "../models/BetModel.js";
import express from "express";

const router = express.Router();


router.post('/', async (req, res) => {
    try {
        if ( !req.body.title || !req.body.description) {

            return res.status(400).send({
                message: 'Send all required fields: title, description.'
            });
        }
        const newBet = {
            title : req.body.title,
            description : req.body.description
        };

        const bet = await Bet.create({
            title: newBet.title,
            description: newBet.description
        });

        return res.status(201).send(bet);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});

//get all bets
router.get('/', async (req, res) => {
    try {
        const bets = await Bet.find({});

        return res.status(200).json({
            count: bets.length,
            data: bets
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});

//get a single bet
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const bet = await Bet.findById(id);

        return res.status(200).json({ bet});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});

//update a bet
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.description) {
            return res.status(400).send({
                message: 'Send all required fields: title, description.'
            });
        }
        const {id} = req.params;

        const result = await Bet.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).send({
                message: 'Bet not found'
            });
        }

        return res.status(200).send({
            message: 'Bet updated successfully'
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

//delete a bet
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const result = await Bet.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({
                message: 'Bet not found'
            });
        }

        return res.status(200).send({
            message: 'Bet deleted successfully'
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

export default router;