const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('Inside api');
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.json('Inside api');
});

router.delete('', (req, res) => {

});

module.exports = router;