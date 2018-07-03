
const List=require('./lesson2-1.js');//调用List

//1.增加一个向列表中插入元素的方法,该方法只在待插元素大于列表中的所有元素时才执行插入操作。
//这里的大于有多重含义，对于数字，它是指数值上的大小；对于字母,它是指在字母表中出现的先后顺序。

function infix(elelment){
	for(this.front();this.currPos()<this.length();this.next()){
		if(elelment<=this.getElement()){
			return false;
	   }
   }
   this.append(elelment);
   return this.dataStore;
}

let test=new List();
test.infix=infix;

test.append(1); 
test.append(2); 
test.append(3);
test.append('a');
console.log(test.toString());
console.log(test.infix('a'));





















