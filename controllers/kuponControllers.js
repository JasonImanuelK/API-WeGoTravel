const Kupon = require('./../models/kuponModels');

exports.createKupon = async (req, res) => {
    const { nama_kupon, nilai, tipe_kupon, statusPenggunaan, id_pengguna }  = req.body;
    try {
        const newKupon = new Kupon ({ nama_kupon, nilai, tipe_kupon, statusPenggunaan, id_pengguna });
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

exports.getKuponAdmin = async (req, res) => {
    try {
        const kupon = await Kupon.find();
        
        res.status(201).json({
            status: 'success',
            kupon: kupon
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error !');
    }
};

exports.getKuponUser = async (req, res) => {
    try {
        const id_pengguna = req.params.id_pengguna;
        const kupon = await Kupon.find({ id_pengguna: id_pengguna});
        
        if(kupon.length==0){
            res.status(201).json({
                status: 'success',
                message: 'Tidak memiliki kupon'
            });
        }else{
            res.status(201).json({
                status: 'success',
                kupon: kupon
            });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error !');
    }
};

exports.updateKupon = async (id_kupon, update_kupon) => {
    try {
        const updated_kupon = await Kupon.findByIdAndUpdate(id_kupon, {statusPenggunaan:"Tidak Berlaku"});
        return updated_kupon;
    } catch (err) {
        return err.message;
    }
};

exports.deleteKupon = async (req, res) => {
    try {
        const id_kupon = req.params.id_kupon;
    
        const delete_kupon = await Kupon.findByIdAndDelete(id_kupon);
    
        if (delete_kupon!=null) {
            res.status(201).json({
                status: 'success',
                message: 'Kupon berhasil di hapus!'
            });
        } else {
            res.status(201).json({
                status: 'success',
                message: 'Kupon tidak ditemukan!'
            });
        }
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server error !');
    }
};
