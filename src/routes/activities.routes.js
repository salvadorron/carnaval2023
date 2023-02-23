const {Router} = require('express');

const router = Router();

const { getActivities, insertActivities, updateActivity, deleteActivity } = require('../controllers/activity.controller');

router.get('/activity', getActivities);


router.post('/activity', insertActivities);


router.put('/activity/:id', updateActivity)


router.delete('/activity/:id', deleteActivity)

module.exports = router;