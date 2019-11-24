export const REQUEST_TASK_CREATIONS = "REQUEST_TASK_CREATIONS"
export const CREATE_TASK = "CREATE_TASK"

export const requestTaskCreation = (groupID) => ({
    type: REQUEST_TASK_CREATIONS,
    groupID
})

export const createTask = (taskID, groupID, ownerID) => ({
    type: CREATE_TASK,
    taskID,
    groupID,
    ownerID
})