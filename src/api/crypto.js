import axios from "axios";

const instancse = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/'
});


export const cryptoApi = 
{
    getCoinsList ()
    {
        return  instancse.get('coins/list');        
    },
    getCoinsDetailedList (currency='usd',per_page=100, page=1, order='market_cap_desc')
    {
        return instancse.get('coins/markets?vs_currency='+currency+'&order='+order+'&per_page='+per_page+'&page='+page+'&sparkline=false&price_change_percentage=1h,24h,7d,14d,30d,200d,1y')
    },
    getCoinInformation (coinId)
    {
        return  instancse.get('coins/'+coinId);        
    },
    getCoinHistoryData (coinId, VScurrency = 'usd', days=30)
    {      
        return instancse.get ('coins/'+coinId+'/market_chart?vs_currency='+VScurrency+'&days='+days);
    }
}

export const newsApi = 
{
    getStatusUpdates(project_type ='', per_page=100, page =1)
    {
        let projectQuert = project_type.length!=0? `&project_type=${project_type}`:'';
        return instancse.get(`/status_updates?page=${page}&per_page=${per_page}${projectQuert}`);
    }
}

export default cryptoApi;