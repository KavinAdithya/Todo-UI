import apiClient from '../api/ApiClient';

export function executeJwtAuthentication(
    username,
    password
) {
    return apiClient.post(
                    '/login',
                    {
                        username:username,
                        password:password
                    }
                );
}