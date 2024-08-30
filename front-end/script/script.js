const passportInput = document.querySelector("#passport");

passportInput.addEventListener("input", (e) => {
    let value = e.target.value.toUpperCase();
    value = value.replace(/[^A-Z0-9]/g, '');

    if (value.length === 1) {
        value = value.replace(/[^A]/g, '');
    } else if (value.length === 2) {
        value = value[0] + value[1].replace(/[^A-D]g/, '')
    } else {
        value = value.substring(0,2) + value.substring(2).replace(/[^0-9]/g, '');
    }

    e.target.value = value;
});