const mongoose = require('mongoose');

const kamarSchema = new mongoose.Schema({
    tipe_kamar: {
        type: String,
        required: [true, 'Kamar harus memiliki tipe kamar'],
    },
    harga: {  
        type: Number,
        required: [true, 'Kamar harus memiliki harga']
    },
    jumlah_kamar_tersisa: {
        type: Number,
        required: [true, 'Kamar harus memiliki jumlah kamar tersisa'],
    }
});

const Kamar = mongoose.model('Kamar', kamarSchema);

module.exports = Kamar;