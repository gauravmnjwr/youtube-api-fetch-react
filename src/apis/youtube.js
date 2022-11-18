import axios from 'axios'

const KEY ='AIzaSyDqWCTY14A0zebI6bX3QFsKLp5Y6QPJdMg';


export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        type:"video",
        maxResuts:5,
        key:KEY,
    },
});
