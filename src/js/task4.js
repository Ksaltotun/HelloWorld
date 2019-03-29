function in_range() { 
    var A = document.getElementById("input_A").value, B = document.getElementById("input_B").value, answer1 = "", answer2 = "";  
    if(Number(A) && Number(B)) {
        A = Number (A);
        B = Number (B);
        for(i = A; i < B + 1; i++){
            answer1 += i;
            if (i % 2 != 0){
                answer2 += i;
            }
        }
                alert(answer1);
        document.getElementById("exit_num").innerHTML = " Первая последовательность: " + answer1 + " Вторая последовательность " + answer2;
    } else {
        alert("Data type error! Use only numbers!");
    }
}