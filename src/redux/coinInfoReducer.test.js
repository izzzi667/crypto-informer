import coinInfoReducer, { 
    setNumbersOfDays,
    switchLoadingCoins, 
    setHistoryCurrency,
    setCoinInfo,
    setCoinHistoryData
} from "./coinInfoReducer";

let state= {
    coin: [],
    coinHistoryData: [],
    isLoading: true,
    numberOfDaysInHistory: 30,
    historyCurrency: 'usd'
};


test('Set number of days',()=>{
    let action = setNumbersOfDays(10);
    let newState = coinInfoReducer(state, action);
    expect(newState.numberOfDaysInHistory).toBe(10);
});


test('Set coins loading to false',()=>{
    let action = switchLoadingCoins(false);
    let newState = coinInfoReducer(state, action);
    expect(newState.isLoading).toBe(false);
});

test('Set coins history currency to rub',()=>{
    let action = setHistoryCurrency('rub');
    let newState = coinInfoReducer(state, action);
    expect(newState.historyCurrency).toBe('rub');
});

test('Try to load btc',()=>{
    let action=setCoinInfo({coin: 'btc'});
    let newState = coinInfoReducer(state, action)
    expect(newState.coin).toStrictEqual({coin: 'btc'});
});

test('Try to load history btc',()=>{
    let action=setCoinHistoryData({coin: 'btc'});
    let newState = coinInfoReducer(state, action)
    expect(newState.coinHistoryData).toStrictEqual({coin: 'btc'});
});
