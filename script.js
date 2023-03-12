const pxInput = document.querySelector('#px');

const remInput = document.querySelector("#rem");

const copy = document.querySelector("#copy_btn");

pxInput.addEventListener(
    "keydown",
    function(e) {
        if (e.key == "Enter") {
            if(pxInput.value !== ""){
                convert();
            }
        }
    }
)

function convert(){
    pxvalue = pxInput.value;
    pxvalue = pxvalue * 0.0625;
    console.log(pxvalue);
    remInput.value = pxvalue;
}

function copy_text(){
    navigator.clipboard.writeText(remInput.value);
}