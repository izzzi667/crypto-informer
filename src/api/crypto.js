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
    getCoinInformation (coinId)
    {
        return  instancse.get('coins/'+coinId);        
    }
}

export default cryptoApi;