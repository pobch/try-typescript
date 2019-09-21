var Sort = /** @class */ (function () {
    function Sort(collection) {
        this.collection = collection;
    }
    Sort.prototype.sort = function () {
        var length = this.collection.length();
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
        return this.collection;
    };
    return Sort;
}());
var NumberCollection = /** @class */ (function () {
    function NumberCollection(data) {
        this.data = data;
    }
    NumberCollection.prototype.compare = function (l, r) {
        return this.data[l] > this.data[r];
    };
    NumberCollection.prototype.swap = function (l, r) {
        var newNumbers = this.data;
        var temp = newNumbers[l];
        newNumbers[l] = newNumbers[r];
        newNumbers[r] = temp;
        // return new NumberCollection(newNumbers)
    };
    NumberCollection.prototype.length = function () {
        return this.data.length;
    };
    return NumberCollection;
}());
var numCollection = new NumberCollection([10, -5, 0, 7, 2]);
var sort = new Sort(numCollection);
console.log(sort.sort().data);
