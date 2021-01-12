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
    },

<<<<<<< HEAD
=======
    // Not working yet

    // saveHistory: function(){
    //     return axios.post('/save')
    // }
    // getHistory: function(){
    //     return axios.get('/history')
    // }
>>>>>>> 857e34a6f191a6c9db695d6d7199a9ac9930b944
};

