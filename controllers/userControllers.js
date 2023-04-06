const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const User = require('./../models/userModels');

dotenv.config ({ path: './config.env'});

exports.createUser = async (req, res) => {
    const { username, email, password, jenis_kelamin, tanggal_lahir, nomor_telepon, alamat }  = req.body;
    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                status: 'fail',
                message: 'You already have an account.'
            });
        }

        const newUser = new User ({ username, email, password, jenis_kelamin, tanggal_lahir, nomor_telepon, alamat });
        await newUser.save();

        res.status(201).json({
            status: 'success',
            data: {
                user:newUser
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                status: 'fail',
                message: 'Invalid credential lokapala'
            });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                status: 'fail',
                message: 'Invalid credential'
            });
        }

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: process.env.EXPIRESIN });

        res.status(200).json({
            status: 'success',
            user: user,
            token: token
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error.'});
    }
};

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        
        res.status(201).json({
            status: 'success',
            user: user
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error !');
    }
};