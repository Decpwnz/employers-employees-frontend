import axios from 'axios';

import showNotification from '../utils/notification';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

const getUsers = async () => {
  try {
    const response = await api.get('/testDB');
    return response.data;
  } catch (error) {
    showNotification('Failed to get users:', error);
    throw error;
  }
};

export default getUsers;
