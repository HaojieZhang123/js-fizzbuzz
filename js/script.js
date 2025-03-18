// creation of for cycle for 100 iterations
for (let i=0; i<100; i++) {
    // controllo se multiplo di 3
    if((i+1)%3 == 0){
        // controllo se multiplo di 5
        if((i+1)%5 == 0){
            console.log("Buzz");
            continue;
        }
        console.log("Fizz");
    }
    else {
        console.log(i+1);
    }
}