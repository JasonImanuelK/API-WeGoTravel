const Hotel = require('../models/hotelModels')
const Kamar = require('../models/kamarModels')
const tiketHotel = require('../models/tiketHotelModels')

//get hotel based on kota dan tanggal mengingap
exports.getHotel = async (req, res) => {
    try {
        const { kota, tanggal_menginap } = req.body;
        const hotels = await Hotel.find({ kota: kota, tglCheckin: tanggal_menginap });
        res.status(200).json({
            success: true,
            data: hotels
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.getKamar = async (req, res) => {
    try {
        const idKamar = req.params.id;
        const idHotel = req.params.idHotel;
        const kamar = await Kamar.findOne({ _id: idKamar, hotel: idHotel });
        if (!kamar) {
            return res.status(404).json({
                success: false,
                message: "Kamar dengan ID tersebut tidak ditemukan pada hotel yang dipilih"
            });
        }
        res.status(200).json({
            success: true,
            data: {
                kamar
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.pesanHotel = async (req, res) => {
    try {
        const { tanggal_pemesanan, nama_pemesan, jenis_kelamin, tanggal_lahir, email, nomor_telepon, tipe_kamar, harga, ukuran, lama_menginap, tanggal_menginap, id_voucher } = req.body
        const kamar = await Kamar.findById(req.params.id);
        if (!kamar) {
            return res.status(404).json({
                success: false,
                message: 'Kamar tidak ditemukan'
            });
        }

        const tiketHotel = new tiketHotel({ tanggal_pemesanan, nama_pemesan, jenis_kelamin, tanggal_lahir, email, nomor_telepon, tipe_kamar, harga, ukuran, lama_menginap, tanggal_menginap, id_voucher, kamar: kamar._id, hotel: hotel._id });
        await tiketHotel.save();

        res.status(201).json({
            status: 'success',
            data: {
                tiketHotel
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.cancelPesanan = async (req, res) => {
    try {
        const id_pesanan = req.params.id_pesanan;
        const pesanan = await tiketHotel.findById(id_pesanan);

        if (!pesanan) {
            return res.status(404).json({
                status: 'fail',
                message: 'Pesanan tidak ditemukan!'
            });
        }

        await pesanan.remove();

        res.status(201).json({
            status: 'success',
            message: 'Pesanan berhasil dibatalkan!'
        });
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server error !');
    }
};


exports.checkout = async (id_pesanan, update_kamar) => {
    try {
        // Dapatkan data pesanan yang akan di-checkout
        const pesanan = await tiketHotel.findById(id_pesanan);

        if (!pesanan) {
            throw new Error('Pesanan tidak ditemukan!');
        }

        // Dapatkan data kamar yang terkait dengan pesanan
        const kamar = await Kamar.findById(pesanan.id_kamar);

        if (!kamar) {
            throw new Error('Kamar tidak ditemukan!');
        }

        // Perbarui jumlah kamar yang tersisa
        kamar.jumlah_tersedia += pesanan.jumlah_kamar;
        await kamar.save();

        // Update status pesanan menjadi 'checked-out'
        pesanan.status = 'checked-out';
        await pesanan.save();

        // Update data kamar jika ada
        if (update_kamar) {
            kamar.set(update_kamar);
            await kamar.save();
        }

        return pesanan;
    } catch (err) {
        return err.message;
    }
};