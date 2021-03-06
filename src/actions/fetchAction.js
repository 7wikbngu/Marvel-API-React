import { FETCH } from './types';
import { FETCH_ERROR } from './types';
import { config } from '../config';

export const fetchAction = (resource) => dispatch => {
    console.log("Fetching");
    config.resource = resource;
    fetch(config.baseURL + '/' + resource + '?limit=100&apikey=a84eb8aaddf9cf1492ca3071de686078&hash=1170cad60a0b3f1c24788ef2d0729c40&ts=1')
        .then(resp => resp.json())
        .then(data => dispatch({
            type: FETCH,
            payload: {
                data: data.data.results,
                error: false
            }
            }))
        .catch(e => {
            console.log(e);
        })
}
