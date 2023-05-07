function checkPass()
{
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var message = document.getElementById('pw1_check');
    var message = document.getElementById('pw2_check');

    var goodColor = "#";
    var badColor = "#";


    if(pass1.value.length > 5)
    {
        pass1.style.backgroundColor = goodColor;
        message.style.color =" red";
        message.innerHTML = "character number ok!"
        submitBtn.style.display="none";
    }

    else
    {
        pass1.style.backgroundColor = badColor;
        message.style.color = 'red';
        message.innerHTML = " Too Short!"
        return;

    }

    if(pass1.value == pass2.value)
    {
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "ok!"
        submitBtn.style.display="block";
    }
    else
    {
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " The Two passwords don't match"
        submitBtn.style.display="none";
    }
}