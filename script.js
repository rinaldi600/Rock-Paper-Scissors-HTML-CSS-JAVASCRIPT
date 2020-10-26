const gunting = document.querySelector(".gunting");
gunting.addEventListener("click" , function () {
    gunting.classList.toggle("border");
    const acak = Math.random();
    const gunting_player = "GUNTING";
    const batu_player = "BATU";
    const kertas_player = "KERTAS";
    //GUNTING
    if (acak <= 0.33) {
        const computer = document.querySelector(".computer");
        computer.style.backgroundImage = "url('d8kd3zz-8c277e76-09dd-4a49-b7c5-f1b42bb1ca5a.jpg')";
        computer.style.backgroundPosition = "center";
        computer.style.backgroundSize = "cover";
        const acak = "GUNTING";
        console.log(acak);
        if (gunting_player == acak) {
            alert("HASIL SERI MELAWAN GUNTING")
        }
    }
    // BATU
    else if (acak >= 0.33 && acak <= 0.67) {
        const computer = document.querySelector(".computer");
        computer.style.backgroundImage = "url('11-110703_vector-rock-png-circle.png')";
        computer.style.backgroundPosition = "center";
        computer.style.backgroundSize = "cover";
        const acak = "BATU";
        console.log(acak);
        if(gunting_player != batu_player) {
            alert("ANDA KALAH MELAWAN BATU")
        }
    }
    // KERTAS
    else {
        const computer = document.querySelector(".computer");
        computer.style.backgroundImage = "url('blank-paper-brochure-template-mockup-vector_53876-90336.jpg')";
        computer.style.backgroundPosition = "center";
        computer.style.backgroundSize = "cover";
        const acak = "KERTAS";
        console.log(acak)
        if(gunting_player != kertas_player) {
            alert("ANDA MENANG MELAWAN KERTAS")
        }
    }
});


const batu = document.querySelector(".batu");
batu.addEventListener("click" , function () {
    batu.classList.toggle("border");
    const acak = Math.random();
    const gunting_player = "GUNTING";
    const batu_player = "BATU";
    const kertas_player = "KERTAS";
    // GUNTING
    if (acak <= 0.33) {
        const computer = document.querySelector(".computer");
        computer.style.backgroundImage = "url('d8kd3zz-8c277e76-09dd-4a49-b7c5-f1b42bb1ca5a.jpg')";
        computer.style.backgroundPosition = "center";
        computer.style.backgroundSize = "cover";
        const acak = "GUNTING";
        console.log(acak);
        if (batu_player != gunting_player) {
            alert("ANDA MENANG MELAWAN GUNTING")
        }
    }
    // BATU
    else if (acak >= 0.33 && acak <= 0.67) {
        const computer = document.querySelector(".computer");
        computer.style.backgroundImage = "url('11-110703_vector-rock-png-circle.png')";
        computer.style.backgroundPosition = "center";
        computer.style.backgroundSize = "cover";
        const acak = "BATU";
        console.log(acak);
        if (batu_player == batu_player) {
            alert("ANDA SERI MELAWAN BATU")
        }
    }
    // KERTAS
    else {
        const computer = document.querySelector(".computer");
        computer.style.backgroundImage = "url('blank-paper-brochure-template-mockup-vector_53876-90336.jpg')";
        computer.style.backgroundPosition = "center";
        computer.style.backgroundSize = "cover";
        const acak = "KERTAS";
        console.log(acak);
        if(batu_player != kertas_player) {
            alert("ANDA KALAH MELAWAN KERTAS")
        }
    }
});

const kertas = document.querySelector(".kertas");
kertas.addEventListener("click" , function () {
    kertas.classList.toggle("border");
    const acak = Math.random();
    const gunting_player = "GUNTING";
    const batu_player = "BATU";
    const kertas_player = "KERTAS";
    // GUNTING
    if (acak <= 0.33) {
        const computer = document.querySelector(".computer");
        computer.style.backgroundImage = "url('d8kd3zz-8c277e76-09dd-4a49-b7c5-f1b42bb1ca5a.jpg')";
        computer.style.backgroundPosition = "center";
        computer.style.backgroundSize = "cover";
        const acak = "GUNTING";
        console.log(acak);
        if (kertas_player != gunting_player) {
            alert("ANDA KALAH MELAWAN GUNTING");
        }
    }
    // BATU
    else if (acak >= 0.33 && acak <= 0.67) {
        const computer = document.querySelector(".computer");
        computer.style.backgroundImage = "url('11-110703_vector-rock-png-circle.png')";
        computer.style.backgroundPosition = "center";
        computer.style.backgroundSize = "cover";
        const acak = "BATU";
        console.log(acak);
        if (kertas_player != batu_player) {
            alert("ANDA MENANG MELAWAN BATU")
        }
    }
    // KERTAS
    else {
        const computer = document.querySelector(".computer");
        computer.style.backgroundImage = "url('blank-paper-brochure-template-mockup-vector_53876-90336.jpg')";
        computer.style.backgroundPosition = "center";
        computer.style.backgroundSize = "cover";
        const acak = "KERTAS";
        console.log(acak);
        if (kertas_player == kertas_player) {
            alert("ANDA SERI MELAWAN KERTAS")
        }
    }
});