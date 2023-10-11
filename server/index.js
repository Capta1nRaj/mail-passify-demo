// All Imports Here
const express = require("express")
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser')
const { signup, signUpVerify, signin, signInVerify, resendOTP, forgotPassword, logoutOnce, logoutAll, sessionCheck } = require("mail-passify");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header('Access-Control-Allow-Headers', 'Origin,acess-control-allow-origin,x-access-token, X-Requested-With,Accept,Content-Type, Authorization')
    next();
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8000;

app.get('/', async (req, res, next) => {
    return res.json({
        Done: "Done"
    })
});

// signUp User
app.post('/signUp', async (req, res, next) => {
    const data = req.body;
    const response = await signup(data.userFullName, data.userName, data.userEmail, data.userPassword, data.userReferredBy)
    return res.json({
        response
    })
});

// signUpVerify User
app.post('/signUpVerify', async (req, res, next) => {
    const data = req.body;
    const response = await signUpVerify(data.userName, data.userOTP)
    return res.json({
        response
    })
});

// signIn User
app.post('/signIn', async (req, res, next) => {
    const data = req.body;
    const response = await signin(data.userName, data.userPassword)
    return res.json({
        response
    })
});

// signInVerify User
app.post('/signInVerify', async (req, res, next) => {
    const data = req.body;
    const response = await signInVerify(data.userName, data.userOTP, data.userId)
    return res.json({
        response
    })
});

// autoSignIn Check
app.post('/autoSignIn', async (req, res, next) => {
    const data = req.body;
    const response = await sessionCheck(data.userName, data.userToken, data.userId)
    return res.json({
        response
    })
});

// logoutOnce User
app.post('/logoutOnce', async (req, res, next) => {
    const data = req.body;
    const response = await logoutOnce(data.userName, data.userToken, data.userId)
    return res.json({
        response
    })
});

// logoutAll User
app.post('/logoutAll', async (req, res, next) => {
    const data = req.body;
    const response = await logoutAll(data.userName, data.userToken, data.userId)
    return res.json({
        response
    })
});

// resendOTP
app.post('/resendOTP', async (req, res, next) => {
    const data = req.body;
    const response = await resendOTP(data.userName, data.method, data.userToken, data.userId)
    return res.json({
        response
    })
});

// forgotPassword
app.post('/forgotPassword', async (req, res, next) => {
    const data = req.body;
    const response = await forgotPassword(data.userName, data.userOTP, data.userPassword)
    return res.json({
        response
    })
});

app.listen(PORT, () => {
    console.log("Running on port", PORT);
});