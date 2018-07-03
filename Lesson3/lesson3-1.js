
function Stack(){
	this.dataStore=[];
	this.top=0;
	this.push=push;
	this.pop=pop;
	this.peek=peek;
	this.clear=clear;
	this.length=length;
	this.isEmpty=isEmpty;
}

function push(element){
	this.dataStore[this.top++]=element;
	return this.top;
}

function pop(){
	return this.dataStore[--this.top];
}

function peek(){
	return this.dataStore[this.top-1];
}

function length(){
	return this.top;
}

function clear(){
	this.top=0;
}

function isEmpty(){
	if(this.length()<=0){
		return true;
	}else{
		return false;
	}
}


//测试Stack类的实现
/*let s=new Stack();
s.push("Tom");
s.push("Jack"); 
s.push("Bryan");
console.log("length: " + s.length());//3
console.log(s.peek());//Bryan
let popped = s.pop();
console.log("The popped element is: " + popped);//Bryan
console.log(s.peek());//Jack
s.push("Cynthia");
console.log(s.peek());//Cynthia
s.clear();
console.log("length: " + s.length());//0
console.log(s.peek());//undefined
s.push("Clayton");
console.log(s.peek());//Clayton*/


/* 1.数制间的相互转换:假设想将数字n转换为以b为基数的数字，实现转换的算法如下
(1) 最高位为 n % b,将此位压入栈
(2) 使用 n/b代替n
(3) 重复步骤1 和 2，直到 n 等于 0，且没有余数。 
(4) 持续将栈内元素弹出,直到栈为空,依次将这些元素排列,就得到转换后数字的字符串形式*/

/*function mulBase(num,base){
	let s=new Stack();
	do{
		s.push(num%base);
		num=Math.floor(num /= base);
	}while(num>0);

	let converted="";
	while(s.length()>0){
		converted +=s.pop();
	}

	return converted;
}


let num=31;
let base=2;
let newNum=mulBase(num,base);
console.log(num+" converted to base "+base+" is "+newNum);//11111

num =125;
base=8;
newNum=mulBase(num,base);
console.log(num+" converted to base "+base+" is "+newNum);//175*/



//2.判断给定字符串是否是回文

/*function isPalindrome(word){
	let s=new Stack();
	for(let i=0;i<word.length;i++){
		s.push(word[i]);
	}
	let rword="";
	while(s.length()>0){
		rword +=s.pop();
	}
	if(word==rword){
		return true;
	}else{
		return false;
	}
}

let word="hello";
if(isPalindrome(word)){
	console.log(word+" is a palindrome");
}else{
	console.log(word+"is not a palindrome");
}
word='racecar';
if(isPalindrome(word)){
	console.log(word+" is a palindrome");
}else{
	console.log(word+"is not a palindrome");
}
*/

//3.递归
/*function factorial(n){
	if(n==0){
		return 1;
	}else{
		return n*factorial(n-1);
	}

}


function fact(n){
	let s=new Stack();
	while(n>1){
		s.push(n--);
	}
	let product=1;
	while(s.length()>0){
		product *=s.pop();
	}
	return product;
}

console.log(factorial(6));//720
console.log(fact(6));//720*/


//练习
/*1.栈可以用来判断一个算术表达式中的括号是否匹配。编写一个函数，该函数接受一个算术表达式作为参数，
返回括号缺失的位置。下面是一个括号不匹配的算术表达式的例子：2.3 + 23 / 12 + (3.14159×0.24。*/

/*function signUp(stack,ele){
	switch(ele){
		case "{":
		case "[":
		case "(":
			stack.push(ele);
			break;
		case "}":
		case "]":
		case ")":
	        let topEle=stack.pop();
	        console.log(stack.top);
	        if((topEle=='{'&& ele=='}')||(topEle=='['&& ele==']')||(topEle=='('&& ele==')')){
	        	console.log('ok');
	        }else{
	        	console.log("括号不匹配");
	        	return;
	        }
	        break;
	} 
}
let stack=new Stack();
let str="2.3 + 23 / 12 + ( 3.14159 × 0.24 ";
str=str.split(" ");

for(let i=0;i<str.length;i++){
	signUp(stack,str[i]);
}
if(!stack.isEmpty()){
	console.log("括号不匹配");
}*/


/*2. 一个算术表达式的后缀表达式形式如下：
op1 op2 operator
使用两个栈，一个用来存储操作数，另外一个用来存储操作符，设计并实现一个JavaScript函数，
该函数可以将中缀表达式转换为后缀表达式，然后利用栈对该表达式求值。
	考虑优先级：
	    1.先乘除
	    2.后加减
	    3.有括号先算括号里
	

    基本思路：为了完成算术表达式的计算，用到了两个栈，一个用于存放操作数，另一个用于存放操作符。

    假设：程序中定义了两个栈:numStack(用来存放操作数)、operatorStack(用于存放操作符)。
    在处理操作数和操作符之前，首先将它们压入栈中。当要处理一个操作符时，从operatorStack中将它弹出，
    然后将它应用在来自numStack的前两个操作数上，得到的结果再压入numStack中。

实现的详细步骤：

    1.扫描阶段：程序从左到右扫描表达式，提取操作数、运算符和括号。
        1)如果提取的字符是一个操作数，将它压入numStack中。
        2)如果提取的字符是一个+或-的运算符，因为+、-运算符在算术表达式中的优先级是最低的，所以此时在将+或者-运算符插入栈中之前，可以处理operatorStack栈顶的所有运算符，最后将提取出来的运算符压入operatorStack中。
        3)如果提取的字符是一个*或/的运算符，则处理operatorStack栈顶的所有*和/的运算符，最后将新提取出来的运算符压入operatorStack中。
        4)如果提取出来的运算符是一个"("，则将它压入operatorStack中。
        5)如果提取出来的运算符是一个")"，则重复处理operatorStack栈顶的运算符，直到看到栈顶的运算符为")"。
    2.清除栈阶段：重复处理来自operatorStack栈顶的运算符，直到operatorStack为空为止。

*/


/*function operatorCge(numStack,operatorStack)
{	
	let op1,op2,operator;
	op1=numStack.pop(); //取操作数的栈顶元素
	op2=numStack.pop(); //取操作数的栈顶元素
	operator=operatorStack.pop();//取操作符的栈顶元素
	switch(operator)
	{  
		case "+":
		  numStack.push(parseFloat(op2)+parseFloat(op1)); //将字符串转换成数字
		  break;
		case "-":
		  numStack.push(op2-op1);
		  break;
		case "*":
		  numStack.push(op2*op1);
		  break;
		case "/":
		  numStack.push(op2/op1);
		  break;		  		  
	}
}

function evaluateExpression(str){

let numStack=new Stack(); //存放操作数
let operatorStack=new Stack();//存放运算符

str=str.split("");

for(let i=0;i<str.length;i++)
{
	if(str[i].trim()=="") //如果字符串为空，则跳过此次循环
	{
		continue;
	}else if(str[i].trim()=="+"||str[i].trim()=="-")
	{		
		//如果字符串为“+”或“-”，则执行栈中已存数据的加减乘除
		while(!operatorStack.isEmpty() && 
			(   operatorStack.peek() == "+" || 
				operatorStack.peek() == "-" || 
				operatorStack.peek() == "*" ||
				operatorStack.peek() == "/"
			)){
                   
                operatorCge(numStack,operatorStack);
 
              }
              operatorStack.push(str[i]);
	}else if(str[i].trim()=="*"||str[i].trim()=="/")
	{	
	    //如果字符串为“+”或“-”，则执行栈中已存数据的乘除计算
		while(!operatorStack.isEmpty() && 
			  (operatorStack.peek() == "*" ||
			   operatorStack.peek() == "/"
			  )){
                  operatorCge(numStack,operatorStack);
              	  console.log("*:",numStack.peek());
              }
              operatorStack.push(str[i]);
	}else if(str[i].trim()=="(")
	{	//如果遇到左括号，则将左括号压入操作符栈中
		operatorStack.push(str[i]);
	}else if(str[i].trim()==")")
	{	//如果遇到右括号，则计算栈中的数据，直到遇到左括号为止
		while(operatorStack.peek()!="(")
		{	
			operatorCge(numStack,operatorStack);
		}
		operatorStack.pop();//将进行过计算的左括号弹出
	}else
	{	//如果遇到的是操作数，则将操作数直接压入操作数栈中
		numStack.push(str[i]);
	}

}

//对栈中数据进行计算，知道栈为空为止
while(!operatorStack.isEmpty())
{	
	operatorCge(numStack,operatorStack);
}

  return numStack.pop();

}

let str="4+5-3*9-(2+ 3 )";
let result=evaluateExpression(str);
console.log(result);//-23*/





/*3.现实生活中栈的一个例子是佩兹糖果盒。想象一下你有一盒佩兹糖果，里面塞满了红色、黄色和白色的糖果，
但是你不喜欢黄色的糖果。使用栈（有可能用到多个栈）写一段程序，在不改变盒内其他糖果叠放顺序的基础上，
将黄色糖果移出。*/

let candyBox=new Stack();
candyBox.push('red');
candyBox.push('yellow');
candyBox.push('red');
candyBox.push('yellow');
candyBox.push('white');
candyBox.push('yellow');
candyBox.push('white');
candyBox.push('yellow');
candyBox.push('white');
candyBox.push('red');

function getCandy(ele,stack)
{
	let getCandyStack=new Stack();
	let tmpCandyStack=new Stack();

	while(!stack.isEmpty())
	{
		if(stack.peek()==ele.trim())
		{
			getCandyStack.push(ele);
			stack.pop();
		}else
		{
			tmpCandyStack.push(stack.pop());
		}
	}
	while(!tmpCandyStack.isEmpty())
	{
		stack.push(tmpCandyStack.pop());
	}
}


getCandy('yellow',candyBox);

console.log("移出后:");
while(!candyBox.isEmpty())
{
	
	console.log(candyBox.pop());
}






