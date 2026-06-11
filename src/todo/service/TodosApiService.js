import apiClient from "../api/ApiClient";

export function retrieveAllTodos(username) {
    return apiClient.get(
        `/users/${username}/todos`
    );
}

export function deleteTodo(username, id) {
    return apiClient.delete(
        `/users/${username}/todos/${id}`
    )
}

export function createTodo(username, todo) {
    return apiClient.post(
        `/users/${username}/todos`,
        todo
    )
}

export function getTodo(username, id) {
    return apiClient.get(
        `/users/${username}/todos/${id}`
    )
}

export function updateTodo(username, todo) {
    return apiClient.put(
        `/users/${username}/todos`,
        todo
    )
}