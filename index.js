plus = document.querySelectorAll('.plus');
minus = document.querySelectorAll('.minus');
nums = document.querySelectorAll('.value');
mod = document.querySelectorAll('.mod');
difficulty = document.querySelectorAll('.difficulty');
let guesses = 0;
for (i = 0; i < plus.length; i++) {
  let a = i;
  plus[i].addEventListener('click', function() {
    if (nums[a].innerText == 9) {
      nums[a].innerText = 0;
    } else {
      nums[a].innerText++;
    }
  })
}

for (i = 0; i < minus.length; i++) {
  let a = i;
  minus[i].addEventListener('click', function() {
    if (nums[a].innerText == 0) {
      nums[a].innerText = 9;
    } else {
      nums[a].innerText--;
    }
  })
}

let randomNumbers = [];
for (i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 10));
}

function guess() {
  guesses++;
  correct = 0;
  nums = document.querySelectorAll('.value');
  document.querySelector('.difficulty').style.visibility = 'hidden';
  for (i = 0; i < nums.length; i++) {
    let a = i;
    if (nums[a].innerHTML == randomNumbers[a]) {
      correct++;
      if (difficulty[1].checked) {
        mod[a].innerHTML = '&#9989;';
      }
    } else {
      if (difficulty[1].checked) {
        mod[a].innerHTML = '&#10060;';
      }
    }
    if (difficulty[2].checked) {
      document.querySelector('.med-mod').innerHTML = `you got ${correct} digits right.`;

    }
    if (correct === 5) {
      alert(`You geussed it. It only took you ${guesses} guesses.`)
      location.reload();
    } else if (difficulty[3].checked) {
      document.querySelector('.med-mod').innerHTML = 'Wrong';
    }
  }
}
