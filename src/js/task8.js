function number_generator(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
function array_nxn () { 
    var N = document.getElementById("array_range").value, randon_arr = [], min = 100, max = -100;  
    if(Number(N)) {
        N = Number(N);
        for(i = 0; i < N; i++){
            randon_arr[i] = []; 
            for (j = 0; j < N; j++){
                randon_arr[i][j] = number_generator(-100, 100);
            }
        }
        document.getElementById("arraysxn").innerHTML = "<br>" + "Исходный массив:" + "<br>";
        for (i = 0; i < N; i++){
            document.getElementById("arraysxn").innerHTML += randon_arr[i] + "<br>";
        } 
        for(i = 0; i < N; i++){
            j = i;
            if(randon_arr[i][j] < 0 ){
                randon_arr[i][j] = 10;
            }
            else if(randon_arr[i][j] > 0) {
                randon_arr[i][j] = 20;
            }
        }
        document.getElementById("arraysxn").innerHTML += "<br>" + "Конечный массив: " + "<br>";
        for (i = 0; i < N; i++){
            document.getElementById("arraysxn").innerHTML +=  randon_arr[i] + "<br>";
        } 
     } else {
        alert("Data type error! Use only numbers!");
    }
}