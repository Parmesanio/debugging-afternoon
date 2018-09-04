import axios from 'axios';

export const getAllProducts = function() {
    return axios.get("https://practiceapi.devmountain.com/products/")
    .then(response => {
        console.log(response.data);
        return response.data;
        
    });
}