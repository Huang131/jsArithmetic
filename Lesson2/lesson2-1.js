
/*列表的抽象数据类型定义
listSize（属性）    列表的元素个数 
pos  （属性）       列表的当前位置 
length （属性）     返回列表中元素的个数 
clear （方法）      清空列表中的所有元素
find   (方法)       在列表中查找某一元素
toString （方法）   返回列表的字符串形式 
getElement （方法） 返回当前位置的元素 
insert （方法）     在现有元素后插入新元素 
append （方法）     在列表的末尾添加新元素 
remove （方法）     从列表中删除元素 
front （方法）      将列表的当前位置设移动到第一个元素 
end （方法）        将列表的当前位置移动到最后一个元素 
prev（方法）        将当前位置前移一位 
next （方法）       将当前位置后移一位 
currPos （方法）    返回列表的当前位置 
moveTo（方法）      将当前位置移动到指定位置
contains (方法)     判断给定值是否在列表中
*/


function List(){
	this.dataStore=[];//初始化一个空数组来保存列表元素
	this.listSize=0;
	this.pos=0;
	this.length=length;
	this.clear=clear;
	this.find=find;
	this.toString=toString;
	this.getElement=getElement;
	this.insert=insert;
	this.append=append;
	this.remove=remove;
	this.front=front;
	this.end=end;
	this.prev=prev;
	this.next=next;
	this.currPos=currPos;
	this.moveTo=moveTo;
	this.contains=contains;
}

//返回列表元素的个数
function length(){
	return this.listSize;
}

//清空列表中所有的元素
function clear(){
 delete this.dataStore;
 this.dataStore=[];
 this.listSize=this.pos=0;
 return this.dataStore;
}

//在列表中查找某一元素
function find(element){
	for(let i=0;i<this.dataStore.length;i++){
		if (element == this.dataStore[i]) {
			return i;
		}
	}
	return -1;
}

//显示列表中的元素
function toString(){
	return this.dataStore;
}

//返回当前位置的元素 
function getElement(){
	return this.dataStore[this.pos];
}

//向列表中插入一个元素
function insert(element,after){
	let insertPos;
	if(after==null){
		insertPos=this.dataStore.length-1;
	}else{
		insertPos=this.find(after);
	}
	if(insertPos>-1){
		this.dataStore.splice(insertPos+1,0,element);
		this.listSize++;
		return true;
	}
	return false;
}

//给列表添加元素
function append(element){
	this.dataStore[this.listSize++]=element;
	return this.listSize;
}

//从列表中删除元素
function remove(element){
	let foundAt=this.find(element);
	if (foundAt>-1) {
		this.dataStore.splice(foundAt,1);
		--this.listSize;
		return true;
	}
	return false;
}

//将列表的当前位置设移动到第一个元素
function front(){
	this.pos=0;
}

//将列表的当前位置设移动到第一个元素
function end(){
	this.pos=this.listSize-1;
}

//将当前位置前移一位
function prev(){
  if(this.pos>=0){
  	this.pos--;
  }
}

//将当前位置后移一位
function next(){
 if(this.pos<this.listSize){
 	this.pos++;
 }
}

//返回列表的当前位置
function currPos()
{
	return this.pos;
}

//将当前位置移动到指定位置
function moveTo(position)
{
	this.pos=position;
}

//判断给定值是否在列表中
function contains(element)
{
	if(this.find(element)==-1){
		return false;
	}

	return true;
}

module.exports=List;


/*let names=new List();
names.append("Cynthia"); 
names.append("Raymond"); 
names.append("Barbara"); 
console.log(names.toString());//[ 'Cynthia', 'Raymond', 'Barbara' ]
names.remove("Raymond");
console.log(names.toString());//[ 'Cynthia', 'Barbara' ]
names.insert("blsm");
console.log(names.toString());//[ 'Cynthia', 'Barbara', 'blsm' ]
let flag=names.contains('bls');
console.log(flag);//false
names.front();
console.log(names.getElement());//Cynthia
names.next();
console.log(names.getElement());//Barbara

//以下是和使 用数组索引的方式相比，使用迭代器的一些优点。
//1.访问列表元素时不必关心底层的数据存储结构。
//2.当为列表添加一个元素时，索引的值就不对了，此时只用更新列表，而不用更新迭代器。
//3.可以用不同类型的数据存储方式实现List 类，迭代器为访问列表里的元素提供了一种统一的方式

console.log("迭代器遍历");
for(names.front();names.currPos()<names.length();names.next()){
	console.log(names.getElement());
}

console.log("迭代器从后向前遍历");
for(names.end();names.currPos()>=0;names.prev()){
	console.log(names.getElement());
}

names.clear();
console.log(names.toString());//[]*/




























