import { newsApi } from "../api/crypto";

const GET_NEWS = 'GET_NEWS';
const NEWS_LOADING_SWITCH ='NEWS_LOADING_SWITCH';

let inintialState = 
{
    news: [],
    isLoading : true
}

export const newsReducer = (state=inintialState, action) =>
{
    switch(action.type)
    {
        case NEWS_LOADING_SWITCH:
            return {...state, isLoading: action.isLoading}
        case GET_NEWS:
            return {...state, news: action.news}
        default:
            return state;
    }
}

export const setCryptoNewsData = (news) => ({type: GET_NEWS, news});
export const switchLoadingNews = (isLoading) =>({type: NEWS_LOADING_SWITCH, isLoading});

export const getNews = (coinId) =>
{
    return (dispatch) =>
    {
        dispatch(switchLoadingNews(true));
        newsApi.getStatusUpdates(coinId).then(
            data=>{
                console.log(data);
                dispatch(setCryptoNewsData(data.data.status_updates));     
                dispatch(switchLoadingNews(false));          
            }
        );
    }
}