const myArr = [10, -1, 5, 0]

const sorter = (arr: number[]): void => {
  let len = arr.length
  while (len > 0) {
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const left = arr[i + 1]
        arr[i + 1] = arr[i]
        arr[i] = left
      }
    }
    len--
  }
}

sorter(myArr)
console.log(myArr)
