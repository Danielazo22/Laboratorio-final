
document.addEventListener("submit", registrarcita)


function registrarcita(event) {
    event.preventDefault()

    const NumeroDPaciente = document.getElementById("NumeroDPaciente").value
    const Especialidadcita = document.getElementById("EspecialidadRequerida")


    var expRegCedulaCitapaciente = /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/;
    var Cedulavalida = expRegCedulaCitapaciente.test(NumeroDPaciente);


    if (!Cedulavalida) {
        alert("La cédula no es valida  ")
    } else {

        alert("La cédula es valida  ")
    }

    console.log(NumeroDPaciente)
    console.log(Especialidadcita)

   return
}