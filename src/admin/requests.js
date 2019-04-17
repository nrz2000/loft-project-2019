import axios from 'axios';

const token = localStorage.getItem('token');

axios.defaults.baseURL = "https://webdev-api.loftschool.com/";
axios.defaults.headers['Authorization'] = `Bearer ${token}`;

// Проверка до того как приедет ответ от сервера на принятие данных
axios.interceptors.response.use(
  function(response) {
    return response;
  }, error =>  {
    // Текущий запрос, который прервался
    const originalRequest = error.config;
    // Если срабатывает ошибка использования время токена
    if (error.response.status === 401) {
      // Запрашиваем новый
      return axios.post('/refreshToken').then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        // Перезаписываем новый токен
        axios.defaults.headers['Authorization'] = `Bearer ${token}`;
        // Повторение текущего запроса, но уже с новым токеном
        originalRequest.headers['Authorization'] = `Bearer ${token}`;
        return axios(originalRequest)
      })
    }
    return Promise.reject(error);
  }
)

export default axios;
