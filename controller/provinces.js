const models = require('../model/index');

exports.index = async (req, res, next) => {
    try {
        provinces = await models.sequelize.query(`SELECT * FROM provinces`, {
            logging:false,
            type: models.sequelize.QueryTypes.SELECT
        });
        return res.status(200).json(provinces)
    } catch (e) {
        return res.status(e.statusCode).json({
            error: {
                message: e.message
            }
        });
    }
}