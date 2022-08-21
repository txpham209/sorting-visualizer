
let sumbitButton = document.querySelector('#submit');
let selectionSortButton = document.querySelector('#selectionsort')
let inputs = document.querySelector('#inputs')
let input = 10;

sumbitButton.addEventListener('click', createArray(input));
//selectionSortButton.addEventListener('click', selectionSort(records))


function setSize(input) {
  createArray(input)
}

function createArray(size) {
  arraySize = Array.from({length: size}, () => Math.floor(Math.random() * 40));

}

// swap elements in array 
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
/*
function selectionSort(input) {
  let smallest = 0;
  for(let i = 0; i < input.length; i++) 
  {

    for(let j = 0; j < input.length; j++) 
    {

      if (input[j] < input[i])
        smallest = j;

      swap(input, smallest, i);
    }

  }
  */
} 
