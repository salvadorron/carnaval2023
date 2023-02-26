const pool = require('../db');

const getActivity = async (req, res, next) => {

    try {
        const activity = await pool.query("SELECT *, SUM(sport+cultural+recreational+ecological+formative+preventive) AS total FROM activities GROUP BY id")
        res.json(activity.rows);
    } catch (error) {
        next(error);
    }
}

const createActivity = async (req, res, next) => {
    try {
        const { entity, sport, cultural, recreational, ecological, formative, preventive } = req.body;
        result = await pool.query("INSERT INTO activities (entity, sport, cultural, recreational, ecological, formative, preventive) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [
        entity, sport, cultural, recreational, ecological, formative, preventive]);
        
        
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const updateActivity = async (req, res, next) => {
   try {

        const {id} = req.params; 

        const { entity, sport, cultural, recreational, ecological, formative, preventive } = req.body;

        const result = await pool.query(
            "UPDATE activities SET entity = $1, sport = $2, cultural = $3, recreational = $4, ecological = $5, formative = $6, preventive = $7 WHERE id = $8 RETURNING *" ,
            [entity, sport, cultural, recreational, ecological, formative, preventive, id]
            );

        if (result.rows.length === 0) {
            return res.status(404).json(
                { message: "Activity not found" }
            );
            
        }

    return res.json(result.rows[0])

   } catch (error) {
        next(error);
   }
}

const deleteActivity = async (req, res, next) => {
    
    const {id} = req.params; 

    try {
        
        const result = await pool.query("DELETE FROM activities WHERE id=$1", [id]);

            if(result.rowCount === 0) return res.status(404).json({
                message: "Activity not found"
            })

        return res.sendStatus(204)

    } catch (error) {
        next(error);
    }
}

module.exports = {
    getActivity,
    createActivity,
    updateActivity,
    deleteActivity
}