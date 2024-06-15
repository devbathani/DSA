const insertionSort = (arr) => {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort([23, 5, 65, 45, 7, 3]));

//* Time Complexity  = BigO(n^2)
//* Space Complexity  = BigO(1)