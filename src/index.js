// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => { return propertyName; };
const createNotEnumerableProperty = (propertyName) => {
     Object.defineProperty(Object.prototype, propertyName, 
        { set: function(x) { Object.defineProperty(this, 'shadowProp', {value: x, enumerable: false});},
          get: function() { return this['shadowProp']; },
                                        enumerable: false});
                        return propertyName};
const createProtoMagicObject = () => { var x = function() {}; x.__proto__ = x.prototype; return x;};
const incrementor = () => { 
    if(!incrementor.counter) {
        incrementor.counter = 0;
    }
    incrementor.valueOf = function() {
        return incrementor.counter;
    }
    var inc = function() {
        return incrementor();
    }
    inc.valueOf = function() {
        return incrementor.counter;
    }
    incrementor.counter++;
    return inc;
};
const asyncIncrementor = () => {
    if(!asyncIncrementor.counter) {
        asyncIncrementor.counter = 0;
    }
    asyncIncrementor.counter++;
    return asyncIncrementor.counter;
};
const createIncrementer = () => {
    var increm = {};
    increm.val = 0;
    increm.next = function() {
        this.val++;
        var nxt = { done: false, value: this.val };
        return nxt;
    }
    increm[Symbol.iterator] = function*() {
        return this.next();
    }
    return increm;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    var promise = new Promise((resolve, reject) => {
        setTimeout(function() { resolve(param); }, 1010);    
    });
    return promise;
};

const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;