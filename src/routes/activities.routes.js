const {Router} = require('express');

const router = Router();

router.get('/activity', (req, res) => {
    res.send('Finished');
})


router.post('/activity', (req, res) => {
    res.send('Register');
})


router.put('/activity', (req, res) => {
    res.send('Update');
})


router.delete('/activity', (req, res) => {
    res.send('Delete');
})

module.exports = router;