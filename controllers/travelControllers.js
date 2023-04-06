const Travel = require('../models/travelModels')

exports.createTour = async (req,res) => {
    try{
        const newTravel = await Travel.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                Travel:newTravel
            }
        });
    }catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }  
};

exports.getAllTours = async (req, res) => {
    try{
        const travels = await Tour.find();
        
        res.status(201).json({
            status: 'success',
            results: travels.length,
            data:{
                travels
            }
        });
    } catch(err){
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent!'
        });
    }
};

exports.getTour = async (req, res) => {
    try {
        id = mongoose.Types.ObjectId(req.params.id)
        const travel = await Travel.findById(id);
        res.status(201).json({
            status: 'success',
            data:{
                travel
            }
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};