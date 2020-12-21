function hello(value){
    let p = document.createElement("p")
    p.innerHTML = "Bonjour ";
    for (let i of value) {
        p.innerHTML += i +", ";
    }
    document.body.append(p);
}
hello(["thomas", "matthias", "Héloise"]);
hello(["roger", "hubert", "louise", "thibaul", "nathalie"]);

function addition(value){
    let div = document.createElement("div")
    let result = 0;
    for (let i of value) {
        if (!isNaN(i)) result = result + i;
    }
    div.innerHTML = result;
    document.body.append(div);
}
addition([48, 31, 21, 13, 12, 5])
addition([5, 7, 9, 15, 25 , 64])
addition([7, 9, 3, 2])

function addAndmult(value){
    let div = document.createElement("div")
    let result = 0;
    for (let i of value) {
        if (!isNaN(i)) result = result + i;
    }
    div.innerHTML = Math.trunc(result * 11.76);
    document.body.append(div);
}
addAndmult([48, 31, 21, 13, 12, 5])
addAndmult([5, 7, 9, 15, 25 , 64])
addAndmult([7, 9, 3, 2])