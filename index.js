const myEach = (collection, callback) => {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        let values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            callback(values[i], Object.keys(collection)[i], collection);
        }
    }
    return collection;
};

const myMap = (collection, callback) => {
    const newArray = [];

    for (let i = 0; i < Object.keys(collection).length; i++) {
        const key = Object.keys(collection)[i];
        const transformedValue = callback(collection[key], key);
        newArray.push(transformedValue);
    }

    return newArray;
}

const myReduce = (collection, callback, acc) => {
    let startingIndex = 0;

    if (typeof acc === 'undefined') {
        acc = collection[Object.keys(collection)[0]];
        startingIndex = 1;
    }

    for (let i = startingIndex; i < Object.keys(collection).length; i++) {
        const key = Object.keys(collection)[i];
        acc = callback(acc, collection[key], collection);
    }

    return acc;
}


const myFind = (collection, predicate) => {
    for (let i = 0; i < Object.keys(collection).length; i++) {
        const key = Object.keys(collection)[i];
        if (predicate(collection[key], key)) {
            return collection[key];
        }
    }
    return undefined;
}

const myFilter = (collection, predicate) => {
    const result = [];
    for (let i = 0; i < Object.keys(collection).length; i++) {
        const key = Object.keys(collection)[i];
        if (predicate(collection[key], key)) {
            result.push(collection[key]);
        }
    }
    return result;
}


const mySize = (collection) => {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

const myFirst = (array, n) => {
    if (!n) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}
const myLast = (array, n) => {
    if (!n) {
        return array[array.length - 1];
    } else {
        return array.slice(Math.max(array.length - n, 0));
    }
}
const mySortBy = (array, callback) => {
    return array.slice().sort(function (a, b) {
        var x = callback(a);
        var y = callback(b);
        if (typeof x === 'string') {
            x = x.toLowerCase();
        }
        if (typeof y === 'string') {
            y = y.toLowerCase();
        }
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });
}

const myFlatten = (array, shallow, newArr = []) => {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) && !shallow) {
            myFlatten(array[i], false, newArr);
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}
const myKeys = (object) => {
    return Object.keys(object);
}
const myValues = (object) => {
    return Object.values(object);
}

// let x = myReduce({ one: 1, two: 2, three: 3 }, function (acc, val, collection) { return acc + val; });
// console.log(x);