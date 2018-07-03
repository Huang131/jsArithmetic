
//练习
/*1.修改 Queue 类,形成一个Deque类。这是一个和队列类似的数据结构，允许从队列两端
添加和删除元素，因此也叫双向队列。写一段测试程序测试该类*/

function Deque()
{
	this.dataStore=[];
	this.push_front=push_front;
	this.push_back=push_back;
	this.pop_front=pop_front;
	this.pop_back=pop_back;
	this.front=front;
	this.back=back;
	this.toString=toString;
	this.isEmpty=isEmpty;
}

//向队首添加一个元素
function push_front(ele)
{
	this.dataStore.unshift(ele);
}

//向队尾添加一个元素
function push_back(ele)
{
	this.dataStore.push(ele);
}

//删除队首的元素
function pop_front()
{
   return this.dataStore.shift();
}

//删除队尾的元素
function pop_back()
{
   return this.dataStore.pop();
}
function front()
{
	return this.dataStore[0];
}

function back()
{
	return this.dataStore[this.dataStore.length-1];
}

function toString()
{
	let retStr="";
	for(let i=0;i<this.dataStore.length;i++){
		retStr +=this.dataStore[i]+"\n";
	}
	return retStr;
}

function isEmpty()
{
	if(this.dataStore.length<=0){
		return true;
	}else{
		return false;
	}
}

//测试

/*let d=new Deque();
d.push_back('Tom');
d.push_back('Jack');
d.push_front('Divid');
d.push_front('White');
console.log(d.toString());

d.pop_front();
console.log(d.toString());
d.pop_back();
console.log(d.toString());
*/

// 2.使用前面完成的Deque类来判断一个给定单词是否为回文。

function isPalindrome(word)
{
	let d=new Deque();
	for(let i=0;i<word.length;i++){
		d.push_front(word[i]);
	}
    let p=new Deque();
    for(let i=0;i<word.length;i++){
		p.push_back(word[i]);
	}

	if(d.dataStore.join("")==p.dataStore.join("")){
		return true;
	}else{
		return false;
	}

}

let word="aba";
let flag=isPalindrome(word.split(""));
console.log(flag);










