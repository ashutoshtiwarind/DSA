/*
https://oj.masaischool.com/contest/2081/problem/07
*/
    
function cirTraversal(matrix,N) {
    let output = "";
    for (let r = N-1; r >= 0; r--){
        output += matrix[r][0] + " ";
    }
    for (let c = 1; c < N; c++){
        output += matrix[0][c] + " ";
    }
    for (let r = 1; r < N; r++) {
        output += matrix[r][N-1] + " ";
    }
    for (let c = N-2; c >= 1; c--) {
        output += matrix[N-1][c] + " ";
    }
    console.log(output);
}
