export const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`


export const registerUser = async (user) => {

    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
               user
            ),
        });
        const results = await response.json();
        console.log(results)
        return results
    } catch (err) {
        console.error(err);
    }
    
}

export const login = async (user) => {

    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                user
            )
        });
        const results = await response.json();
        console.log(results)
        return results
    } catch (err) {
        console.error(err);
    }
}

export const myData = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const results = await response.json();
        return results
    } catch (err) {
        console.error(err);
    }
}

export const getAllPublicRoutines = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/routines`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
};

export const getAllActivities = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/activities`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
};

export const createActivity = async (token, name, description) => {
    try {
        const response = await fetch(`${BASE_URL}/activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                description,
                isPublic: true
            })
        });

        const result = await response.json();

        console.log(result);
        return result
    } catch (error) {
        throw error;
    }
}
export const updateActivity = async (token, activityName, activityDescription, id) => {
    try {
        const response = await fetch(`${BASE_URL}/activities/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            method: "PATCH",
            body: JSON.stringify({
                name: activityName,
                description: activityDescription
            })
        });

        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        throw error;
    }
}

export const getRoutinesWithActivities = async (token, id) => {
    try {
        const response = await fetch(`${BASE_URL}/activities/${id}/routines`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        throw error;
    }
}

export const getAllRoutines = async () => {
    try {
        const response = await fetch(`${BASE_URL}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();
       
        return result
    } catch (error) {
        throw error;
    }
}

export const createRoutine = async (token, routineName, routineGoal) => {
    try {
        
        const response = await fetch(`${BASE_URL}/routines`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            
            body: JSON.stringify({
                name: routineName,
                goal: routineGoal,
                isPublic: true
            })
        });
        const result = await response.json();

        console.log(result);
        return result
    } catch (error) {
        throw error;
    }
}

export const updateRoutine = async (token, routineName, routineGoal, id) => {
    try {
        const response = await fetch(`${BASE_URL}/routines/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: routineName,
                goal: routineGoal,
                isPublic: true
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}

export const deleteRoutine = async (token, id) => {
    try {
        const response = await fetch(`${BASE_URL}/routines/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}

export const attachActivityToRoutine = async (activityId, count, duration, routineId) => {
    try {
        const response = await fetch(`${BASE_URL}/routines/${routineId}/activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                activityId: activityId,
                count: count,
                duration: duration
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}

export const updateRoutineActivities = async (token, id, count, duration) => {
    try {
        const response = await fetch(`${BASE_URL}/routine_activities/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                count: count,
                duration: duration
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}

export const deleteActivityFromRoutine = async (token, id) => {
    try {
        const response = await fetch(`${BASE_URL}/routine_activities/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}