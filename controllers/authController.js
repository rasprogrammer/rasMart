async function handleUserSignup(req, res) {

    return res.json({ message: "success" });
}

async function handleUserLogin(req, res) {

}

async function handleUserMe(req, res) {

}

async function handleUserLogout(req, res) {

}

module.exports = {
    handleUserSignup,
    handleUserLogin,
    handleUserMe,
    handleUserLogout
};