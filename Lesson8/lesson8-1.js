
//集合
function Set()
{
	this.dataStore=[];
	this.add=add;
	this.remove=remove;
	this.size=size;
	this.union=union; //并集
	this.interset=interset;//交集
	this.subset=subset;//子集
	this.difference=difference;
	this.show=show;
	this.contains=contains;
}

function add(data){
	if(this.dataStore.indexOf(data)<0){
		this.dataStore.push(data);
		return true;
	}else{
		return false;
	}
}


function remove(data){
	let pos=this.dataStore.indexOf(data);
	if(pos>-1){
		this.dataStore.splice(pos,1);
		return true;
	}else{
		return false;
	}
}

function size(){

}

//并集
function union(set){
	let tempSet=new Set();
	for(let i=0;i<this.dataStore.length;i++){
		tempSet.add(this.dataStore[i]);
	}
	for(let i=0;i<set.dataStore.length;i++){
		if (!tempSet.contains(set.dataStore[i])){
			tempSet.dataStore.push(set.dataStore[i]);
		}
	}
	return tempSet;
}

//交集
function interset(set){
	let tempSet=new Set();
	for(let i=0;i<this.dataStore.length;i++){
		if (set.contains(this.dataStore[i])){
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}

//子集
function subset(set){
	if(this.size()>set.size()){
		return false;
	}else{
		return this.dataStore.every((val)=>{
			   return set.contains(val)});
	}
}

//返回属于自身集合但属于set集合的成员
function difference(set){
	let tempSet=new Set();
	for(let i=0;i<this.dataStore.length;i++){
		if(!set.contains(this.dataStore[i])){
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}

function contains(data){
	if(this.dataStore.indexOf(data)>-1){
		return true;
	}else{
		return false;
	}
}

function size(){
	return this.dataStore.length;
}

function show(){
	return this.dataStore;
}




let names=new Set();
names.add('Tom');
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");

/*if(names.add("Tom")){
	console.log("Tom added success\n")
}else{
	console.log("Can't add Tom,must alerady be in set\n");
}

console.log(names.show());

if(names.remove("Jennifer")){
	console.log("removed success\n");
}else{
	console.log("removed fail\n");
}

console.log(names.show());*/

let compellations=new Set();
compellations.add("Jack");
compellations.add("Raymond");
compellations.add("Tom");
compellations.add("Jonathan");

let it=names.union(compellations);
console.log("并集:",it.show());

let inter=names.interset(compellations);
console.log("交集:",inter.show());

let dmps=new Set();
dmps.add('Tom');
dmps.add("David");
// dmps.add("Jack");
console.log("子集:",dmps.subset(names));

let diff=names.difference(compellations);
console.log("diff:",diff.show());























