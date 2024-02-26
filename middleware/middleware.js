const checkAge = (req, res, next) => {
    const age = req.query.age;
    if (age >= 18) {
        next();
    }
    else {
        res.status(500).json({ message: 'You are not eligible' })
    }
}

module.exports = { checkAge };