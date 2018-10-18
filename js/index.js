//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var element = document.createElement('div');
element.innerHTML = 'Hello, DOM!';
element.style.background = '#f9f9f9';
document.body.appendChild(element);

var ul = document.createElement('ul');
for(var i = 0; i < 5; i++){
  var li = document.createElement('li');
  li.innerHTML = i + 1;
  ul.appendChild(li);
}

element.appendChild(ul);

//randomly remove a random li from the ul node
var lis = ul.querySelectorAll('li');
lis[Math.floor(Math.random()* lis.length)].remove();
