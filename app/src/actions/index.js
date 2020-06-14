import axios from 'axios'

export const FETCHING_DATA = 'FETCHING_DATA'
export const GOT_DATA = 'GOT_DATA'
export const SET_ERROR = 'SET_ERROR'

export const getData = ({platform, region, battleTag, battleId}) => dispatch => {
dispatch({type: FETCHING_DATA})
    axios
        .get(`https://ow-api.com/v1/stats/${platform}/${region}/${battleTag}-${battleId}/profile`)
            .then(res => {
                console.log(res)
                dispatch({type: GOT_DATA, payload:res.data})
            })
            .catch(err => {
                console.log(err)
            })
}