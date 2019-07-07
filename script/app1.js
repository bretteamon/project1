document.getElementById("button1").addEventListener("click", ex1);
document.getElementById("button2").addEventListener("click", getMiddle);
document.getElementById("button3").addEventListener("click", Expanded);
/*#region---------------Function1----------------*/
    // function ex1() {
    //     var a = Number(document.getElementById("a").value);
    //     var b = Number(document.getElementById("b").value);
    //     var operator = document.getElementById("operator").value.toLowerCase();
        
    //         switch(operator){
    //             case "add":
    //                 var answer1 = a + b;
    //                 document.getElementById("answer").innerHTML = answer1;
                    
    //             break;

    //             case "subtract":
    //                     var answer1 = a - b;
    //                     document.getElementById("answer").innerHTML = answer1;
    //             break;

    //             case "multiply":
    //                     var answer1 = a * b;
    //                     document.getElementById("answer").innerHTML = answer1;
    //             break;

    //             case "divide":
    //                     var answer1 = a / b;
    //                     document.getElementById("answer").innerHTML = answer1;
    //             break;

    //             default:
    //                     document.getElementById("answer").innerHTML = "Please choose a valid operator."
    //         }
    // };
    function ex1(){
        var a = Number(document.getElementById("a").value);
        var b = Number(document.getElementById("b").value);
        var operator = document.getElementById("operator").value.toLowerCase();
        var operators ={
            'add': function (a,b) {return a + b;},
            'subtract': function (a,b) {return a - b;},
            'multiply': function (a,b) {return a*b;},
            'divide': function (a,b) {return a/b;}   
            }
        document.getElementById("answer").innerHTML = operators[operator](a,b);
    };
/*#endregion-----------------------------------*/
/*#region---------------Function2----------------*/
function getMiddle() {
    var str = document.getElementById("word").value;
    var position;
    var length;

    if(str.length % 2 == 1) {
        position = str.length / 2;
        length == 1;
    } else {
        position = str.length / 2 - 1;
        length == 2;
    }

    result = str.substring(position, position + length)
    document.getElementById("answer2").innerHTML = result;
};


/*#endregion--------------------*/
/*#region---------------Function3----------------*/
    function Expanded(){
        var num = document.getElementById("num").value.split(".");
        result = num[0].toString().split("").map((n,i,a) => n*Math.pow(10, a.length-i-1)).filter(n => n>0).join(" + ");
        result1 = num[1].toString().split("").map((n,i) => n+"/"+Math.pow(10, i+1)).join(" + ");
        document.getElementById("answer3").innerHTML = result +" + "+ result1;
    };
/*#endregion------------------------*/
/*#region-------------------------*/
let isMatching = (str) => {
    let stack = [];
    let open = {
        '{' :'}',
        '[' :']',
        '(' :')'
        };
    let closed = {
        '}': true,
        ']':true,
        ')':true

    }    
    for (let i =0; i<str.length; i++){
    
        let char = str[i];
        if (open[char]){
            stack.push(char);
            console.log(char);
            // console.log("Open" + stack.map);
        } else if (closed[char]) {
            // console.log("Close" + stack.map);
            if (open[stack.pop()] !== char) return false;
            }
        }
        return stack.length === 0;
    }

// isMatching("({{}})()()(){}{}");
// array.forEach(element => {
    
// });

// function isMatching2([...str]) {
//     return str.reduce((uptoPrevChar, thisChar) => {
//         ((thisChar === '(' && uptoPrevChar++ || thisChar===')' && uptoPrevChar--)) && ((thisChar === '{' && uptoPrevChar++ || thisChar==='}' && uptoPrevChar--)) && ((thisChar === '[' && uptoPrevChar++ || thisChar===']' && uptoPrevChar--));
//         return uptoPrevChar;
//     }, 0) === 0
// }
// isMatching2('{}{}{{}}}{}{');

/*#endregion----------*/