function verPassword() {
    let texto = document.getElementById("password");

    
    if (texto.type === "password") {
        texto.type = "text";
    } else {
        texto.type = "password";
    }
}
