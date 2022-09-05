
let selectionSortButton = document.querySelector('#selectionsort');
let insertionSortButton = document.querySelector('#insertionsort');
let mergeSortButton = document.querySelector('#mergesort');

let inputs = document.querySelector('#inputs');
let input = 10;

selectionSortButton.addEventListener('click', selectionSort);
insertionSortButton.addEventListener('click', insertionSort);
mergeSortButton.addEventListener('click', mergeSort);

function setSize(input) {
  createArray(input);
}

function createArray(size) {
  let array = Array.from({length: size}, () => Math.floor(Math.random() * 40));
  let array_space = document.querySelector(".array")
  let array_elements = array_space.querySelector("div")

  array_space.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  
  for (let i = 0; i < size; i++) {
    let element = document.createElement("div");
    element.classList.add('individual-ints')
    array_space.insertAdjacentElement("beforeend", element);
    element.style.height = '${value * 3}px';
    element.insertAdjacentText("beforeend", array[i])
  }

}

createArray(input)
// swap elements in array 

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
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1000)
      );
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
    var temp1 = cells[smallest].style.height;
    var temp2 = cells[smallest].innerText;
    cells[smallest].style.height = cells[i].style.height;
    cells[i].style.height = temp1;
    cells[smallest].innerText = cells[i].innerText;
    cells[i].innerText = temp2;

    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 1000)
    );
  
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

    while (j >= 0 && parseInt(cells[j].innerHTML) > key) {
      // Provide red color to the jth bar
      cells[j].style.backgroundColor = "yellow";
      cells[i].style.backgroundColor = "red";

      await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 1000)
    );
     // cells[key].style.backgroundColor = "red"
      // To pause the execution of code for 1000 milliseconds
      console.log(" test " + cells[j].innerText + " > " + " " + key)
      cells[j + 1].innerText = cells[j].innerText;
      j = j - 1;  

      // Provide lightgreen color to the sorted part

    }
      cells[j + 1].innerHTML = key;

      // To pause the execution of code for 300 milliseconds

      for(var k=i;k>=0;k--){
        cells[k].style.backgroundColor = " rgb(49, 226, 13)";
      // To pause the execution of code for 300 milliseconds
      }
      await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 1000)
    );
    }  
}  

async function mergeSort(delay = 1000) {
  let cells = document.querySelectorAll(".individual-ints");
  let arr = [];
  for (let i = 0; i < cells.length; i++) {
    arr.push(parseInt(cells[i].innerText))
  }

  mergeSortVisual(arr, 0, arr.length - 1)
  console.log(arr)
}


function mergeSortVisual(arr, l, r) {
  let cells = document.querySelectorAll(".individual-ints");

  if(l>=r){
    return;//returns recursively
  }
  console.log("test: " + l + " " + r)
  var m =l+ parseInt((r-l)/2);
  mergeSortVisual(arr,l,m);
  cells[l].style.backgroundColor = "yellow";
  mergeSortVisual(arr,m+1,r);
  merge(arr,l,m,r);
}

function merge(arr, l, m, r)
{
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
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
  
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
  
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}



// 6 14 5 9 7 26 8 24 18 14
// 6 b(14) 5 9 7 26 8 24 18 14
// key = 1, j = 0
// 