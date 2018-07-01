
//js对象复习
/*function Checking(amount){
	this.balance=amount;
	this.deposit=deposit;
	this.withdrow=withdrow;
	this.toString=toString;
}

function deposit(amount){
	this.balance +=amount;
}

function withdrow(amount){
	if (amount<=this.balance) {
		this.balance -=amount;
	}

	if (amount>this.balance) {
		console.log("余额不足");
	}
}

function toString(){
	return "Balance:"+this.balance;
}

let account=new Checking(500);
account.deposit(1000);
console.log(account.toString()); //Balance:1500
account.withdrow(750);
console.log(account.toString());//Balance:750
account.withdrow(800);         //余额不足
console.log(account.toString()); //Balance:750*/

//js split
/*let sentence="I hope tomorrow is rain";
let words=sentence.split(" ");
for (var i = 0; i<words.length; i++) {

	console.log("word"+i+":"+words[i]);
}*/

//js 数组首部添加元素
/*let nums=[2,3,4,5];
let newnum=1;
let N=nums.length;

for (let i =N; i >= 0; i--) {
	 nums[i]=nums[i-1];
}

nums[0]=newnum;

console.log(nums);

*/
//js splice
/*let nums=[1,2,3,4,5,6,7];

let newElements=[8,9,10];

nums.splice(7,0,newElements.join(" "));

console.log(nums);*/

//js sort

/*function compare(num1,num2){
	return num1-num2;
}

let nums=[1,12,3,45,67];
nums.sort(compare);
console.log(nums);
*/

//js   forEach  every  same  reduce不产生新数组
/*function square(num){
	console.log(num,num*num);
}

let nums=[1,2,3,4,5,6,7,8,9];
nums.forEach(square);
console.log('nums:',nums);*/

/*function isEven(num){
	return num %2==0;
}
let nums=[2,4,6,8,9];
// let even=nums.every(isEven);
let even=nums.some(isEven);
if (even) {
	console.log("all numbers are even");
}else{
	console.log("not all numbers are even");
}*/

/*function add(runningTotal,currentValue){
	return runningTotal+currentValue;
}
function subtraction(runningTotal,currentValue){
	return runningTotal-currentValue;
}

let nums=[1,2,3,4,5,6,7,8,9,10];
let sum=nums.reduce(add);
let sub=nums.reduce(subtraction);
console.log("add:",sum);
console.log("sub",sub);


function concat(accumulatedString,item){
	return accumulatedString+item;
}
let words=['the ','quick ','brown ','fox '];
let sentence=words.reduce(concat,'haung ');
console.log(sentence);
*/

//js map filter 生成新数组

/*function curve(grade){
	return grade +=10;
}
let grades=[77,65,81,92,80];
let newgrades=grades.map(curve);
console.log('grades:',grades);
console.log('newgrades:',newgrades);*/


/*function isEven(num){
	return num %2==0;
}

function isOld(num){
	return num %2 !=0;
}
let nums=[];
for(let i=0;i<20;i++){
	nums[i]=i+1;
}
console.log("nums:",nums);

let evens=nums.filter(isEven);
console.log("Even numbers:",evens);

let odds=nums.filter(isOld);
console.log("Old numbers:",odds);

function afterc(str){
	if (str.indexOf("cie")>-1) {
		return true;
	}
	return false;
}

let words=["recieve","deceive","percieve","deceit"];
let misspelled=words.filter(afterc);
console.log(misspelled);
*/

//js 二维数组创建
/*Array.matrix=function(numrows,numcols,inital){
	let arr=[];
	for(let i=0;i<numrows;i++){
		let columns=[];
		for(let j=0;j<numcols;j++){
			columns[j]=inital;
		}
		arr[i]=columns;
	}
	return arr;
}

let nums=Array.matrix(5,5,10);
console.log("nums:",nums);
console.log(nums[1][1]);*/

/*let grades=[[88,77],[76,82,81],[76,54,23,99]];
let total=0;
let average=0.0;
for(let row=0;row<grades.length;row++){
	for(let col=0;col<grades[row].length;col++){
		total +=grades[row][col];
	}
	average=total / grades[row].length;
	console.log("Student"+parseInt(row+1)+" average:"+
		average.toFixed(2));
	total=0;
	average=0.0;
}*/

//1.创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。

/*function Student(grade){
  this.grade=grade;
  this.add=add;
  this.average=average;
}

function add(grade){
	this.grade.push(grade);
}

function average(){
	let sum=0;
	for(let i=0;i<this.grade.length;i++){
		sum +=this.grade[i];
	}

	return (sum/this.grade.length).toFixed(2);
}

let grades=[10,10,10,10,10];
let stu=new Student(grades);
stu.add(16);
console.log(stu.average());
*/
//2.将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词
/*let sentence="the quick brown fox jumped over the lazy dog";
let words=sentence.split(" ");

console.log("words:",words);
console.log("正序",words.sort());
console.log("倒叙",words.sort().reverse());*/

//3.修改本章前面出现过的 weeklyTemps 对象，使它可以使用一个二维数组来存储每月的有 用数据。增加一些方法用以显示月平均数、具体某一周平均数和所有周的平均数

/*let Temp={
	monthTempStore:[],
	weekTempStore:[],

	add:function(by,key,temp){
		let strategy={
			month:function(month){
				Temp.monthTempStore[month]=Temp.monthTempStore[month] || new Array();
				Temp.monthTempStore[month].push(temp);
			},
			week:function(week){
				Temp.weekTempStore[week]=Temp.weekTempStore[week] || new Array();
				Temp.weekTempStore[week].push(temp);
			},
		};
		strategy[by](key);
	},
	average:function(by,key){
		let sum=0;
		let strategy={
			month:function(){
				for(let i=0;i<Temp.monthTempStore[key].length;i++){
					sum +=Temp.monthTempStore[key][i];
				}
				return sum / Temp.monthTempStore[key].length;
			},
			week:function(){
				for(let i=0;i<Temp.weekTempStore[key].length;i++){
					sum +=Temp.weekTempStore[key][i];
				}
				return sum / Temp.weekTempStore[key].length;
			},
			allWeek:function(){
				let index=0;
				for(let i=0;i<Temp.weekTempStore.length;i++){
					if (Temp.weekTempStore[i]) {
						for(let j=0;j<Temp.weekTempStore[i].length;j++){
							sum +=Temp.weekTempStore[i][j];
							++index;
						}
					}
				}
				return sum / index;
			}
		};
		return strategy[by]();
	}
};

//存储每个月有用数据
Temp.add('month',1,10);
Temp.add('month',1,30);


//1月份平均温度
console.log(Temp.average('month',1));

Temp.add('week',1,50);
Temp.add('week',1,50);
Temp.add('week',1,50);

//第一周温度平均数
console.log("week:",Temp.average('week',1));

//所有周平均数
console.log(Temp.average('allWeek'));*/

//4.创建这样一个对象，他将字母存储在一个数组中，并且用一个方法可以将字母连在一起，显示成一个单词。
/*function Word(data){

	if (!(data instanceof Array)) {
		console.log("请传入一个数组");
	}
	this.data=data;

	this.letter=function(){
		return this.data.join("");
	}
}

// let word=new Word(1);
let word=new Word(['a','p','p','l','e']);
let w=word.letter();
console.log(w);*/






















