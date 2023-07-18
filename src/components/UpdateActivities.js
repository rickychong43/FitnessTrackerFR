import React, { useState } from "react";
import { updateActivity } from "../api";

const UpdateActivities = ({ activityId, activities, setActivities }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const authenticated = localStorage.getItem("token") ? true : false;

    const onUpdate = async (event, activityId) => {
        event.preventDefault();
        const data = await updateActivity(name, description, activityId);
        if (data && data.name) {
            const newActivities = [
                ...activities.filter((activity) => {
                    return activity.id !== activityId;
                }),
            ];

            setActivities(newActivities);
            setName("");
            setDescription("");
        }
    };

    return (
        <div>
            {authenticated === true ? (
                <>
                    <h3> Edit Activity</h3>
                    <form
                        onSubmit={(event) => {
                            onUpdate(event, activityId);
                        }}
                    >
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="name"
                        />
                        <input
                            type="text"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            placeholder="description"
                        />
                        <button type="submit">Edit Activity</button>
                    </form>
                </>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default UpdateActivities;