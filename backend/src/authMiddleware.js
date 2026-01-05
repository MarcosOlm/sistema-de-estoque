import JWT from 'jsonwebtoken'

const authMiddlewate = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(400).json({
            error: 'não autenticado',
        })
    }
    try {
        const decoded = JWT.verify(token, process.env.JWT_PASSWORD);
        req.body.idStore = decoded.idStore;
        next();
    }
    catch (err) {
        res.status(400).json({
            error: 'token inválido',
        })
    }
}

export default authMiddlewate;