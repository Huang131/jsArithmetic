

function HashTable()
{
	this.table=new Array(137);
	this.simpleHash=simpleHash;
	this.betterHash=betterHash;
	this.showDistro=showDistro;
	this.put=put;
	this.get=get;
	this.buildChains=buildChains;//开链法
}

/*function put(data){
	// let pos=this.simpleHash(data);
	let pos=this.betterHash(data);
	this.table[pos]=data;
}*/

function put(key,data){
	// let pos=this.simpleHash(key);
	let pos=this.betterHash(key);
	let index=0;
	while(this.table[pos][index]!=undefined){
		index++;
	}

	this.table[pos][index]=data;
}

function get(key){
	// let pos=this.simpleHash(key);
	let pos=this.betterHash(key);
	let index=0;
	if(this.table[pos][index]==key){
		return this.table[pos][index];
	}else{
		while(this.table[pos][index]&&this.table[pos][index]!=key){
			index++;
		}
		return this.table[pos][index];
	}

}

//容易发生碰撞
function simpleHash(data){
	let total=0;
	for(let i=0;i<data.length;i++){
		total +=data.charCodeAt(i);
	}

	return total%this.table.length;
}

//使用霍纳算法的散列函数
function betterHash(string){
	const H=37;
	let total=0;
	for(let i=0;i<string.length;i++){
		total +=H*total+string.charCodeAt(i);
	}
	total=total%this.table.length;
	if (total<0) {
		total +=this.table,length-1;
	}
	return parseInt(total);
}


function showDistro(){
	let n=0;
	for(let i=0;i<this.table.length;i++){
		if (this.table[i][0] !=undefined) {
			console.log(i+":"+this.table[i]);
		}
	}
}

//开链法
function buildChains(){
 for(let i=0;i<this.table.length;i++){
 	this.table[i]=new Array();
 }
}


//测试
let someNames=["David","Jennifer","Donnie","Raymond",
               "Cynthia", "Mike", "Clayton", "Danny", 
               "Jonathan","Tom","Jack","Divad","Caylton"];

let hTable=new HashTable();
hTable.buildChains();
for(let i=0;i<someNames.length;i++){
	hTable.put(someNames[i],someNames[i]);
}
hTable.showDistro();


console.log("测试开链法:");
for(let i=0;i<someNames.length;i++){
	console.log(i+"->"+hTable.get(someNames[i]));
}



//散列整型键
function getRandomInt(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;
}

function genStuData(arr){
	for(let i=0;i<arr.length;i++){
		let num="";
		for(let j=0;j<arr.length;j++){
			num +=Math.floor(Math.random()*10);
		}
		num +=getRandomInt(50,100);
		arr[i]=num;
	}
}

/*let numStudents=10;
let arrSize=97;
let idlen=9;
let students=new Array(numStudents);
genStuData(students);
console.log("Student data:");
for(let i=0;i<students.length;i++){
	console.log(students[i].substring(0,8)+" "
		+students[i].substring(9));
}

console.log("Data distribution:\n");
let hTable=new HashTable();
for(let i=0;i<students.length;i++){
	hTable.put(students[i]);
}
hTable.showDistro();*/



/*let pnumbers=new HashTable();
let name,number;

//引入readline模块
const readline=require('readline');
//创建readline接口实例
let rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
//question方法
rl.question("输入你的名字:",function(answer){
	console.log("你的名字是:"+answer);
	name=answer;
	rl.question("输入数字:",function(answer){
		console.log("你输入的数字是："+answer);
		number=answer;
		rl.close();
	});
});

rl.on("close",function(){
	//结束程序
	process.exit(0);
});*/











































