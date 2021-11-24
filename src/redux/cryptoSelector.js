import {createSelector} from "reselect";

export const getThrending =(state) =>
{    
    return state.crypto.trending;
}

export const getGlobal =(state) =>
{    
    return state.crypto.global;
}

export const getLoadingStatus =(state) =>
{    
    if (state.crypto.isLoading || state.crypto.isLoadingTrending) return true;
    return false;
}