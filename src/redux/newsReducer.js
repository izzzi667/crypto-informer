import { newsApi } from "../api/crypto";

const GET_NEWS = 'GET_NEWS';
const GET_EVENTS = 'GET_EVENTS';
const ADD_NEWS_TO_LIST = 'ADD_NEWS_TO_LIST';
const NEWS_LOADING_SWITCH ='NEWS_LOADING_SWITCH';
const NEWS_LOADING_DETAILS_SWITCH ='NEWS_LOADING_DETAILS_SWITCH';

let inintialState = 
{
    currentNewsPage: 1,
    news: [],
    events: [],
    isLoading : true,
    isLoadingDetails: false
}

export const newsReducer = (state=inintialState, action) =>
{
    switch(action.type)
    {
        case NEWS_LOADING_DETAILS_SWITCH:
            return {...state, isLoadingDetails: action.isLoadingDetails}
        case NEWS_LOADING_SWITCH:
            return {...state, isLoading: action.isLoading}
        case ADD_NEWS_TO_LIST:
            return {...state,currentNewsPage: action.currentNewsPage,
                    news: state.news.concat(action.news) }
        case GET_NEWS:
            return {...state, news: action.news}
        case GET_EVENTS:
            return {...state, events: action.events}
        default:
            return state;
    }
}

export const setCryptoNewsData = (news) => ({type: GET_NEWS, news});
export const setCryptoEventsData = (events) => ({type: GET_EVENTS, events});
export const addCryptoNewsData = (news, currentNewsPage) => ({type: ADD_NEWS_TO_LIST, news, currentNewsPage});
export const switchLoadingNews = (isLoading) =>({type: NEWS_LOADING_SWITCH, isLoading});
export const switchLoadingNewsDeatail = (isLoadingDetails) =>({type: NEWS_LOADING_DETAILS_SWITCH, isLoadingDetails});

export const getNews = () =>
{
    return (dispatch) =>
    {
        dispatch(switchLoadingNews(true));
        newsApi.getStatusUpdates(100,1).then(
            data=>{
                dispatch(setCryptoNewsData(data.data.status_updates));     
                dispatch(switchLoadingNews(false));          
            }
        );
    }
}

export const getEvents = () =>
{
    return (dispatch) =>
    {
        dispatch(switchLoadingNews(true));
        newsApi.getEvents().then(
            data=>{
                dispatch(setCryptoEventsData(data.data));     
                dispatch(switchLoadingNews(false));          
            }
        );
    }
}

export const addNews = (page) =>
{
    return (dispatch) =>
    {
        dispatch(switchLoadingNewsDeatail(true));
        newsApi.getStatusUpdates(100, page).then(
            data=>{                
                dispatch(addCryptoNewsData(data.data.status_updates, page));     
                dispatch(switchLoadingNewsDeatail(false));          
            }
        );
    }
}