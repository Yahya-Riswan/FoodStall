import axios from "axios";
import { setData, setError, setLoading } from "./redux";
import store from "./redux";
let wifi = true
store.subscribe(() => {
    wifi = store.getState().wifi
});
function getDataInfo() {
    return function (dispatch) {
        dispatch(setLoading(true));
        let api = 'https://dummyjson.com/recipes'
        if(!wifi){api = "https://dummyjson.com/recipesdsf"}
        return axios.get(api)
            .then((response) => {
                setTimeout(() => {
                    dispatch(setData(response.data));
                    dispatch(setLoading(false));
                    dispatch(setError(''));
                },3000)
            })
            .catch(() => {
                dispatch(setLoading(false));
                dispatch(setError('An Error Occured, Try Agian Later'));
            });

    }

}


export default getDataInfo;