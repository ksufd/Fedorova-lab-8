add = () => 
    {
        a = document.querySelector(".fields").cloneNode(true);
        b = document.querySelector("#actions");
        b.appendChild(a);
    };
    save = (out) => 
    {
        out = document.querySelector("#" + out);
        c = document.querySelectorAll(".input1");
        b = document.querySelectorAll(".input2");
        a = [];
        for (var i = 1; i < c.length; i++) {
            a.push(c[i].value + " : " + b[i].value)
        }
        console.log(JSON.stringify(a));
        a = JSON.stringify(a);
        a = '{' + a.slice(1, a.length - 1) + '}';
        out.innerHTML = a;
    };
    up = (me) => 
    {
        a = me.parentElement.previousElementSibling;
        if (a) me.parentElement.after(a);
    };
    down = (me) => 
    {
        a = me.parentElement.nextElementSibling;
        if (a) me.parentElement.before(a);
    };
    remove = (arg1) => 
    {
        arg1.parentElement.remove()
    };
add();