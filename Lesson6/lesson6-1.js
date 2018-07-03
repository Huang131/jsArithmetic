
function Dictionary()
{
	this.dataStore=new Array();
	this.add=add;
	this.find=find;
	this.remove=remove;
	this.showAll=showAll;
	this.count=count;
	this.clear=clear;
}

function add(key,value)
{
	this.dataStore[key]=value;
}

function find(key)
{
	return this.dataStore[key];
}

function remove(key)
{
	delete this.dataStore[key];
}

//当键为字符串时,length属性无效
function count()
{
	let n=0;
	for(let key of Object.keys(this.dataStore)){
		n++;
	}
	return n;
}

function showAll()
{    //for in是ES5标准，遍历key. for of是ES6标准，遍历value.
	for(let key of Object.keys(this.dataStore).sort()){

		console.log(key+"->"+this.dataStore[key]);
	}
}

function clear()
{
	for(let key of Object.keys(this.dataStore)){
		delete this.dataStore[key];
	}
}

/*let pbook=new Dictionary();
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries:"+pbook.count());
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll()
pbook.clear();
console.log("Number of entries:"+pbook.count());*/

module.exports=Dictionary;


















