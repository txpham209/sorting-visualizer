

let selectionSortButton = document.querySelector('#selectionsort');
let insertionSortButton = document.querySelector('#insertionsort');
let mergeSortButton = document.querySelector('#mergesort');
let bubbleSortButton = document.querySelector('#bubblesort')

selectionSortButton.addEventListener('click', selectionSort);
insertionSortButton.addEventListener('click', insertionSort);
mergeSortButton.addEventListener('click', mergeSort);
bubbleSortButton.addEventListener('click', bubbleSort)

let wait_time = 500
let size = 100


function clearBox(elementID)
{
    document.querySelector(elementID).innerHTML = "";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setWaitTime(time) {
  wait_time = time
}

async function createArray(size) {
  let array = Array.from({length: size}, () => Math.floor(Math.random()  * 40));
  let array_space = document.querySelector(".array")
  array_space.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  
  for (let i = 0; i < size; i++) {
    
    let square = document.createElement("div");
    square.classList.add('individual-ints')
    array_space.insertAdjacentElement("beforeend", square);
    square.insertAdjacentText("beforeend", array[i])
  }
  let cells = document.querySelectorAll(".individual-ints")
  let width = (array_space.offsetWidth / size);
  console.log(width)

  for (let i = 0; i < cells.length; i += 1) {
    cells[i].style.height = `${parseInt(cells[i].innerHTML) * 14}px`;
    cells[i].style.transform = `translateX(${i * width }px)`;
    cells[i].style.width = width + "px"
  }
}

createArray(100)

function setSize(input) {
  clearBox('.array')
  createArray(input);
}

async function selectionSort(delay = 1000) {
  let cells = document.querySelectorAll(".individual-ints")
  for(let i = 0; i < cells.length; i++) 
  {
    let smallest = i;
    cells[i].style.backgroundColor = "darkblue";
    for(let j = i + 1; j < cells.length; j++) 
    {

      // Provide red color to the jth bar
      cells[j].style.backgroundColor = "red";
        
      // To pause the execution of code for 300 milliseconds
      await sleep(wait_time)
       // To store the integer value of jth bar to var1 
      var val1 = parseInt(cells[j].innerHTML);
       // To store the integer value of smallest bar to var2 
      var val2 = parseInt(cells[smallest].innerHTML);


      if (val1 < val2) {
        if (smallest !== i) {
        // Provide skyblue color to the smallest bar
          cells[smallest].style.backgroundColor = "  rgb(24, 190, 255)";
        }
        smallest = j;
      } else {
      // Provide skyblue color to the jth bar
        cells[j].style.backgroundColor = "  rgb(24, 190, 255)";
      }
    }
    var temp2 = cells[smallest].innerText;
    var temp1 = cells[smallest].style.height;
    cells[smallest].style.height = cells[i].style.height;
    cells[smallest].innerText = cells[i].innerText;
    cells[i].innerText = temp2;
    cells[i].style.height = temp1;

    // To pause the execution of code for 300 milliseconds
    await sleep(wait_time)
  
    // Provide skyblue color to the (min-idx)th bar
    cells[smallest].style.backgroundColor = "  rgb(24, 190, 255)";
  
    // Provide lightgreen color to the ith bar
    cells[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
} 

async function insertionSort(delay = 1000) {
  let cells = document.querySelectorAll(".individual-ints");

  for(let i = 1; i < cells.length; i++) {

    let key = parseInt(cells[i].innerHTML);    ;
    let j = i - 1; // index for inner loop
    let height = cells[i].style.height;

    while (j >= 0 && parseInt(cells[j].innerHTML) > key) {
      // Provide red color to the jth bar
      cells[j].style.backgroundColor = "yellow";
      cells[i].style.backgroundColor = "red";
      cells[j + 1].style.height = cells[j].style.height;

      await sleep(wait_time)
     // cells[key].style.backgroundColor = "red"
      // To pause the execution of code for 1000 milliseconds
      cells[j + 1].innerText = cells[j].innerText;
      j = j - 1;  

    }
      cells[j + 1].innerHTML = key;


      for(var k=i;k>=0;k--){
        cells[k].style.backgroundColor = " rgb(49, 226, 13)";
      // To pause the execution of code for 300 milliseconds
      }
      cells[j + 1].style.height = height;
      await sleep(wait_time)
    }  
}  

async function mergeSort() {
  let cells = document.querySelectorAll(".individual-ints");
  let arr = [];
  for (let i = 0; i < cells.length; i++) {
    arr.push(parseInt(cells[i].innerText))
  }

  mergeSortVisual(arr, 0, arr.length - 1)
}


async function mergeSortVisual(arr, l, r) {

  if(l>=r){
    return;//returns recursively
  }
  var m =l+ parseInt((r-l)/2);
  await mergeSortVisual(arr,l,m);
  await mergeSortVisual(arr,m+1,r);
  await merge(arr,l,m,r);
  
  await sleep(wait_time)
}

async function merge(arr, l, m, r)
{
    console.log(arr)
    let cells = document.querySelectorAll(".individual-ints");
    var n1 = m - l + 1;
    var n2 = r - m;
  
    // Create temp arrays
    var L = new Array(n1); 
    var R = new Array(n2);
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]
  
    // Initial index of first subarray
    var i = 0;
  
    // Initial index of second subarray
    var j = 0;
  
    // Initial index of merged subarray
    var k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            cells[k].style.height = `${L[i] * 15}px`;
            arr[k] = L[i];
            i++;
        }
        else {
            cells[k].style.height = `${R[j] * 15}px`;
            arr[k] = R[j];
            j++;
        }
        cells[k].innerHTML = arr[k];
        cells[k].style.backgroundColor = "orange"
        k++;
    }
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        cells[k].style.height = `${L[i] * 15}px`;
        arr[k] = L[i];
        cells[k].innerHTML = arr[k];
        cells[k].style.backgroundColor = "orange"
        i++;
        k++;
    }
  
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        cells[k].style.height = `${R[j] * 15}px`;
        arr[k] = R[j];
        cells[k].innerHTML = arr[k];
        cells[k].style.backgroundColor = "orange"
        j++;
        k++;
    }
}

async function bubbleSort() {
  let cells = document.querySelectorAll(".individual-ints");
  var i, j;
  let smallest;
  for (i = 0; i < cells.length; i++)
  {
      for (j = 0; j < cells.length - i - 1; j++) {
        // To store the integer value of jth bar to var1 
        var val1 = parseInt(cells[j].innerHTML);
        // To store the integer value of smallest bar to var2 
        var val2 = parseInt(cells[j+1].innerHTML);

        cells[j+1].style.backgroundColor = 'green'
        cells[j].style.backgroundColor = 'blue'
        if (val1 > val2) {
          let temp1 = cells[j + 1].innerText
          let temp2 = cells[j+1].style.height;
          cells[j + 1].innerText = cells[j].innerText;
          cells[j + 1].style.height = cells[j].style.height
          cells[j].innerText = temp1;
          cells[j].style.height = temp2;

        }
  
      // To pause the execution of code for 300 milliseconds
      await sleep(wait_time)
      }
    }
    cells[0].style.backgroundColor = 'green'

}