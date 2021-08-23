let inputF = document.getElementById("color");
let ubahWarna = document.getElementById("ubahWarna");
let badi = document.getElementById("body");
let from = document.getElementById("from");
let to = document.getElementById("to");
let nilaiAwal = document.getElementById("nilaiAwal");
let nilaiAkhir = document.getElementById("nilaiAkhir");

function changeBG(){
    badi.setAttribute("style","text-align:center; background-color:"+inputF.value);
}

function changeNilai(){
    //cel
    if(from.value == "cel" && to.value == "cel"){
        nilaiAkhir.value=nilaiAwal.value;
    }
    else if(from.value == "cel" && to.value == "rea"){
        nilaiAkhir.value=(4/5)*parseInt(nilaiAwal.value);
    }
    else if(from.value == "cel" && to.value == "far"){
        nilaiAkhir.value=(9/5)*parseInt(nilaiAwal.value);
    }
    //rea
    else if(from.value == "rea" && to.value == "cel"){
        nilaiAkhir.value=(5/4)*parseInt(nilaiAwal.value);
    }
    else if(from.value == "rea" && to.value == "rea"){
        nilaiAkhir.value=nilaiAwal.value;
    }
    else if(from.value == "rea" && to.value == "far"){
        nilaiAkhir.value=(9/4)*parseInt(nilaiAwal.value);
    }
    //far
    else if(from.value == "far" && to.value == "cel"){
        nilaiAkhir.value=(5/9)*parseInt(nilaiAwal.value);
    }
    else if(from.value == "far" && to.value == "rea"){
        nilaiAkhir.value=(4/9)*parseInt(nilaiAwal.value);
    }
    else if(from.value == "far" && to.value == "far"){
        nilaiAkhir.value=nilaiAwal.value;
    }
}

ubahWarna.addEventListener("click",changeBG);
nilaiAwal.addEventListener("keyup",changeNilai);