const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const Kupon = require('./../models/kuponModels');

dotenv.config ({ path: './config.env'});

exports.createKupon = async (req, res) => {
    const { nama_voucher, nilai, tipe_tiket, statusPenggunaan, id_pengguna }  = req.body;
    try {
        const newKupon = new Kupon ({ nama_voucher, nilai, tipe_tiket, statusPenggunaan, id_pengguna });
        await newKupon.save();

        res.status(201).json({
            status: 'success',
            data: {
                kupon:newKupon
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.getKupon = async (req, res) => {
    try {
        const kupon = await Kupon.findById(req.params.id_kupon).select('');
        
        res.status(201).json({
            status: 'success',
            user: user
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error !');
    }
};

exports.getKupon = async (req, res) => {
    try {
        const kupon = await Kupon.findById(req.params.id_kupon).select('');
        
        res.status(201).json({
            status: 'success',
            user: user
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error !');
    }
};