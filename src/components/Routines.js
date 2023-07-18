import { getAllPublicRoutines } from "../api"
import { useState, useEffect, } from "react"
import React from "react"
import { Link } from "react-router-dom";


function Routines(token) {
    const [routines, setRoutines] = useState([]);

    const publicRoutines = async () => {
        const allRoutines = await getAllPublicRoutines()
        setRoutines(allRoutines)
    }
    useEffect(() => { publicRoutines() }, [])

    return (
        <div>

            {token === null ? '' : <Link className="create-routines" to='/create-routines'>(Create Routines)</Link>}
            {routines.map((routine) => {
                return (
                    
                    <div key={routine.id} className="routines">
                        <div className="displayCard">
                            <h1 className="routineTitle">{routine.name}</h1>
                            <h2>Goal: {routine.goal}</h2>
                            <h2>Creator: <Link className="link" to={`/routines/${routine.creatorName}`}>{routine.creatorName}</Link></h2>
                            <div className="activityCard">
                                <h2 className="activityTitle">Activities: </h2>
                                {routine.activities.map((activity) => {
                                    return (
                                        <ul key={activity.id}>
                                            <li><Link className="link" to={`/routines/activity/${activity.id}`}>{activity.name}</Link></li>
                                            <ul>
                                                <li>Description: {activity.description}</li>
                                                <li>Count: {activity.count}</li>
                                                <li>Duration: {activity.duration}</li>
                                            </ul>
                                        </ul>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Routines