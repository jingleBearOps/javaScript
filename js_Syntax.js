console.log('hello world');//
var number=5;//declare a variable
/*multi line
comments*/
number=9;
/////////////////////////Data Types////////////////////////////
//undefined, nul., boolean, stringm symbol, number, object!!!//
///////////////////////////////////////////////////////////////
 var myName="JIn";//var can be used in the whole program
 myName="Jing";
 let ourNmae='someThing else';// let only in small scolpe
 const pi=3.14//canst should never be changded 
 var a;
 var b=2;
 a=7;
 b=a;
 console.log(a)


 var a=5;
 var b=10;
 var c="i am a";
 c=c+"String!"//i am a String

 // javascipt Case Sensitive
 a++
 b--

 var ourDecimal=5.7;

 var reMainder =11%3 //2



 var firstName="Alan";
 var lastName="Turing"

 var myFirstName="Jingzhuo"
 var myLastName="Tian"

 var myStr="I am a"double quoted"String inside" double quotes"";
 var myStr="I am a\"double quoted\"String inside\" double quotes\"";

 var backTicks=`Now both " and ' can be used in this string`
 // \n newline      \r carriage return   \t tab    \b backspace     \f form feed
 var mySt=`FirstLine\n\t\SecondLine\nThirdLine`

 var ourStr="This is the start "+" This is the end"

 var ourName="Jingzhuo"
 var myStr="My name is "+ ourName//My name is Jingzhuo
 nameLength=ourName.length;//8

 ourName[0]//J
 ourName[ourName.length-1]//o

 function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
     var result='';
     result+="The"+myAdjective+" "+myNoun+ "to the store"+myVerb+myAdverb
     return result;
 }
 console.log(wordBlanks('dog','big','ran','quickly'));

 var ourArray=["John",23];
 var myArray=["Quincy",1];

 var myArray=[["the universe",42],["everything",101010]];
 var myArray=[50,60,70]
 myArray[1]//60

 var myArray=[[3[9,8,7]],[5],[6]];
 var myData=myArray[0][1][0]

 var ourArray=["Jin",;'Jing',"cat"];
 ourArray.push(["happy","joys"]);

 var removeArray=ourArray.pop();//["happy","joys"]
 var removeArray=ourArray.shfit();//"Jin"

 var wtArray=["Stimpson","j","cat"];
 wtArray.shift();
 wtArray.unshift("Happy")
 //wtArray=["Happy","j","cat"]------unshift=push to the front

 var myList=[["cereal",3],["mild",2],["banana",3],["juice",2],["eggs",12]];


 function ourReusableFunction(){
     console.log("Heyya, World");
 }
 ourReusableFunction();

 function resuableFunction(){
        console.log("Hi World");
 }
 resuableFunction

 function ourFunctionWithArgs(a,b){
    console.log(a-b);
}
ourFunctionWithArgs(10,5);

function functionWithArgs(a,b){
    console.log(a+b);
}
functionWithArgs(10,5);



var myGlobal=10;
function fun1(){
    oopsGlobal=5;//No var, Its Global!!!!!
}

function fun2(){
    var output="";
    if (typeof myGlobal != "undefined"){
        output+="myGlobal "+myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output+=" oopsGlobal:  "+myGlobal;
    }
    console.log(output);

}
func1();
func2();//myGlobal: 10
        //oopsGlobal:  5


function myLocalScope(){
    var myVar=5
    console.log(myVar);
}
myLocalScope();
console.log(myVar);//error can not outside of declared function
 

var outerWear="T-Shirt";
function myOutfit(){
    var outerWear="sweater";
    return outerWear;
}
console.log(myOutfit());//sweater
console.log(outerWear);//T-Shirt


function minusSeven(num){
    return num-7;
    
    
}
console.log(minusSeven(10));
function timesFive(num){
    return num*5;
}
console.log(timesFive(5));//25


var sum=0;
function addThree(){
    sum=sum+3;
}

function addFive(){
    sum=sum+5;
}


function change(num){
    return (num+5)/3;
}
changed=change(10);

var processed=0;
function processArg(num){
    return(num+3)/5;
}

processed=processArg(7);//2






//=====================================!!============
function nextInLine(arr,item){
    arr.push(item);
    return item.shift();
}

var testArr=[1,2,3,4,5];
//JSON.stringify(***)    change array to string
console.log("Before: "+JSON.stringify(testArr))//[1,2,3,4,5];
console.log(nextInLine(testArr,6));
console.log("After:  "+JSON.stringify(testArr));//[2,3,4,5,6];

///////////////////////BOOLEAN\\\\\\\\\\\\\\\\\
function welcomeToBooleans(){
    return true;
}


//////////////////IF /////////////////
function ourTrueOrFalse(isItTrue){
    if(isItTrue){
        return "Yes,Its True";
    }
    return "No, Its false";
}
function trueOrFalse(wasThatTrue){
    if(wasThatTrue){
        return "Yes, That was True"
    }
    return "No, that was Flase"
}
console.log(trueOrFalse(tres));//"Yes, That was True"

/////////////////COmaparing////
function testEqual(val){
    if(var==12){
        return"Equal";
    }
    return "Not Equal";

}
console.log(testEqual(10));//Not Equal

3===3//true
3==="3"//false
3==3//true
3=="3"//true

function compareEquality(a,b){
    if(a==b){
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality("10",10))//Not Equal



function testLogicalAnd(var){
    if(val<=50 && >=25){
        return "yes";
    }
    return "No";
}


function testLogicalor(val){
    if(val<10|| val>20){
        return "Outside";
    }
    return "Inside"
}

function testElse(bal){
    if(bal>5){
        result="Bigger than 5";
    }
    else{
        result="5 or Smaller";
    }
    return result:
}


function testElseIf(val){
    if(val>10){
        return "Greater than 10";
    }
    else if(val<5){
        return "Smaller than 5";
    }
    else{
        return "Between 5 and 10";
    }
    
}
testElseIf(7);//Between 5 and 10

function testSize(num){
    if(num<5){
        return "Tine"
    }
    else if(num<10){
        return "Small"
    }
    else if(num<15){
        return "Medium"
    }
    else if(num<20){
        return "Large"
    }
    else {
        return "Huge"
    }
}
comsole.log(testSize(7));


//////////////Switch///////
function caseInSwitch(val){
    var answer=" ";
    switch(val){
        case 1:
            answer="alpha";            //////if val==1
            break;/////if there is no break, it will run thru the next statement

        case 2:
            answer="beta";            //////if val==2
            break;/////if there is no break, it will run thru the next statement
        
        case 3:
            answer="gamma";            //////if val==3
            break;/////if there is no break, it will run thru the next statement

        case 4:
            answer="delta";            //////if val==4
            break;/////if there is no break, it will run thru the next statement
        default:
            answer="stuff";
            break 

    }
    return answer;
}
console.log(caseInSwitch(1));//alpha
console.log(caseInSwitch(3));//gamma
console.log(caseInSwitch(6));//gamma




function sequentialSize(val){
    var answer="";
    switch(val){
        case 1:
        case 2:
        case 3:
        case 4:
            answer ='low';
            break;
        case 4:
        case 5:
        case 6:
            answer="mid";
            break;
    }
    return answer
}

function abTest(a,b){
    if (a<0||b<0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));
}
console.log(abTest(-2,2));


var count=0
function cc(card){//cards counting
switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count++;
        break;
    case  10:
    case 'J':
    case "Q":
    case 'K':
    case 'A':
        count--;
        break;
}
    var holdbet="Hold"
    if (count>0){
        holdbet='Bet'
    }
    return count+" "+holdbet;
}
cc(2);cc(3);cc(7);cc("K");cc("A");
console.log(cc(4))





var ourDog={
    "name":"Camper",
    "legs":4,
    "tails":1,
    "friends":["everything!"]
};
var myDog={
    "name":"Quincy",
    "legs":3,
    "tails":2,
    "friends":[]
};

var testObj={
    "hat":"ballcap",
    "shirt":"jersey",
    "shoes":"cleats"
};
var hatValue=testObj.hat;//ballcap
var shirtValue=testObj.shirt;//jersey
var shoesValue=testObj["shoes"];//cleats

var testObj={
    12:"Namath",
    16:"Montana",
    19:"Unitas"
};
var PlayerNumber=16;
var player=testObj[PlayerNumber];//Montana




var myDog={
    "name":"Quincy",
    "legs":3,
    "tails":2,
    "friends":[]
};

myDog.bark="bow-wow";//new property is added
delete myDog.bark;
//bark property is deleted






var myObj={
    gift:"pony",
    pet:"kitten",
    bed:"sleigh"
};
function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp));//hasOwnProperty()is a method to check whether contains the property
        return myObj[checkProp]//return the value of the property
    else{
        return "Not Found!";
    }
    
}
console.log(checkObj("gift"));


var myMusic=[
{
    "artist":"Billy Joel",
    "title":"Piano Man",
    "release_year":1973,
    "formats":["CD","8T","LP"],
    "gold": true
},
{
"artist":"Beau Carnes",
"title":"Cereal Man",
"release_year":2003,
"formats":["YouTube video"]
}

];


////////////Accessing Nested Object////////////////
var myStorage={
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger seat":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};
var gloveBoxContents=myStorage.car.inside["glove box"];
console.log(gloveBoxContents);//maps
//////////Accessing Nested Array/////////////////
var myPlants=[
    {
        type:"flowers",
        list:[
            "rose",
            "tulip"
            "dandelion"
        ]
    },
    {
        type:"trees",
        list:[
            "fir",
            "pine",
            "birch"
        ]
    }
]
var secondTree=myPlants[1].list[1];//pine

//////////////Record Collection////////////////////
var collection={
    "2548":{
        "album":"Slippery When Wet",
        "artist":"Bon Jovi",
        "tracks":[
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468":{
        "album":"1999",
        "artist":"Prince",
        "tracks":[
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245":{
        "artist":"Robert Palmer",
        "tracks":[
        ]
    },
    "5439":{
        "artist":"ABBA Gold",
        "tracks":[
        ]
    }
};
var collectionCopy=JSON.parse(JSON,stringify(collection));//JAVAscript way to make a copy of a object
function updateRecord(id,prop,value){
    if ( value ===""){
        delete collection[id][prop];
    }
    else if(prop ==="tracks"){
        collection[id][prop]=collection[id[prop]]||[];//if it exists access it other wise create a new one
        collection[id][prop].push(value);
    }
    else{
        coleection[id][prop]=value;
    };
    return collection;

}
updateRecord(2468,"tracks","test")
console.log(updateRecord(5439,"artist","ABBA"));

////////////While Loop//////////////////////////////
var myArray=[];
var i=0;
while(i < 5){
    myArray.push(i);
    i++;

}
console.log(myArray);
////////////For Loop////////////
var ourArray=[];
for (var i =0;i<5;i++){
    ourArray.push(i);
}
var myArray=[];


for (var i=1;i<6;i++){
    myArray.push(i);
}
console.log(myArray);


var ourArr=[9,10,11,12];
var ourTotal=0;
for(var i =0;i<ourArray.length;i++){
    ourTotal+=ourArray[i];
}
console.log(ourTotal);


function multiplyAll(arr){
    var product=1;
    for (var i=0;i<arr.length;i++){
        for (var j=0; j<arr[0];j++);
        product*=arr[i][j]
    }
    return product;
}
var product=multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);
/////////////////////////////////////////////////////
var myArray=[];
var i= 10;
while(i<5){
    myArray.push(i);
    i++;
}
console.log(i,myArray);//10,[]
//|||||||||||||||||||||||||\\
var myArray=[];
var i= 10;
do {
    myArray.push(i);
    i++;
}while(i<5)
console.log(i,myArray);//11,[10]


///////////Profile Loopup///
var contact=[
    {
        "firstName:":"Akira",
        "lasyName":"Laine",
        "number":"05302938",
        "likes":["Pizza","Coding","Brownie Points"]
    },
    {
        "firstName:":"Harry",
        "lasyName":"Potter",
        "number":"238913017",
        "likes":["Hogwarts","Magic","Hagrid"]
    },
    {
        "firstName:":"Sherlock",
        "lasyName":"Holmes",
        "number":"2373243691",
        "likes":["Intriguing Case","violin"]
    },
    {
        "firstName:":"Kristian",
        "lasyName":"Vos",
        "number":"unknown",
        "likes":["JavaScript","Gaming","Foxes"]
    },
];
function lookUpProfile(name,Prop){
    for (var i=0;i<contact.length){
        if (contacts[i].firstName===name){
            return contacts[i][prop]||"No such property";//if there is no property!!using OR
        }

    }
    return "No such Contact"
}
var data =lookUpProfile("Akira","likes")
console.log(data)://["Pizza","Coding","Brownie Points"]

////////////Random Num/////
function randowFraction(){
    return Math.random();//with floating pointer 
    return Math.floor(Math.random()*20);//Random Number between 0-19
    return Math.floor(Math.random()*10);//Random Number between 0-9
}
console.log(randomFraction());



function ourRandomRange(ourMin,ourMax){//get whole random number in a designed range
    return Math.floor(Math.random()*(ourMax-ourMin+1))+ourMin;
}
ourRandomRange(1,9);


function convertToInteger(str){
    return parseInt(str)//integer converter
}
convertToInteger("56");

function convertToInteger(str){
    return parseInt(str,2)//binary converte to integer  !!2 indicate binary
}
convertToInteger("10011");

//////////Conditional operater//////////
function checkEqual(a,b){
    return a===b ? true: false;
}
checkEqual(1,2);

runction checkSign(num){
    return num>0?"positive":num<0?"negative":"zero"///////IMPORTANT!!!!
};
checkSign(10);


//////////////Differences Between var and let and const/////////
var catName="quincy";//var and used to delcare a variable more than once
let dogName="Bean";
dogName="GoodBoy"////Its Okay
var quote;
var catName="Beau";//var and used to delcare a variable more than once
function catTalk(){
    "use strict";//This is placed to catch code mistakes
    catName="Oliver";
    quote=catName+" Says Meow!";

}
catTalk();



function checkScope(){
"use strict";
    var i ="function scope";
    if(true){
        i="block scope";
        console.log("Block scope i is: ",i);
    }
    console.log("function scope i is: ",i);
    return i;
}
checkScope();
//Block scope i is: block scope
//function scope i is: block scope
function checkScope(){
    "use strict";
        let i ="function scope";
        if(true){
            let i="block scope";
            console.log("Block scope i is: ",i);
        }
        console.log("function scope i is: ",i);
        return i;
    }
    checkScope();
    //Block scope i is: block scope
    //function scope i is: function scope


    function printManyTimes(str){//const is read only
        "use strict";
        var sentence=str+" is cool!";
        sentence=str+" is amazing!";
        for(var i=0;i<str.length;i+=2){
            console.log(sentence);
        }
    }
    printManyTimes("HelloWorlds")//HelloWorlds

    function printManyTimes(str){//const is read only
        "use strict";
        const sentence=str+" is cool!";
        sentence=str+" is amazing!";
        for(var i=0;i<str.length;i+=2){
            console.log(sentence);
        }
    }
    printManyTimes("HelloWorlds")//Error

    printManyTimes("HelloWorlds")//HelloWorlds
    function printManyTimes(str){//const is read only
        "use strict";
        const SENTENCE=str+" is cool!";
        for(let i=0;i<str.length;i+=2){
            console.log(sentence);
        }
    }
    printManyTimes("HelloWorlds")//HelloWorlds



    const s=[5,7,2];
    function editInPlace(){
        "use strict";
        s[0]=2;
        s[1]=5;
        s[2]=7;
    }
    editInPlace();
    console.log(s)//[2,5,7]




    function freezeObj(){
        "use strict";
        const MATH_CONSTANTS={
            PI:3.14
        };
        try{
            MATH_CONSTANTS.PI=99;
        }catch(ex){
            console.log(ex);
        }
        return MATH_CONSTANTS.PI;
    }
    const PI=freezeObj();
    console.log(PI);//99

    function freezeObj(){
        "use strict";
        const MATH_CONSTANTS={
            PI:3.14
        };
        Object.freeze(MATH_CONSTANTS);//make the constant unchangable
        try{
            MATH_CONSTANTS.PI=99;
        }catch(ex){
            console.log(ex);
        }
        return MATH_CONSTANTS.PI;
    }
    const PI=freezeObj();
    console.log(PI);//99


    /////////Use Arrow Functions to write concise Anonymous Functions////////
    var magic =function(){
        return new Data();
    };
    //|||||EQUAL||||||\\\\\
    var magic =()=>{
        return new Data();
    };


    var myConcat=function(arr1,arr2){
        return arr1.concat(arr2);
    };
    console.log([1,2],[3,4,5]);
    //|||||EQUAL||||||\\\\\
    const myConcat=(arr1,arr2)=>arr1.concat(arr2);
    
    console.log([1,2],[3,4,5]);



    /////////////Higher Order Arrow Functions/////////////////
    const realNumberArray=[4,5.6,-9.8,3.14,42,6,8.34,-2];
    const squareList=(arr)=>{
        const squaredIntegers=arr.filter(num=>Number.isInteger(num)&&num>0).map(x => x*x);///Syntax
        return squaredIntegers;
    }
    const squaredIntegers=squareList(realNumberArray);
    console.log(squaredIntegers);//[16,1764,36]


    const increment =(function(){
        return function increment(number,value=1){
            return number+value;
        };
    })();
    console.log(increment(5,2));//7
    console.log(increment(5));//6


    ////////////////Rest Operator with Function Parameters/////////////////
    const sum=(function(){
        return function sum(x,y,z){
            const args =[x,y,z];
            return args.reduce((a,b)=>a+b,0);
        };
    })();
    console.log(sum(1,2,3));//6
    const sum=(function(){
        return function sum(...args){//...args passing every thing in than convert it to a array called args
            return args.reduce((a,b)=>a+b,0);
        };
    })();
    console.log(sum(1,2,3));//6


    ////////Spread Operator to Evaluate Arrays In-Place//////////////
    const arr1=['JAN',"FEB","MAR",'APR','MAY'];
    let arr2;
    (function(){
        arr2=arr1;
        arr1[0]='potato'
    })();
    console.log(arr2);//['potato',"FEB","MAR",'APR','MAY']
    const arr1=['JAN',"FEB","MAR",'APR','MAY'];
    let arr2;
    (function(){
        arr2=[...arr1];
        arr1[0]='potato'
    })();
    console.log(arr2);//['JAN',"FEB","MAR",'APR','MAY']




    /////////Use Destructuring Assignment to Assign Variable from Objects/////////

    var voxel={x:3.6, y:7.4, z:6.54};
    var x=voxel.x;
    var y=voxel.y;
    var z=voxel.z;
    const{x:a, y:b, z:c }=voxel;//a=3.6, b=7.4, c=6.54
    const AVG_TEMPERATURES={
        today:77.5,
        tomorrow:79
    };
    function getTempOfTmrw(avgTemperatures){
        "use strict";
        const {tomorrow:tempOfTomorrow}=avgTemperatures;//Get tomorrow file from avgTemperatures
        return tempOfTomorrow;
    }
    console.log(getTempOfTmrw(AVG_TEMPERATURES));//79



//////////////Use Destructuring Assignment with Nested Objects/////////
        const LOCAL_FORECAST={                                      ///
            today:{min:72, max:83},
            tomorrow:{min:73.3,max:84.6}                            ///
        };
        function getMaxOfTmrw(forecast){                            //IMPROTANT 
            "use strict";
            const {tomorrow: {max: maxOfTomorrow}}=forecast;
            return maxOfTomorrow;                                   ///
        }
        console.log(getMaxOfTmrw(LOCAL_FORECAST));   //84.6         ///
///////////////////////////////////////////////////////////////////////

////////////Use Destructuring Assignment to Assign Variable from Arrays///////////
const[z,x,,y]=[1,2,3,4,5,6];
console.log(z,x,y);//1 2 4
let A=8,b=6;
(()=>{
    "use strict";
    [a,b]=[b,a]
})();
console.log(a);//6
console.log(b);//8


////////////Use Destructuring Assignment with the Rest Operator//////////
const source=[1,2,3,4,5,6,7,8,9,10];
function removeFirsttwo(list){
    const [,,...arr]=list;//do nothing for the first second elements/every thing else put into the list array 
    return arr;
};
const arr=removeFirsttwo(source);
console.log(arr);
console.log(source);



////////////Use Destructuring Assignment to Pass An Object as a function's Parameters//////

const stats={
    max:56.78,
    standard_deviation:4.34,
    median:34.54,
    mode:23.87,
    min:-0.75,
    average:35.85
};
const half=(function(){
    return function half(stats){
        return (stats.max+stats.min)/2.0;
    };
})();
console.log(stats);
console.log(half(stats));//28.015
//|||||||EQUAL\\\\\\\\\\\\
const stats={
    max:56.78,
    standard_deviation:4.34,
    median:34.54,
    mode:23.87,
    min:-0.75,
    average:35.85
};
const half=(function(){
    return function half(max,min){
        return (max+min)/2.0;//COMMONLY used in API request
    };
})();
console.log(stats);
console.log(half(stats));//28.015

/////////Create Strings using Template Literals//////////
/////////////////////////////////////////////////////////IMPROTANT
const person={
    name:"Zodiac Hasbro",
    age:56
};
const greeting=`Hello, my name is ${person.name}!
I am ${person.age} year old.`;
console.log(greeting);


///////////////////////////////////////////////Practical Case/////////////////////////////Combine html//////output
const result={
    success:["max-length","no-amd","prefer-arrow-functions"],
    failure:["no-var","var-on-top","linebreak"],
    skipped:["id-blacklist","no-dup-keys"]
};
function makeList(arr){
    const resultDisplayArray=[];
    for(let i=0;i<arr.length;i++){
        resultDisplayArray.push(`<li class="text-warning>${arr[i]}</li>`)
    }
    return resultDisplayArray;
    
};
 /**
  * makeList(result,.failure) should return:
  * [   `<li class="text-warning">no-var</li>`,
  *     `<li class="text-warning">var-on-top</li>`,
  *     `<li class="text-warning">linebreak</li>`
  * ]
  **/
 const resultDisplayArray=makeList(result.failure);
 console.log(resultDisplayArray);

 /////Write concise Object Literal Declarations using Simple Fields///////
 const createPerson=(name,age,gender)=>{
     return{
         name:name,
         age:age,
         gender:gender
     };
 };
 console.log(createPerson("Zodiac Hasbro",56, "male"));//{name:"Zodiac Hasbro", age:56, gender:"male"}
 /////|||||||||||EQUAL||||||||||\\\\\\\
 const createPerson=(name,age,gender)=>({name,age,gender});
 console.log(createperson("Zodiac Hasbro",56, "male"));






 ////////Write concise Delcarative Functions//////
 const bicycle={
     gear:2,
     setGear(newGear){
         "use strict";
         this.gear=newGeat

     }
 };
 bicycle.setGear(3);
 console.log(bicycle.gear);//3


 /////////////Use class Syntax to Deine a Constructor Function/////////
 var SpaceShuttle=function(targetPlanet){///////constructor functions
     this.targetPlanet=targetPlanet;    ///////constructor functions
 }                                      ///////constructor functions
 var zeus=new SpaceShuttle('Jupiter');
 console.log(zeus.targetPlanet)//Jupiter
 //////////////|||||||EQUAL|||||||||\\\\\\\
 class SpaceShuttle{
     constructor(targetPlanet){
         this.targetPlanet=targetPlanet;
     }
 }
 var zeus=new SpaceShuttle('jupiter');
 console.log(zeus.targetPlanet)





 function makeClass(){
     class Vegetable{
         constructor(name){
             this.name=name;
         }
     }
     return Vegetable;
 }
 const Vegetable =makeClass();
 const carrot=new Vegetable('carrot');
 console.log(carrot.name);


 /////////////Getter and Setter to control Access to an Object///////
 class Book{
     constructor(author){
         this._author=author;
     }
     get writer(){
         return this._author;
     }
     set writer(updaredAuthor){
         this._author=updatedAuthor;
     }
 }
 function makeClass(){
     class Thermostat{
         constructor(temp){
             this._temp=5/9*(temp-32);
         }
         get temperature(){
             return this._temp;
         }
         set temperature(updatedTemp){
             this._temp=updatedTemp;
         }
     }
     return Thermostat
 }
 const Thermostat=makeClass();
 const thermos=new Thermostat(76);
 let temp =thermos.temperature;
 thermos.temperature=26;
 temp=thermos.temperature;






 /////////////////Understand the Differences Between import and require///////
 ////In a another file///below
 export const capitalizeString=str=>str.toUpperCase()
 /////In a file called string_function.js///////

 import {capitalizeString} from "./string_function"
 const cap=capitalizeString("hello!");///This can Capitalize the strings
 console.log(cap);




 //////Use export to reuse a Code Block//////////
 const capitalizeString=(string)=>{
     return string.charAt(0).toUpperCase()+string.slice(1);
 }
 export{capitalizeString };
 export const foo="bar";
 export const bar="foo"


 ///////Use * to Import Everything from a File//////
 import * as nameOfObject from "capitalize_strings"

 ///////Create an Export Fallback with export default////
 export default function substract(x,y) {return x-y;}

 ////////Import a Default Export/////////
 
 import subtract from "math_functions";
 subtract(7,4);



 ////////////Closure///////////////2022,April,29th///////

 var addTo=function(passed){
     var inner=2;
     return passed+inner;
 };
 console.log(addTo(3))
/////OR
var passed=3;
var addTo=function(passed){
    var inner=2;
    return passed+inner;
};
console.log(addTo())

/////anything function where variable used from outside are closures////////
var passed=3;
var addTo=function(passed){
    var inner=2;
    return passed+inner;
};
console.dir(addTo);//<function scope> <Closure> passed:3

var passed=3;
var addTo=function(passed){
    var inner=2;
    return passed+inner;
};
var passed=4;
console.dir(addTo);//<function scope> <Closure> passed:4


var passed=3;
var addTo=function(passed){
    var inner=2;
    return passed+inner;
};
console.dir(addTo());//5
var passed=4;
console.dir(addTo());//6


var addTo=function(passed){//Outer function

    var add=function(inner){//Inner function
        return passed+inner;
    };
    return add;
};
console.dir(addTo(3));//<function scope> <Closure> passed:3
var addThree=new addTo(3);
var addFour=new addTo(4);
console.log(addThree(1));//<4

console.log(addFour(1));//<5



////////More about Closure//////
const myName='Jing'//////////////First scope
function printName(){////////////Second scope
    console.log(myName)//////////Second scope ////////inner scope can access the element outside of its scope
}////////////////////////////////Second scope
printName()//Jing////////////////First scope


const myName='Jing'
function printName(){
    console.log(myName)
}
myName="Joey"
printName()//Joey
myName="Kate"
printName()//Kate



////////Commom used Case///////////
function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log("Outer Variable: "+outerVariable)
        console.log("Outer Variable: "+innerVariable)
    }
}
const newFunction=outerFunction('outside')
newFunction('inside')5