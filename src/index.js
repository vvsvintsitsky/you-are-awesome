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

const getDeepPropertiesCount = (obj) => {
    var count = 0;
    var multiPropArray = [];
    multiPropArray.push(obj);
    var temp;
    for(let element of multiPropArray) {
        var iPropArray = Object.values(element);
        var j = iPropArray.length;
        for(let i = 0; i < iPropArray.length; i++) {
            if(Object.values(iPropArray[i]) != 0) {
                multiPropArray.push(iPropArray[i]);
                j--;
            }
        }
        count = count + 1 + j;
    }
    return --count;
};
const createSerializedObject = () => {
    var str = new String();
    str.valueOf = function() {
        return this.toString();
    }
    return str;
};
const toBuffer = () => {};
const sortByProto = (objectArray) => {
    return objectArray.sort(function(left, right) {
         while(left.__proto__ !== null) {
            if(left.__proto__ === right) {
                return -1;
            }
            left = left.__proto__;
        }
        return 1;
    });
};

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