const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.render('index');
})

router.get('/chats',(req, res) => {
    res.render('chats');
})

router.get('/friends',(req, res) => {
    res.render('friends');
})

router.get('/profile',(req, res) => {
    res.render('profile');
})

module.exports = router;