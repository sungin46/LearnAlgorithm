const selectionSort = () => {
  let i, j, min, index, temp;
  const arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

  for (i = 0; i < 10; i++) {
    // 10보다 큰 min값을 저장한다.
    min = 9999;

    // 현재 탐색하고 있는 원소가 현재 최소값보다 작다면 바꿔준다.
    for (j = i; j < 10; j++) {
      if (min > arr[j]) {
        min = arr[j];
        // index에 해당 위치값 저장
        index = j;
      }
    }

    // 가장 작은 값을 앞으로 보낸다.(위치 변경)
    temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }

  for (i = 0; i < 10; i++) {
    console.log(arr[i]);
  }
};

selectionSort();
