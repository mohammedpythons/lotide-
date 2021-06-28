


function middle(arrOne) {
    let container = []
    if (arrOne.length === 2 || arrOne.length === 1) {
        return []
    }else if (arrOne.length % 2 === 0) {
        let val2 = Math.floor((arrOne.length -1) /2);
        container.push(arrOne[val2])
        let val1 = Math.floor((arrOne.length) /2)
        container.push(arrOne[val1])
    }else if (arrOne % 2 !== 0) {
        let val3 = Math.floor((arrOne.length -1) /2);
        container.push(arrOne[val3])
    }
    return container;
}


module.exports = middle

