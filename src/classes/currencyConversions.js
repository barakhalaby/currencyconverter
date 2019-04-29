export function convertCurrency(myCurrencyRate,convertingRate,myCurrency){
    // myCurrency is currency I have
    // converted is currency I want
    // convertingRate is the converted currency rate
    //myCurrencyRate 
    const converted = ((myCurrency * convertingRate) / myCurrencyRate).toFixed(3);

    return converted;
}

export function reverseRate(cur1,converted){
    const flipped = (cur1 /converted).toFixed(3);
    return flipped;
}
