const selectionSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }

        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort([23, 5, 65, 45, 7, 3]));

//* Time Complexity  = BigO(n^2)
//* Space Complexity  = BigO(1)