var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var ans = document.getElementById('ans');
var form = document.getElementById('calc');

form.addEventListener('submit', function(event) {
    if (!num1.value || !num2.value) {
        alert('Insert Values')
    }
    else{
        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);
        
        var result = (x / y) * 100;
        ans.innerText = 'Answer:' + result + '%';
        event.preventDefault();
    }
});