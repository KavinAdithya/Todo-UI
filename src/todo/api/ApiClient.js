import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080"
});

apiClient.interceptors.request.use(config => {

    const token =
        localStorage.getItem("token");

    if(config.url !== "/login" && token) {

        config.headers.Authorization =
            `Bearer ${token}`;
    }

    return config;
});

apiClient.interceptors.response.use(

    response => response,

    error => {

        if(error.response?.status === 401) {

            console.log(
                "Unauthorized - Logging Out"
            );

            localStorage.clear();

            window.location.href =
                "/login";
        }

        return Promise.reject(error);
    }
);

export default apiClient;