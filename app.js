
let selectionSortButton = document.querySelector('#selectionsort')
let inputs = document.querySelector('#inputs')
let input = 10;

selectionSortButton.addEventListener('click', selectionSort)

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
        console.log("test " + val1)
       // To store the integer value of smallest bar to var2 
      var val2 = parseInt(cells[smallest].innerHTML);
      console.log("test " + val2)


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
  console.log("test")

} 

