const {Router} = require('express');

const router = Router();

const { getActivity, createActivity, updateActivity, deleteActivity } = require('../controllers/activity.controller');

router.get('/activity', getActivity);


router.post('/activity', createActivity);


router.put('/activity/:id', updateActivity)


router.delete('/activity/:id', deleteActivity)

module.exports = router;