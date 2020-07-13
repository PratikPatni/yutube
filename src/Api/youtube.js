import  axios from 'axios';

const KEY = 'AIzaSyDDwJhsex5dsDXlU0kCN-aF7ednPT0BYfs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
        
    }
});