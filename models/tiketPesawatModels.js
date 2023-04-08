const mongoose = require('mongoose');
const KursiPesawat = require('./../models/pesawatModels');

const tiketPesawatSchema = new mongoose.Schema({
    tanggal_pemesanan: {
        type: String,
        required: [true, 'Tanggal pemesanan harus diisi']
    },
    status_pemesanan:{
        type: String,
        required: [true, 'Status harus diisi']
    },
    nama_pemesan: {
        type: Number,
        required: [true, 'Nama pemesan harus diisi']
    },
    nama_pemesan: {
        type: (String, String),
        required: [true, 'Nama pesan harus diisi']
    },
    jenis_kelamin: {
        type: String,
        required: [true, 'Jenis kelamin harus diisi']
    },
    tanggal_lahir: {
        type: String,
        required: [true, 'Tanggal lahir harus diisi']
    },
    email: {
        type: String,
        required: [true, 'Email harus diisi']
    },
    nomor_telepon: {
        type: String,
        required: [true, 'Nomor telepon harus diisi']
    },
    kursiPesawat: {
        type: KursiPesawat,
        required: [true, 'Id pesawat harus diisi']
    }
});

const TiketPesawat = mongoose.model('TiketPesawat', tiketPesawatSchema);

module.exports = TiketPesawat;