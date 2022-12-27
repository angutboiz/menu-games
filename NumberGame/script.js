var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];
console.log(answer);
function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100){
        alert("Vui lòng nhập số từ 1 tới 100.");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;

        if(user_guess < answer){
            msg1.textContent = "Số bạn đoán quá nhỏ";
            msg2.textContent = "Số lần dự đoán: " + no_of_guesses;
            msg3.textContent = "Những số bạn đã dự đoán: " +
            guessed_nums;
        }
        else if(user_guess > answer){
            msg1.textContent = "Số bạn đoán quá lớn";
            msg2.textContent = "Số lần dự đoán: " + no_of_guesses;
            msg3.textContent = "Những số bạn đã dự đoán: " +
            guessed_nums;
        }
        else if(user_guess == answer){
            msg1.textContent = "You Win!!";
            msg1.style.color = "Red"
            msg2.textContent = "Kết quả là: " + answer;
            msg3.textContent = "Bạn đã đoán đúng trong "+ no_of_guesses + " lần";
            document.getElementById("my_btn").disabled = true;
        }
    }
}