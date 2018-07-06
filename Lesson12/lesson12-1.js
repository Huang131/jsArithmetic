
//动态规划实例:计算斐波那契数列

//执行效率低，许多值在递归调用中被重新计算
function recurFib(n){
	if (n<2){
		return n;
	}else{
		return recurFib(n-1)+recurFib(n-2);
	}

}


function dynFib(n){
	let val=[];
	for(let i=0;i<=n;i++){
		val[i]=0;
	}
	if(n<2){
		return n;
	}else{
		val[1]=1;
		val[2]=1;
		for(let i=3;i<=n;i++){
			val[i]=val[i-1]+val[i-2];
		}
		return val[n];
	}
}

function iterFib(n){
	if (n<2){
		return n;
	}
	let last=nextLast=result=1;
	for(let i=2;i<n;i++){
		result=last+nextLast;
		nextLast=last;
		last=result;
	}
	return result;
}


//动态规划-寻找最长公共子串
function lcs(word1,word2){
	let max=0;
	let index=0;
	let lcsarr=new Array(word1.length+1);
	for(let i=0;i<word1.length+1;i++){
		lcsarr[i]=new Array(word2.length+1);
		for(let j=0;j<word2.length+1;j++){
			lcsarr[i][j]=0;
		}
	}

	for(let i=0;i<=word1.length;i++){
		for(let j=0;j<=word2.length;j++){

			if(i==0 || j==0){
				lcsarr[i][j]=0;
			}else{
				if(word1[i-1]==word2[j-1]){
					lcsarr[i][j]=lcsarr[i-1][j-1]+1;
				}else{
					lcsarr[i][j]=0;
				}
			}

			if (max<lcsarr[i][j]){
				max=lcsarr[i][j];
				index=i;
			}
			
		}
	}
    // console.log(lcsarr);
    // console.log(max);
    // console.log(index);
	let str="";
	if (max==0){
		return ;
	}else{
		for(let i=index-max;i<index;i++){
			str +=word1[i];
		}
		return str;
	}
}


let word1="asddcffdfa1234567",word2="as113344dcffdf1234567";

console.log(lcs(word1,word2));





// let n=1000000000;

/*console.time("dynFib");
console.log(dynFib(n));
console.timeEnd("dynFib");*/

/*console.time("iterFib");
console.log(iterFib(n));
console.timeEnd("iterFib");*/

/*console.time("recurFib");
console.log(recurFib(n));
console.timeEnd("recurFib");*/












