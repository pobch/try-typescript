"use strict";
var myArr = [10, -1, 5, 0];
var sorter = function (arr) {
    var len = arr.length;
    while (len > 0) {
        for (var i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var left = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = left;
            }
        }
        len--;
    }
};
sorter(myArr);
console.log(myArr);
