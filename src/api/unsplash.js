import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID r5lfPwLlbVaG8b01efwskXQGs2vbkIAinKRkqs5dJBo'
  }
});