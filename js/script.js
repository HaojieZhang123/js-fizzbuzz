// creation of for cycle for 100 iterations
for (let i=0; i<100; i++) {
    // controllo se multiplo di 3
    if((i+1)%3 == 0){
        // controllo se multiplo di 5
        if((i+1)%5 == 0){
            console.log("FizzBuzz");
            continue;
        }
        console.log("Fizz");
    }
    else if((i+1)%5 == 0){
    // controllo se multiplo di 5
        console.log("Buzz");
        continue;
    }
    else {
        console.log(i+1);
    }
}