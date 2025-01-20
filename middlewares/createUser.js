var User = require("../models/user").User;
module.exports = async function(req,res,next){
    res.locals.user = null
    try {
        var user = await User.findById(req.session.user_id);
        if (user) {
            res.locals.user = user;
        }
    } catch (err) {
        console.error("Ошибка при поиске пользователя:", err);
    }
    next();
}