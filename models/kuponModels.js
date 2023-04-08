const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const kuponSchema = new mongoose.Schema({
    nama_voucher: {
        type: String,
        required: [true],
        unique: true
    },
    nilai: {
        type: Number,
        required: true
    },
    tipe_tiket:{
        type: String,
        required: [true],
    },
    statusPenggunaan: {
        type: String,
        required: [true],
        unique: true
    },
    id_pengguna: {
        type: String,
        required: [true],
        unique: false
    }
});

const Kupon = mongoose.model('Kupon', kuponSchema);

module.exports = Kupon;