function volume_square() {
    var radius = document.getElementById("input_r").value, height_cyl = document.getElementById("input_h").value,  volume = 0, square = 0;
    if(Number(radius) && Number(height_cyl)) {
        radius = Number (radius);
        height_cyl = Number (height_cyl);
        volume = Math.PI * Math.pow(radius, 2) * height_cyl;
        square = (2 * Math.PI * radius) * (height_cyl + radius);
         
        document.getElementById("exit_V").textContent = " Объем равен: "+ volume + " Площадь равна: " + square;
    } else {
        alert("Data type error! Use only numbers!");
    }
}