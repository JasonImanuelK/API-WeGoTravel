const Hotel = require('../models/hotelModels')
const Kamar = require('../models/kamarModels')
const tiketHotel = require('../models/tiketHotelModels')

exports.getHotel = async (req, res) => {
    const {kota, tanggal_menginap}=req.body;
    try {
        const hotel = await Hotel.find(kota,tanggal_menginap);
        res.status(201).json({
            status: 'success',
            data:{
                hotel
            }
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.getKamar = async (req, res) => {
    try {
        id = mongoose.Types.ObjectId(req.params.id)
        const kamar = await Kamar.findById(id);
        res.status(201).json({
            status: 'success',
            data:{
                kamar
            }
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.pesanHotel = async (req, res) => {
    const {tanggal_pemesanan, nama_pemesan, jenis_kelamin, tanggal_lahir, email, nomor_telepon, tipe_kamar, harga, ukuran, lama_menginap, tanggal_menginap, id_voucher}=req.body
    try {
        id = mongoose.Types.ObjectId(req.params.id)
        const kamar = await Kamar.findOne(id);

        const pesanan = new tiketHotel ({ tanggal_pemesanan, nama_pemesan, jenis_kelamin, tanggal_lahir, email, nomor_telepon, tipe_kamar, harga, ukuran, lama_menginap, tanggal_menginap, id_voucher });
        await pesanan.save();

        res.status(201).json({
            status: 'success',
            data:{
                pesanan
            }
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.cancelPesanan = async (req, res) => {
    try {
        const id_pesanan = req.params.id_pesanan;
    
        const hapus_pesanan = await tiketHotel.findByIdAndDelete(id_pesanan);
    
        if (hapus_pesanan!=null) {
            res.status(201).json({
                status: 'success',
                message: 'Pesanan berhasil dibatalkan!'
            });
        } else {
            res.status(201).json({
                status: 'success',
                message: 'Pesanan tidak ditemukan!'
            });
        }
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server error !');
    }
};


exports.checkout = async (id_pesanan, update_kamar) => {
    try {
        const checkout = await Kupon.findByIdAndUpdate(id_pesanan, update_kamar);
        return checkout;
    } catch (err) {
        return err.message;
    }
};