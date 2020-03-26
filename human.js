let Human=function (name,gender,weight) {

    this.name=name;
    this.gender=true;
    this.weight=weight;
    this.sound=function () {
        alert("good aplle.i`ll eat it");

    }
    this.eatApple=function (apple) {
        if (apple.weight>0){
            apple.weight--;
        }
        this.weight++;
    }
    this.checkApple=function (apple) {
        return apple.weight;
    }
}