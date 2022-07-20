for (var i = 0; i < 3; i++) {
    (function closure(i){
        setTimeout(function log() {
            console.log(i);
        }, 1000)
    })(i)
}