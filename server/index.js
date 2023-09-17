// All Imports Here
const express = require("express")
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser')
const { signup, signUpVerify, signin, signInVerify, autoSignIn, resendOTP, forgotPassword, logoutOnce, logoutAll } = require("mail-passify");

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

// Sign UP User
app.post('/signup', async (req, res, next) => {
    const data = req.body;
    const response = await signup(data.fullName, data.userName, data.userEmail, data.userPassword, data.referralCode)
    return res.json({
        response
    })

});

// Sign UP Verify
app.post('/signUpVerify', async (req, res, next) => {
    const data = req.body;
    const response = await signUpVerify(data.userName, data.OTP)
    return res.json({
        response
    })
});

// Sign In
app.post('/signin', async (req, res, next) => {
    const data = req.body;
    const response = await signin(data.userName, data.password)
    return res.json({
        response
    })
});

// Sign In Verify
app.post('/signInVerify', async (req, res, next) => {
    const data = req.body;
    const response = await signInVerify(data.userName, data.OTP)
    return res.json({
        response
    })
});

// Sign In Verify
app.post('/autoSignIn', async (req, res, next) => {
    const data = req.body;
    const response = await autoSignIn(data.userName, data.token)
    return res.json({
        response
    })
});

// Resend OTP
app.post('/resendOTP', async (req, res, next) => {
    const data = req.body;
    const response = await resendOTP(data.userName, data.functionPerformed, data.token)
    return res.json({
        response
    })
});

// Forgot Password (Get OTP)
app.post('/getOTP', async (req, res, next) => {
    const data = req.body;
    const response = await forgotPassword(data.userName)
    return res.json({
        response
    })
});

// Forgot Password (Update Password)
app.post('/updatePassword', async (req, res, next) => {
    const data = req.body;
    const response = await forgotPassword(data.userName, data.otp, data.newPassword)
    return res.json({
        response
    })
});

// Logout From Current Device
app.post('/logoutOnce', async (req, res, next) => {
    const data = req.body;
    const response = await logoutOnce(data.userName, data.token)
    return res.json({
        response
    })
});

// Logout From All Devices
app.post('/logoutAll', async (req, res, next) => {
    const data = req.body;
    const response = await logoutAll(data.userName, data.token)
    return res.json({
        response
    })
});


app.listen(PORT, () => {
    console.log("Running on port", PORT);
});