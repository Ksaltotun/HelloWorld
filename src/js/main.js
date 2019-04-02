
function random_number () {
    return (Math.random() * (200) - 100);
}
function gen_mass (N){
    var mass = [];
    for (i = 0; i < N; i++){
        mass[i] = random_number; 
        
    }
    return mass;
}

no_sort_mass = gen_mass(5);
function sort(no_sort_mass) {
    var buf = 0, max = no_sort_mass[0];
     
    for (j = 0; j < no_sort_mass.length; j++ ){
        for(i = j; i < no_sort_mass.length; i++){
            if (max < no_sort_mass[i]){
                buf = max;
                max = no_sort_mass[i];
                no_sort_mass = buf;
            }


    }
    


        
    }


}

