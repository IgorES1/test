document.addEventListener('keypress', function (event) {
    if (event.code === 'Enter') {
      myFunction();
    }
  });
  function myFunction() {
    var x = document.getElementById("numb").value;
    var li = document.createElement("LI");
    li.innerHTML = x;
    if(x.length > 3) {
      li.style.color = 'green';
    }
    var pattern=/[0-9a-z]+/i;
    var test = pattern.test(x);
    if(!test) {
      li.classList.add('red');
    }
    document.getElementById("list").appendChild(li);
    document.getElementById("numb").value = '';
  }