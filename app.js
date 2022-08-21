let sumbitButton = document.querySelector('#submit');
let selectionSortButton = document.querySelector('#selection-sort')
let records = [];

sumbitButton.addEventListener('click', createArray);
selectionSortButton.addEventListener('click', selectionSort(records))


function createArray() {

  let input_text = document.querySelector('#input-text').value;

  if (!input_text) {
    return
  }

  records.push(input_text)
  console.log(records)
}
// swap elements in array 
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function selectionSort(input) {
  let smallest = 0;
  for(let i = 0; i < input.length; i++) 
  {

    for(let j = 0; j < input.length; j++) 
    {

      if (input[j] < input[i])
        smallest = j;

      swap(arr, smallest, i);
    }

  }

}