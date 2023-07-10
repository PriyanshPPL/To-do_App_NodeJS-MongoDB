const UserService = require('../services/user.services');

exports.register = async(req, res, next) => {
    try {
        const { email, passowrd } = req.body;

        const successRes = await UserService.registerUser(email, passowrd);

        res.json({status:true, suceess:'User Registered Successfully'});
    } catch (error) {
        throw error
    }
}