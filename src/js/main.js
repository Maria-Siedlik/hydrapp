const addBtn = document.querySelector('.add-js');
const removeBtn = document.querySelector('.remove-js');
const glasHolder = document.querySelector('.counter');
let counter;
//
const key = new Date().toISOString().slice(0, 10);
//localStorage.setItem(key, counter);

if (!localStorage.getItem(key)) {
   localStorage.setItem(key, 0);
   counter = 0;
} else {
   counter = parseInt(localStorage.getItem(key));
}
glasHolder.innerHTML = counter;
addBtn.addEventListener('click', function() {
   counter = parseInt(localStorage.getItem(key));
   counter += 1;
   glasHolder.innerHTML = counter;
   localStorage.setItem(key, counter);
});

removeBtn.addEventListener('click', function() {
   counter = parseInt(localStorage.getItem(key));
   counter -= 1;
   if (counter <= 0) {
      counter = 0;
   }
   glasHolder.innerHTML = counter;
   localStorage.setItem(key, counter);
});
