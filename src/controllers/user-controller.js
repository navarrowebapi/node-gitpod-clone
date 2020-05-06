const userRepository = require("../repositories/user-repository")

exports.login = async (req, res) => {

    try {
        const result = await userRepository.login(req.body.email, req.body.password);
        res.status(200).send({ auth: true, token: result });

    } catch (e) {
        if (!e.status) {
            res.status(500).json({ error: { code: 'Erro desconhecido', message: 'um erro desconhecido ocorreu' } });
        }else{
            res.status(e.status).json({error: {code:e.code, message:e.message}});
        }

    }

}