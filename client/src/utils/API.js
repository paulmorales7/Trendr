import axios from 'axios';



export default {
    getTwitterStream: function(queryTerm){
        return axios.get("/trends/" + queryTerm)
},

// Might not need the http://localhost:3001 in each of these endpoints... not really sure.

    getResultsALL: function(){
        return axios.get('http://localhost:3001/trends/all')
    },
    getResultsENTERTAINMENT: function(){
        return axios.get('http://localhost:3001/trends/e')
    },
    getResultsBUSINESS: function(){
        return axios.get('http://localhost:3001/trends/b')
    },
    getResultsTECH: function(){
        return axios.get('http://localhost:3001/trends/t')
    },
    getResultsHEALTH: function(){
        return axios.get('http://localhost:3001/trends/m')
    },
    getResultsSPORTS: function(){
        return axios.get('http://localhost:3001/trends/s')
    },
    getResultsTOP: function(){
        return axios.get('http://localhost:3001/trends/h')
    }
};

