function number_generator(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
function array_n () { 
    var N = document.getElementById("elements").value, randon_arr = [], min = 100, max = 0, summa = 0, odd_num = [], arrifmetic_mean = 1;  
    if(Number(N)) {
        N = Number(N);
        for(i = 0; i < N; i++){
            randon_arr.push(number_generator(1, 100));
        }
        for(i = 0; i < N ; i++){
            if (max < randon_arr[i]){
                max = randon_arr[i];
            };
            if (min > randon_arr[i] ){
                min = randon_arr[i];
            };
            if (randon_arr[i] % 2 != 0){
                odd_num.push(randon_arr[i]);
            }
            summa = summa + randon_arr[i];
        }
        arrifmetic_mean = summa / N;
        document.getElementById("arrays").innerHTML = "N is: " + N + " root array is: " + randon_arr + "<br>" + " The lagest value: " + max + " The lowest value: " + min + " Total summ:" + summa + " Arifmethic mean: " + arrifmetic_mean + "<br>" + " The odd values of array are: " + odd_num ;
    } else {
        alert("Data type error! Use only numbers!");
    }
}