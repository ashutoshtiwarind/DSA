function maximumInArray(N,arr){
    var maxElement = arr[0];
    for (i = 1; i < N; i++) {
      if (arr[i] > maxElement) {
          maxElement = arr[i];
      }
   }
   console.log(maxElement);
}
