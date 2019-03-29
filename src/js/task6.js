function rectangle() {
    var rect = [], N = 6, M = 14;
    for (i = 0; i < N; i ++){
        rect[i] = [];
        for (j = 0; j < M; j ++){
            if ((i == 0) || (j == M - 1) || (i == N - 1) || (j == 0) ){
                rect[i][j] = "*";
            } else {
                rect[i][j] = "&#8194";
            }
        }
    }
    document.getElementById("draw").innerHTML += "<br>" + " Rectangle: " + "<br>"
    for (i = 0; i < N; i ++){
        document.getElementById("draw").innerHTML += rect[i] + "<br>";
    }
    document.getElementById("draw").innerHTML += "<br>" + "<br>"
}

function right_triangle() {
    var rect = [], N = 10, M = 14;
    for (i = 0; i < N; i ++){
        rect[i] = [];
        for (j = 0; j < M; j ++){
            if ( (j == 0) || (i == j) || ((i == N-1) && (j < N-1)) ){
                rect[i][j] = "*";
            } else {
                rect[i][j] = "&#8194";
            }
        }
    }
    document.getElementById("draw").innerHTML += "<br>" + " Right triangle: " + "<br>"
    for (i = 0; i < N; i ++){
        document.getElementById("draw").innerHTML += rect[i] + "<br>";
    }
    document.getElementById("draw").innerHTML += "<br>" + "<br>"
}

function equilateral_triangle() {
    var rect = [], N = 15, k = 1;
    for (i = 0; i < N; i ++){
        rect[i] = [];
        for (j = 0; j < N; j ++){
            if( (i == N - 1) || ((i == 0) && (j == (N - (N % 2)) / 2 )) ){
                rect[i][j] = "*";
            } else {
                rect[i][j] = "&#8194";
            } 
        }
    }
    for (j = (N - (N % 2)) / 2 + 1; j < N; j ++){
        
        for(i = k; i < k + 2; i++){
            rect[i][j] = "*"; 
        }
        if (k < N - 2){
            k += 2;
        }
    }   
    k = N - 1;
    for (j = 0; j < (N - (N % 2)) / 2 ; j ++){
        
        for(i = k; i > k - 2; i --){
            rect[i][j] = "*"; 
        }
        if (k > 3){
            k -= 2;
        }
    }
    document.getElementById("draw").innerHTML += "<br>" + " Equilateral triangle: " + "<br>"
    for (i = 0; i < N; i++){
        document.getElementById("draw").innerHTML += rect[i] + "<br>";
    }
    document.getElementById("draw").innerHTML += "<br>" + "<br>"
}

function rhombus() {
    var rect = [], N = 13, k = 1;
    for (i = 0; i < N; i ++){
        rect[i] = [];
        for (j = 0; j < N; j ++){
            rect[i][j] = "&#8194"; 
        }
    }
     for (i = 0; i < N; i ++){
        if (i < (N - N % 2) / 2 + 1) {
            for (j = (N - N % 2) / 2 - i; j < (N - N % 2) / 2 + 1 + i; j ++){
                rect[i][j] = "*";
             }
        } 
        if (i >= (N - N % 2) / 2 + 1){
           
            for (j = k; j < N - k; j++){
                rect[i][j] = "*";
             }
         k++;
        }
     }
    document.getElementById("draw").innerHTML += "<br>" + " Rhombus: " + "<br>"
    for (i = 0; i < N; i ++){
        document.getElementById("draw").innerHTML += rect[i] + "<br>";
    }
    document.getElementById("draw").innerHTML += "<br>" + "<br>"
}






rectangle();
right_triangle();
equilateral_triangle();
rhombus();