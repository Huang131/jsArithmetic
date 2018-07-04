
function Node(data,left=null,right=null)
{
	this.data=data;
	this.count=1;
	this.left=left;
	this.right=right;
	this.show=show;
}

function show(){
	return this.data;
}

function BST(){
	this.root=null;
	this.insert=insert;
	this.inOrder=inOrder;
	this.preOrder=preOrder;
	this.postOrder=postOrder;
	this.getMin=getMin;
	this.getMax=getMax;
	this.find=find;
	this.remove=remove;
	this.removeNode=removeNode;
	this.getSmallest=getSmallest;
	this.update=update;
}

function update(data){
	let grade=this.find(data);
	grade.count++;
	return grade;
}

function insert(data){
	let n=new Node(data);
	if(this.root==null){
		this.root=n;
	}else{
		let current=this.root;
		let parent;
		while(true){
			parent=current;
			if(data<current.data){
				current=current.left;
				if (current==null) {
					parent.left=n;
					break;
				}
			}else{
				current=current.right;
				if(current==null){
					parent.right=n;
					break;
				}
			}
		}// end of while
	}
}

//中序遍历:左子树 根节点 右子树
function inOrder(node){
	if(node){
		inOrder(node.left);
		console.log(node.show()+" ");
		inOrder(node.right);
	}
}

//先序遍历:根节点 左子树 右子树
function preOrder(node){
	if (node) {
		console.log(node.show()+" ");
		preOrder(node.left);
		preOrder(node.right);
	}
}

//后续遍历:左子树 右子树 根节点
function postOrder(node){
	if(node){
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show()+" ");
	}
}

//查找BST最小值
function getMin(){
	let current=this.root;
	while(current.left){
		current=current.left;
	}
	return current.data;
}

//查找BST最大值
function getMax(){
	let current=this.root;
	while(current.right){
		current=current.right;
	}
	return current.data;
}

//查找定值
function find(data){
	let current=this.root;
	while(current){
		if(current.data==data){
			return current;
		}else if(data<current.data){
			current=current.left;
		}else{
			current=current.right;
		}
	}
	return null;
}

function getSmallest(node){
	if(node.left==null){
		return node;
	}else{
		return getSmallest(node.left);
	}
}

//删除节点
function remove(data){
	removeNode(this.root,data);
}

function removeNode(node,data){
	if(node==null) return null;

	if(data==node.data){
		//没有子节点的节点
		if(node.left==null && node.right==null){
			return null;
		}
		//没有左子节点的节点
		if(node.left==null){
			return node.right;
		}
		//没有右子节点的节点
		if(node.right==null){
			return node.left;
		}
		//有两个子节点的节点
		let tempNode=getSmallest(node.right);//查找右子树上的最小值
		node.data=tempNode.data;
		node.right=removeNode(node.right,tempNode.data);
		return node;
	}else if(data<node.data){
		node.left=removeNode(node.left,data);
		return node;
	}else {
		node.right=removeNode(node.right,data);
		return node;
	}
}


function prArray(arr){
	for(let i=0;i<arr.length;i++){
		console.log(arr[i].toString()+" ");
	}
}

function genArray(length){
	let arr=[];
	for(let i=0;i<length;i++){
		arr[i]=Math.floor(Math.random()*101);
	}
	return arr;
}



//测试遍历
/*let nums=new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);*/
/*console.log("Inorder traversal:");
inOrder(nums.root);
console.log("preorder traversal:");
preOrder(nums.root);
console.log("postorder traversal:");
postOrder(nums.root);*/

/*console.log("The minimum value of the BST is:"+nums.getMin());
console.log("The maximum value of the BST is:"+nums.getMax());
*/

// console.log(nums.find(37));

/*inOrder(nums.root);
console.log(nums.remove(3));
console.log("删除后:");
inOrder(nums.root);
*/


let grades=genArray(100);
console.log(grades.join(" "));
let gradeistro=new BST();
for(let i=0;i<grades.length;i++){
	let g=grades[i];
	if(!gradeistro.find(g)){
		gradeistro.insert(g);
	}else{
		gradeistro.update(g);
	}
}

console.log("count:",gradeistro.find(47).count);



