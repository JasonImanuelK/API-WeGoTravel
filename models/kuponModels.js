const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const kuponSchema = new mongoose.Schema({
    nama_kupon: {
        type: String,
        required: [true],
        unique: false
    },
    nilai: {
        type: Number,
        required: true,
        unique: false
    },
    tipe_kupon:{
        type: String,
        required: [true],
        unique: false
    },
    statusPenggunaan: {
        type: String,
        required: [true],
        unique: false
    },
    id_pengguna: {
        type: String,
        required: [true],
        unique: false
    }
});

const Kupon = mongoose.model('Kupon', kuponSchema);

module.exports = Kupon;