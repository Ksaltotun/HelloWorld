function arithmetic_average() {
    var stroka = document.getElementById("input_num").value, str_mas = stroka.split(" "), summ = 0;
    for (i = 0; i < str_mas.length; i ++) {
        if (Number(str_mas[i])){
            summ += Number(str_mas[i]);
            ar_ar = summ / str_mas.length;
            document.getElementById("exit").textContent = ar_ar;
        } else {
            alert("Data type error! Use only numbers!");
            break;
        }
     }
}
