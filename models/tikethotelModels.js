const mongoose = require('mongoose');

const tiketHotelSchema = new mongoose.Schema({
    tanggal_pemesanan: {
        type: Date,
        required: [true, 'tiket hotel harus memiliki tanggal pemesanan'],
    },
    status_pemesanan: {  
        type: String,
        required: [true, 'tiket hotel harus memiliki status pemesanan']
    },
    nama_pemesan: {
        type: String,
        required: [true, 'tiket hotel harus memiliki nama pemesanan'],
    },
    jenis_kelamin: {
        type: String,
        required: [true, 'tiket hotel harus memiliki jenis kelamin'],
    },
    tanggal_lahir: {
        type: Date,
        required: [true, 'tiket hotel harus memiliki tanggal lahir'],
    },
    email: {
        type: String,
        required: [true, 'tiket hotel harus memiliki email'],
    },
    nomor_telepon: {
        type: String,
        required: [true, 'tiket hotel harus memiliki nomor telepon'],
    },
    tipe_kamar: {
        type: String,
        required: [true, 'tiket hotel harus memiliki tipe kamar'],
    },
    harga: {
        type: Number,
        required: [true, 'tiket hotel harus memiliki harga'],
    },
    ukuran: {
        type: Number,
        required: [true, 'tiket hotel harus memiliki ukuran'],
    },
    lama_menginap: {
        type: Number,
        required: [true, 'tiket hotel harus memiliki lama menginap'],
    },
    tanggal_menginap: {
        type: Date,
        required: [true, 'tiket hotel harus memiliki tanggal menginap'],
    },
    id_voucher: {
        type: String,
        required: [true, 'tiket hotel harus memiliki id_voucher'],
    },
    id_kamar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'kamar',
        required: [true, 'tiket hotel harus memiliki id_kamar']
    },
    id_hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hotel',
        required: [true, 'tiket hotel harus memiliki id_hotel']
    },
    id_pengguna:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'tiket hotel harus memiliki id_hotel']
    }
});

const TiketHotel = mongoose.model('TiketHotel', tiketHotelSchema);

module.exports = TiketHotel;