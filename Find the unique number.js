https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

    function findUniq(arr) {
        return arr.filter(elm => arr.indexOf(elm) === arr.lastIndexOf(elm))[0];
    }