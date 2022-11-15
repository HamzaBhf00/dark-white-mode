window.addEventListener("load", function () {

    const form = document.querySelector("#form")
    const email = document.querySelector("#email");
    /*Inicio de Dark-White mode*/
    const toggle = document.getElementById('toggleDark');
    const body = document.querySelector('body');

    toggle.addEventListener('click', function () {
        this.classList.toggle('bi-moon');
        if (this.classList.toggle('bi-brightness-high-fill')) {
            body.style.background = 'white';
            body.style.color = 'black';
            body.style.transition = '2s';
        } else {
            body.style.background = 'black';
            body.style.color = 'white';
            body.style.transition = '2s';
        }
    });
    /*Fin de Dark-White mode*/

    form.addEventListener("submit", function (evento) {

        evento.preventDefault();
        evento.stopPropagation();

        valido = true;

        if (!emailValido(email)) {
            valido = false;
        }

        if (valido) {
            form.submit();
        }

    });

    function emailValido(e) {
        if (e.value === "") {
            marcaError(e, "Debe rellenar")
        } else if (!regDNI.test(e.value)) {
            marcaError(e, "No es valido")
        } else {
            marcaValido(e)
        }
    }

    //Functions
    function marcaError(input, mensaje) {
        input.parentNode.querySelector(".error-feedback").textContent = mensaje;
        input.parentNode.classList.add("error");
    }

    function marcaValido(input) {
        input.parentNode.querySelector(".error-feedback").textContent = "";
        input.parentNode.classList.remove("error");
    }

    function regEmail(input) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
    }
    //Fin de Functions
});
