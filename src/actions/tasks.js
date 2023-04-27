import {
    CREATE_TASK,
    RETRIEVE_TASKS,
    UPDATE_TASK,
    DELETE_TASK,
    DELETE_ALL_TASKS
} from "./types";
  
import TaskService from "../services/task.service";

export const createTask = (title, description) => async (dispatch) => {
    try {
        const res = await TaskService.create({ title, description });

        dispatch({
        type: CREATE_TASK,
        payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveTasks = () => async (dispatch) => {
    try {
        const res = await TaskService.getAll();
        
        dispatch({
        type: RETRIEVE_TASKS,
        payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateTask = (id, data) => async (dispatch) => {
    try {
        const res = await TaskService.update(id, data);

        dispatch({
        type: UPDATE_TASK,
        payload: data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteTask = (id) => async (dispatch) => {
    try {
        await TaskService.delete(id);

        dispatch({
        type: DELETE_TASK,
        payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteAllTasks = () => async (dispatch) => {
    try {
        const res = await TaskService.deleteAll();

        dispatch({
        type: DELETE_ALL_TASKS,
        payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const findTasksByTitle = (title) => async (dispatch) => {
    try {
        const res = await TaskService.findByTitle(title);

        dispatch({
        type: RETRIEVE_TASKS,
        payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};