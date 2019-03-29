function factorial() { 
    var N = document.getElementById("input_N").value, exit_fac = 1;  
    
    if(Number(N)) {
        N = Number(N);
        for(i = 1; i < N + 1; i++){
            exit_fac *= i;
        }
        document.getElementById("exit_fac").innerHTML = "Факториал числа: " + exit_fac;
    } else {
        alert("Data type error! Use only numbers!");
    }
}