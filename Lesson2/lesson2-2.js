
const fs=require('fs');//调用fs函数库
const List=require('./lesson2-1.js');//调用List
const _=require('../underscore/node_modules/underscore/underscore.js')._;
//异步读取
/*fs.readFile('films.txt','utf-8',function(err,data){
	if (err) {
		console.error(err);
	}else{
		console.log(data);
	}

});*/
//同步读取
// let movies=fs.readFileSync('films.txt','utf-8').split("\n");
// console.log(movies);

//读取的内容被分割成数组后，换行符被替换成空格。空格在比较字符串时有许多问题
//使用trim方法删除每个数组元素未尾的空格

function createArr(file){
	let arr=fs.readFileSync(file,'utf-8').split("\n");
	for(let i=0;i<arr.length;i++){
		arr[i]=arr[i].trim();
	}
	return arr;
}

//新列表customers
let customers=new List();

function Customer(name,movice){
	this.name=name;
	this.movice=movice;
}

//该函数有两个参数：客户姓名和客户想 要检出的电影。
//如果该电影目前可以租赁，该方法会从影碟店的影碟清单里删除该元素，
//同时加入客户列表 customers。

function checkOut(name,movice,moviceList,customerList){
	if(moviceList.contains(movice)){
		let c=new Customer(name,movice);
		customerList.append(c);
		moviceList.remove(movice);
	}else{
		console.log(movice+"暂时没有");
	}
}

//当客户归还一部影片时，将该影片从客戶列表中删除,同时添加到现有影片列表中。
function checkIn(name,movice,movieList,customerList){
	let c=new Customer(name,movice);

	if(customerList.contains(c)){
		movieList.append(movice);
		customerList.remove(c);
	}else{
		console.log(name+" 沒有租借 "+movice);
	}
}


//显示清单
function displayList(list){
	for(list.front();list.currPos()<list.length();list.next()){
		if (list.getElement() instanceof Customer) {
			console.log(list.getElement()["name"]+","+
				list.getElement()["movice"]);
		}else{
			console.log(list.getElement());
		}
	}
}

//测试

let movies=createArr('films.txt');

let movieList=new List();
let customerList=new List();
for(let i=0;i<movies.length;i++){
	movieList.append(movies[i]);
}
console.log("所有的电影:");
displayList(movieList);


checkOut("blsm","(14) Inception（《盗梦空间》）",movieList,customerList);
checkOut("blsm","(18) The Matrix（《黑客帝国》）",movieList,customerList);
checkOut("blsm","(19) Forrest Gump（《阿甘正传》）",movieList,customerList);
console.log("\n客户清单:");
displayList(customerList);

checkIn("blsm","(18) The Matrix（《黑客帝国》）",movieList,customerList);
console.log("\n客户清单:");
displayList(customerList);








