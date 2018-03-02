// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => { return propertyName; };
const createNotEnumerableProperty = (propertyName) => {
     Object.defineProperty(Object.prototype, propertyName, 
        { set: function(x) { Object.defineProperty(this, 'shadowProp', {value: x, enumerable: false});},
          get: function() { return this['shadowProp']; },
                                        enumerable: false});
                        return propertyName};
const createProtoMagicObject = () => {};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
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