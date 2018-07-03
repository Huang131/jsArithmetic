
const fs=require('fs');//调用fs函数库


function Queue()
{
	this.dataStore=[];
	this.enqueue=enqueue;
	this.dequeue=dequeue;
	this.front=front;
	this.back=back;
	this.toString=toString;
	this.isEmpty=isEmpty;
}

//向队尾添加一个元素
function enqueue(ele)
{
	this.dataStore.push(ele);
}

//删除队首的元素
/*function dequeue()
{
   return this.dataStore.shift();
}*/

function front()
{
	return this.dataStore[0];
}

function back()
{
	return this.dataStore[this.dataStore.length-1];
}

/*function toString()
{
	let retStr="";
	for(let i=0;i<this.dataStore.length;i++){
		retStr +=this.dataStore[i]+"\n";
	}
	return retStr;
}*/

function isEmpty()
{
	if(this.dataStore.length<=0){
		return true;
	}else{
		return false;
	}
}

//测试
/*let q=new Queue();
q.enqueue('Tom');
q.enqueue('Jack');
q.enqueue('Cynthia');
q.enqueue('Jennifer');
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue:"+q.front());
console.log("Back of queue:"+q.back());
*/


//队列的使用:方块舞的舞伴分配问题

//武者信息存储在Dancer对象中
function Dancer(name,sex)
{
	this.name=name;
	this.sex=sex;
}

//从dancers.txt中读取舞者信息
function getDanners(males,females)
{
	let names=fs.readFileSync('dancers.txt','utf-8').split("\n");
	for(let i=0;i<names.length;i++)
	{
		names[i]=names[i].trim();//去除空格
	}
	
	for(let i=0;i<names.length;i++)
	{
		let dancer=names[i].split(" ");
		let sex=dancer[0];
		let name=dancer[1];
		if (sex=="F") {
			females.enqueue(new Dancer(name,sex));
		}else{
			males.enqueue(new Dancer(name,sex));
		}
	}

}

//配对
function dance(males,females)
{
	console.log("The dance partners are:\n");
	while(!females.isEmpty()&&!males.isEmpty()){
		let person=females.dequeue();
		console.log("Females dancer is:"+person.name);
		    person=males.dequeue();
		console.log("Males dancer is:"+person.name);		
	}
}


//测试

/*let maleDancers=new Queue();
let femaleDancers=new Queue();

getDanners(maleDancers,femaleDancers);
console.log("maleDancers:",maleDancers);
console.log("femaleDancers:",femaleDancers);
dance(maleDancers,femaleDancers);

if (!femaleDancers.isEmpty()) {
	console.log(femaleDancers.front().name+"is waiting to dance");
}
if (!maleDancers.isEmpty()) {
	console.log(maleDancers.front().name+"is waiting to dance");
}*/

//使用队列对数据进行排序
/*使用一组队列来模拟基数排序.对于0~99的数字，基数排序将数据集扫描两次。
第一次按个位上的数字进行排序，第二次按十位上的数字进行排序。
每个数字根据对应位上的数值被分在不同的盒子里。假设有如下数字：
91, 46, 85, 15, 92, 35, 31, 22*/

//将数字分配到对应队列
function distribute(nums,queues,n,digit)
{
	for(let i=0;i<n;i++){
		if(nums[i]==""|| !nums[i]){
			continue;
		}

		if(digit==1){
			queues[nums[i]%10].enqueue(nums[i]);//按个位排列
		}else{
			queues[Math.floor(nums[i]/10)].enqueue(nums[i]);//按十位排列
		}
	}
}

//从队列中收集数字
function collect(queues,nums){
	let i=0;
	for(let digit=0;digit<10;digit++){
		while(!queues[digit].isEmpty()){
			nums[i++]=queues[digit].dequeue();
		}
	}
}

//展示数组内容
function dispArray(arr){
	for(let i=0;i<arr.length;i++){
		console.log(arr[i]+" ");
	}
}

//测试
/*let queues=[];
for(let i=0;i<10;i++){
	queues[i]=new Queue();
}

let nums=[];
for(let i=0;i<10;i++){
	nums[i]=Math.floor(Math.floor(Math.random()*101));
}
//nums=[91,46,85,15,92,35,31,22];

console.log("Before redix sort:");
dispArray(nums);
distribute(nums,queues,10,1);
collect(queues,nums);
distribute(nums,queues,10,10);
collect(queues,nums);
console.log("After redix sort:");
dispArray(nums);*/

//优先队列
/*医院急诊科(Emergency Department)的候诊室，就是一个采取优先队列的例子。
当病人进入候诊室时，分诊护士会评估患者病情的严重程度，然后给一个优先级代码。
高优先级的患者先于低优先级的患者就医，同样优先级的患者按照先来先服务的顺序就医。*/

//定义患者对象
function Patient(name,code)
{
	this.name=name;
	this.code=code;
}

//重新定义dequeue方法，code小的元素优先级高
function dequeue()
{
	let priority=0;
	for(let i=0;i<this.dataStore.length;i++){
		if(this.dataStore[i].code<this.dataStore[priority].code){
			priority=i;
		}
	}
	return this.dataStore.splice(priority,1);
}

//重新定义toString方法
function toString(){
	let retVar="";
	for(let i=0;i<this.dataStore.length;i++){
		retVar +=this.dataStore[i].name+" code:"
			   +this.dataStore[i].code+"\n";
	}
	return retVar;
}

let ed=new Queue();
let p=new Patient('Tom',5);
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p); 

console.log(ed.toString());
while(!ed.isEmpty())
{
	let seen=ed.dequeue();
	console.log("Patient being treated:"+seen[0].name);
	console.log("Patient waiting to be seen:")
	console.log(ed.toString());
}

























