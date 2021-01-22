const readlineSync = require("readline-sync");


    let user = readlineSync.question( "Enter a new number: ");

   //console.log("Number is: " +n);

    let num = (Number(user));

    function fibonacci(){ 
        var a = 1, b = 0, temp;
         while (num > 0){ 
             temp = a; a = a + b; b = temp; num--; 
            } 
         return b; 
        }

    /*function fibonacci() {

        //let n = (Number(user));

        if (n === 1) {
            return 1;
        } else if (n === 0) {
            return 0;
        }
        else {
            return (n - 1) + (n - 2);
        }

       /* var n1 = 0;
        var n2 = 1;
        var sum = 0;

        for(let i = 2; i <= n; i++) {

            sum = n1 + n2;
            n1 = n2;
            n2 = sum;
        }
        return fibonacci(n) ? n2 : n1;*/
    //}

    console.log(fibonacci());


