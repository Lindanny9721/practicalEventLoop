let count = 0;
function increments(num) {
    try {
        num++
    } catch(e) {
        console.log(e);
    }
    increments(num);
}
increments(count); 

const flatten = (arr, a = []) => {
    if(arr.length === 0) return a;
    const [firstArr, ...otherArr] = arr;
    if(Array.isArray(firstArr)) 
    {
        return () => flatten([...firstArr, ...otherArr], a);
    }
    else {
        a.push(firstArr);
        return () => flatten(otherArr, a);
    }
}
const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
        result = result();
    }
    return result;
}
console.log(trampoline(flatten([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]])));
let primeList = document.getElementById("primeNumber");
function addPrime(n, end) {
    let isPrime = true;
    console.log("TEst");
    if(end > n) {
        alert("Done");
        return;
    }
    for ( let i = 2; i <= Math.sqrt(end); i++)
    {
        if(end % i === 0)
        {
            isPrime = false;
            break
        }
    }
    if(isPrime)
    {
        const primeNumber = document.createElement("div");
        primeNumber.innerHTML = end;
        primeList.appendChild(primeNumber);
    }
    setTimeout(() => addPrime(n, end+1), 50);
}
addPrime(10000, 2);