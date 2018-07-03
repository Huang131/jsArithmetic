const fs=require('fs');
const Dictionary=require("./lesson6-1.js");


/*1.写一个程序，该程序从一个文本文件中读入名字和电话号码，然后将其存入
一个字典。该程序需包含如下功能：显示单个电话号码，显示所有电话号码，
增加新电话号码、删除电话号码、清空所有电话号码*/

//从tel.txt文件中获取联系人信息
function getTelphone(dictionary)
{
	let tels=fs.readFileSync('tel.txt','utf-8').split("\n");
	for(let i=0;i<tels.length;i++){
		tels[i]=tels[i].trim();//清除空格
		let address=tels[i].split(" ");
		dictionary.add(address[0],address[1]);
	}

	
}

//显示单个电话号码
Dictionary.prototype.showSingle=function(name){
	console.log(name+"->"+this.find(name));
}

/*let d=new Dictionary();

getTelphone(d);
//展示所有电话号码
console.log(d.showAll());
//增加电话号码
d.add('Jack','15071416731')
//展示单个电话号码
d.showSingle('Jack');
//删除电话号码
console.log("删除Tom");
d.remove('Tom');
d.showAll();
//删除所有
console.log("删除所有");
d.clear();
d.showAll();*/


/*2.使用 Dictionary 类写一个程序，该程序用来存储一段文本中各个单词出现的
次数。该程序显示每个单词出现的次数，但每个单词只显示一次。比如下面一段
话“the brown fox jumped over the blue fox”，程序的输出应为：
the: 2 
brown: 1 
fox: 2 
jumped: 1 
over: 1 
blue: 1*/

//统计
Dictionary.prototype.addCount=function(key){

	this.dataStore[key]=this.find(key)?this.dataStore[key]+1:1;
}
//解析句子
Dictionary.prototype.analysis=function(sentence){
	let words=sentence.split(" ");
	for(let key of words){
		this.addCount(key);
	}
}

let sentence="the brown fox jumped over the blue fox";

let d=new Dictionary();
d.analysis(sentence);
d.showAll();


