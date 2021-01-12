import axios from 'axios';



export default {
    getTwitterStream: function(queryTerm){
        return axios.get("/trends/" + queryTerm)
},
    getResultsALL: function(){
        return axios.get('/trends/all')
    },
    getResultsENTERTAINMENT: function(){
        return axios.get('/trends/e')
    },
    getResultsBUSINESS: function(){
        return axios.get('/trends/b')
    },
    getResultsTECH: function(){
        return axios.get('/trends/t')
    },
    getResultsHEALTH: function(){
        return axios.get('/trends/m')
    },
    getResultsSPORTS: function(){
        return axios.get('/trends/s')
    },
    getResultsTOP: function(){
        return axios.get('/trends/h')
    }

    // Placeholders for history functions:

    // saveHistory: function(){
    //     return axios.post('/save')
    // },
    // getHistory: function(){
    //     return axios.get('/history')
    // }
};

