// Selection sort
// track index
function selectionSort(array){
    let min
    for(let i = 0; i < array.length - 1; i++){
        min = i

        for(let i = i +1; j < array.length; j++){
            if(array[i] < array[min]) min = j
        }
        if( i !== min){
            let temp = array[i]
            array[i] = array[min]
            array[min] = temp
        }
    }

    return array
}

selectionSort([4,2,5,9,8])