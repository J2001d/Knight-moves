// Inserting Knight
function insertKnight() {
  document.querySelectorAll('.box').forEach(image => {
      if (image.innerText.length !== 0) {
            image.innerHTML = `${image.innerText} <img class='allimg' src="knight.png" alt="">`
      }
  })
}
insertKnight()


// coloring the chess board
function coloring() {
  const color = document.querySelectorAll('.box')

  color.forEach(color => {

      // this will give the id
      getId = color.id
      ele = getId;
      // console.log(ele);
      arr = Array.from(getId);
      // taking the first and last ele of id and adding them to find which color is suitable for this block
      ele = eval(arr[0]) + eval(arr[2]);
      if (ele % 2 == 0) {
          color.style.backgroundColor = 'rgb(240, 201, 150)'
      }else{
          color.style.backgroundColor = 'rgb(100, 75, 43)'
      }
  })
}
coloring()

function check(ele){
  ans = "false";
  if(ele >= 101 && ele <= 108){
    ans = "true";
  }
  if(ele >= 201 && ele <= 208){
    ans = "true";
  }
  if(ele >= 301 && ele <= 308){
    ans = "true";
  }
  if(ele >= 401 && ele <= 408){
    ans = "true";
  }
  if(ele >= 501 && ele <= 508){
    ans = "true";
  }
  if(ele >= 601 && ele <= 608){
    ans = "true";
  }
  if(ele >= 701 && ele <= 708){
    ans = "true";
  }
  if(ele >= 801 && ele <= 808){
    ans = "true";
  }
  return ans;
}
var times = 1;
document.querySelectorAll('.box').forEach(ele => {
ele.addEventListener('click', function () {
  if(times === 1){
    ele.innerText = 'knight';
    insertKnight();
  }
  times++;
})  
})

document.querySelectorAll('.box').forEach(item => {
  item.addEventListener('click', function () {
      if (item.innerText == `knight`) {
      getId = eval(item.id)

      // lower 4 moves
      if(check(getId - 100 + 2) === "true")
        document.getElementById(getId - 100 + 2).style.backgroundColor = 'green'
      if(check(getId - 200 + 1) === "true")
        document.getElementById(getId - 200 + 1).style.backgroundColor = 'green'
      if(check(getId - 200 - 1) === "true")
        document.getElementById(getId - 200 - 1).style.backgroundColor = 'green'
      if(check(getId - 100 - 2) === "true")
        document.getElementById(getId - 100 - 2).style.backgroundColor = 'green'
         
      // upper 4 moves
      // console.log(getId);
      // console.log(getId - 100 + 2);
      // console.log(check(getId + 100 -2));

      if(check(getId + 100 - 2) === "true")
        document.getElementById(getId + 100 - 2).style.backgroundColor = 'green'
      if(check(getId + 200 - 1) === "true")
        document.getElementById(getId + 200 - 1).style.backgroundColor = 'green'
      if(check(getId + 200 + 1) === "true")
        document.getElementById(getId + 200 + 1).style.backgroundColor = 'green'
      if(check(getId + 100 + 2) === "true")
        document.getElementById(getId + 100 + 2).style.backgroundColor = 'green'
  }
})
})


// Moving the element
document.querySelectorAll('.box').forEach(placing => {
  placing.addEventListener('click', function () {
      if (placing.style.backgroundColor == 'green') {
          eleText = placing.innerText
          if(placing.innerText.length == 0){
            document.querySelectorAll('.box').forEach(item =>{
              item.innerText = '';
            })
            placing.innerText = 'knight';
            coloring();
            insertKnight();
          }
      }
  })
})
