let assert = require('chai').assert; // активируем chai

function sum(a, b) {
	return a + b > 10;
}

describe('sum', function() {
	it ('Возвращает тип данных true', function() {
		assert.isNotNaN(sum(2,2));
	});
});




let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

describe('arr', function() {
	it ('Получаем элемент массива', function() {
		assert.equal(num, 5);
	});
});




var each = function(startArr, f) {
	return f(startArr);
};

let array = [64, 49, 36, 25, 16];

let myFunc = function(a) {
	let newArr = [];
	for (let i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}

let newArray = each(array, myFunc);

//console.log(each(arr, myFunc));

describe('each', function() {
	it ('Возвращает ли функция массив?', function() {
		assert.typeOf(each(array, myFunc), 'array');
	});
});

describe('newArray', function() {
	it ('Длина массива', function() {
		assert.equal(newArray.length, 5);
	});
});

let testArray = [8,7,6,5,4];

describe('each', function() {
	it ('Ожидаем массив', function() {
		assert.deepEqual(newArray, testArray);
	});
});


