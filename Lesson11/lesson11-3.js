const CArray=require("./lesson11-1.js");


//希尔排序
CArray.prototype.shellsort=function(){
	let len=this.dataStore.length,temp,gap=1;

	while(gap<len/5){ //动态定义间隔序列
		gap=gap*5+1;
	}

	for(gap;gap>0;gap=Math.floor(gap/5)){
		// console.log("gap:",gap);
		for(let i=gap;i<len;i++){
			temp=this.dataStore[i];
			// console.log("i:",i);
			for(var j=i-gap;j>=0 && this.dataStore[j]>temp;j-=gap){
				this.dataStore[j+gap]=this.dataStore[j];
			}
			this.dataStore[j+gap]=temp;
		}
	}

}

//归并排序
CArray.prototype.mergeSort=function(arr){
	if (arr.length<2){
		return arr;
	}
	let middle=Math.floor(arr.length/2),
		left  =arr.slice(0,middle),
		right =arr.slice(middle);
	return this.mergeArrays(this.mergeSort(left),this.mergeSort(right));
}

CArray.prototype.mergeArrays=function(left,right){
	 let result=[];
	 while(left.length&&right.length){
	 	if (left[0]<=right[0]){
	 		result.push(left.shift());
	 	}else{
	 		result.push(right.shift());
	 	}
	 }
	 while(left.length){
	 	result.push(left.shift());
	 }

	 while(right.length){
	 	result.push(right.shift());
	 }
	 return result;
}

//快速排序
CArray.prototype.qSort=function(list){
	if(list.length==0){
		return [];
	}
	let lesser=[],greater=[],pivot=list[0];
	for(let i=1;i<list.length;i++){
		if(list[i]<pivot){
			lesser.push(list[i]);
		}else{
			greater.push(list[i]);
		}
	}
	return this.qSort(lesser).concat(pivot,qSort(greater));
}




let nums = new CArray(1000);
nums.setData();

let a=nums;
a.dataStore=nums.dataStore.slice();

let b=nums;
b.dataStore=nums.dataStore.slice();

let c=nums;
c.dataStore=nums.dataStore.slice();

console.time("希尔排序");
a.shellsort();
console.timeEnd("希尔排序");



console.time("归并排序");
b.dataStore=b.mergeSort(b.dataStore);
console.timeEnd("归并排序");

console.time("快速排序");
c.dataStore=c.mergeSort(c.dataStore);
console.timeEnd("快速排序");




