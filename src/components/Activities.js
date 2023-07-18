import { useEffect, useState } from "react";
import { getAllActivities } from "../api";
import CreateActivities from "./CreateActivities";
import UpdateActivities from "./UpdateActivities";


const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchActivities = async () => {
            const data = await getAllActivities();
            setActivities(data);
        };
        fetchActivities();
    }, [setActivities]);

    return (
        <>
            <h1>Activities</h1>
            <CreateActivities
                activities={activities}
                setActivities={setActivities}
            />
            {activities.map((activity) => (
                <div key={activity.id}>
                    <ul>
                        <li>
                            <h2>{activity.name}</h2>
                        </li>
                    </ul>
                    <h4>{activity.description}</h4>
                    <h4>View Routines with this Activity</h4>
                    <UpdateActivities
                        activityId={activity.id}
                        activities={activity}
                        setActivities={setActivities}
                    />
                    <h2>------------------------------</h2>
                </div>
            ))}
        </>
    );
};

export default Activities;