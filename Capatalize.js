//capatilize
function capatalize() {
    let i = document.getElementsByTagName("span");

    for( let s=0; s < i.length; s++) {
      let b = i[s].toUpperCase();
        document.getElementsByName(i[s]).innerHTML = b;
    }
} 


