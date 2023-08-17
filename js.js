var number;


var generate_number=()=>{
    let n1 = Math.random();
    n1=n1*10;
    n1=Math.trunc(n1);
    n1=n1%6 +1;
    number=n1;
    console.log(n1);
}
// setInterval(generate_number,1000);
// generate_number();
console.log(number);
const generate_random_number=()=>{
    generate_number();
    document.querySelector("#section1").style.display='none';
    document.querySelector("#section2").style.display='none';
    document.querySelector("#section3").style.display='block';
   
    setTimeout( ()=>{
        document.getElementById("input-field").value='';
        document.querySelector("#section1").style.display='none';
    document.querySelector("#section2").style.display='block';
    document.querySelector("#section3").style.display='none'; },3000);
}

var check_number=()=>{
    var value=document.getElementById("input-field").value;
    console.log(value);
    document.querySelector("#section1").style.display='none';
    document.querySelector("#section2").style.display='none';
    document.querySelector("#section3").style.display='none';
    if(value==number){
        document.querySelector("#section4").style.display='block';
        var results=document.getElementById("results");
        // console.log("You Won The Game");
        results.innerHTML="You Won The Game";
        results.style.color='green';
    }else{
        document.querySelector("#section4").style.display='block';
        var results=document.getElementById("results");
        // console.log("You Won The Game");
        results.innerHTML="Better luck Next Time ";
        results.style.color='red';
    }
    setTimeout(()=>{
        document.querySelector("#section4").style.display='none';
        generate_random_number();
    },2000)
   
}




