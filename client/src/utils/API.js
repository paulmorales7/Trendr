import axios from 'axios';



export default {
    getTwitterStream: function(queryTerm){
        return axios.get("/trends/" + queryTerm)
}};