var inputpass = document.getElementById("ip-password");
var outputpass = document.getElementById("op-password");
var submit = document.getElementById("submit");

submit.addEventListener("click", getPass);

function getPass(){
    var result = " ";
    result = inputpass.value;
    if(result.length <= 9){
        
        outputpass.innerHTML = "input must be greater than 10";
        
    }
    // else if(result.length < 10){
    //     outputpass.innerHTML = "input must be greater than 10";

    // }
    else{
        var length = Math.ceil(result.length/2); 
        var lowhalf = result.substring(0,length);
        var first = lowhalf.split("");
        console.log(first);
        var highhalf = result.substring(length,length*2);
        var second = highhalf.split("");
        console.log(second);

        encodeFirst(first);
        console.log(first);
        firstRead= first.join("")
        console.log(firstRead);

        encodeSecond(second);
        console.log(second);
        secondRead= second.join("")
        console.log(secondRead);

        var password = firstRead.concat(secondRead);

        outputpass.innerHTML = password;
        
    }
    
    
}

function encodeFirst(first){
    for(var i = 0; i<first.length; i++){
            j=i+1;
            
            if(first[i] <= first[j]){
                var temp = " ";
                temp = first[i];
                first[i] = first[j];
                first[j] = temp;
                first[i] = first[i].toUpperCase();
                var k = 0;
                k = j+1;
                first[k] = (first[k].codePointAt(first[k]))+1000  ;
            }
        }
                
        
    console.log(first);
    return first;
    }

function encodeSecond(second){
    var extend = Math.floor((Math.random()*1000)+100);
    second = second.reverse();
    second.push(extend);
    second[0] = second[0].toUpperCase(second[0]);
    console.log(second);
    return second;
  
}