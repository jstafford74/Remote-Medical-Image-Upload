import axios from "axios";


export default {

    upload: function (param) {
        return axios.post("/remotemedical/images", param).then(res => res.data);
    }
};