
let selectionSortButton = document.querySelector('#selectionsort')
let inputs = document.querySelector('#inputs')
let input = 10;



function setSize(input) {
  createArray(input);
}

function createArray(size) {
  array = Array.from({length: size}, () => Math.floor(Math.random() * 40));
  let array_space = document.querySelector(".array")
  let array_elements = array_space.querySelector("div")

  array_space.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  
  for (let i = 0; i < size; i++) {
    let element = document.createElement("div");
    element.classList.add('individual-ints')
    array_space.insertAdjacentElement("beforeend", element);
    element.insertAdjacentText("beforeend", array[i])
  }

}

createArray(input)
// swap elements in array 
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
selectionSortButton.addEventListener('click', selectionSort)

function selectionSort(input) {
  for(let i = 0; i < input.length - 1; i++) 
  {
    let smallest = i;
    for(let j = i + 1; j < input.length; j++) 
    {

      if (input[j] < input[smallest])
        smallest = j;
    }
    swap(input, smallest, i);

  }
  console.log(input)
  console.log("test")
  // document.querySelector("#sorted-array").innerHTML = array

} 

selectionSort(array)