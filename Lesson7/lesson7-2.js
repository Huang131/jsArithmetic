
//线性探测法
function HashTable()
{
	this.table=new Array(137);
	this.values=[];
	this.betterHash=betterHash;
	this.showDistro=showDistro;
	this.put=put;
	this.get=get;
}

function put(key,data){
	let pos=this.betterHash(key);
	while(this.table[pos]!=undefined){
		pos++;
	}

	this.table[pos]=key;
	this.values[pos]=data;
}

function get(key){
	let pos=this.betterHash(key);
	if(this.table[pos]==key){
		return this.values[pos];
	}else{
		while(this.table[pos]&&this.table[pos]!=key){
			pos++;
		}
		return this.values[pos];
	}

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
		if (this.table[i] !=undefined) {
			console.log(i+":"+this.values[i]);
		}
	}
}




//测试
let someNames=["David","Jennifer","Donnie","Raymond",
               "Cynthia", "Mike", "Clayton", "Danny", 
               "Jonathan","Tom","Jack","Divad","Caylton"];

let hTable=new HashTable();

for(let i=0;i<someNames.length;i++){
	hTable.put(someNames[i],someNames[i]);
}
hTable.showDistro();

console.log(hTable.get('Town'));//undefined

console.log(hTable);










































