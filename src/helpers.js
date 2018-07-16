export function numberOfRides(array, driver) {
    return array.filter(res => {
        return res.driver === driver
    }).length
}

export function totalCash(array, driver) {
    return array.filter(res => {
        return res.driver === driver;
    }).map(res => {
        return parseFloat(res.rate);
    }).reduce((a, b) => {
        return a + b;
    }, 0)
}

