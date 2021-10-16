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
        return instancse.get('coins/markets?vs_currency='+currency+'&order='+order+'&per_page='+per_page+'&page='+page+'&sparkline=false')
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

export default cryptoApi;