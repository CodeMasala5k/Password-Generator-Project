let input = document.querySelectorAll('input')
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "1234567890"
    let symbols = "~!@#$%^&*()_?;:"
    let click = false
    input[0].addEventListener('click', function(){
        click = true
        suggest()
    })
    function suggest(){
        input[1].classList.toggle('active')
        input[1].value ="Use suggested password - " + upper.charAt((Math.random()*22)) + lower.charAt((Math.random()*22)) + lower.charAt((Math.random()*22))
        +lower.charAt((Math.random()*22)) + numbers.charAt((Math.random()*10)) + numbers.charAt((Math.random()*10))
        + numbers.charAt((Math.random()*10)) + symbols.charAt((Math.random()*14))
    }
    input[1].onclick =  function(){
        input[0].value = input[1].value.replace("Use suggested password - ", "");
    }
