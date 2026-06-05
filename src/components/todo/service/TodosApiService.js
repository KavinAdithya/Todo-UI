import apiClient from "../api/ApiClient";

export function retrieveAllTodos(username) {
    return apiClient.get(
        `/users/${username}/todos`
    );
}