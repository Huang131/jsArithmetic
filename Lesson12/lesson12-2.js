
//背包问题:递归解决方案

function max(a,b){
	return (a>b)?a:b;
}

function knapsack(capacity,size,value,n){
	if(n==0||capacity==0){
		return 0;
	}
	if(size[n-1]>capacity){
		return knapsack(capacity,size,value,n-1);
	}else{
		return max(value[n-1]+knapsack(capacity-size[n-1],size,value,n-1),
							  knapsack(capacity,size,value,n-1));
	}
}

//动态规划
function dknapsack(weights,values,W){
	let n=weights.length;
	let k=new Array(n);
	    k[-1]=new Array(W+1).fill(0);
	for(let i=0;i<n;i++){ //注意边界，无等号
		k[i]=new Array(W).fill(0);
		for(let j=0;j<=W;j++){//注意边界，有等号
			if (j<weights[i]){//注意边界，没有等号
				k[i][j]=k[i-1][j];
			}else{
				 k[i][j] = Math.max(k[i-1][j],k[i-1][j-weights[i]]+values[i]);
			}
		}
	}
	return k[n-1][W];
}











  let value = [4, 5, 10, 11, 13];//物品价值
  let size = [3, 4, 7, 8, 9];//物品大小
  let capacity = 16;//背包容量
  let n = 5;		//物品件数
  console.log(knapsack(capacity, size, value, n));
  console.log(dknapsack(size,value,capacity));










