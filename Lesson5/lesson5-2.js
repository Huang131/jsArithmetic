
//循环列表

//节点
function Node(element)
{
	this.element=element;
	this.next=null;
}

//对链表进行操作的方法
function List()
{
	this.head=new Node("head");
	this.head.next=this.head;
	this.find=find;
	this.findPrevious=findPrevious;
	this.insert=insert;
	this.remove=remove;
	this.display=display;
	this.currNode=this.head;
	this.back=back;
	this.count=count;

}

//查找节点
function find(item)
{
	let currNode=this.head;
	while(currNode.element !=item)
	{
		currNode=currNode.next;
	}
	return currNode;
}

function findPrevious(item)
{
	let currNode=this.head;
	while(!(currNode.next==null)&&(currNode.next.element!=item))
	{
		currNode=currNode.next;
	}

	return currNode;
}

//插入节点
function insert(newElement,item)
{
	let newNode=new Node(newElement);
	let currNode=this.find(item);
	newNode.next=currNode.next;
	currNode.next=newNode;
}

//删除节点
function remove(item)
{
	let prevNode=this.findPrevious(item);
	if (!(prevNode.next==null)) {
		prevNode.next=prevNode.next.next;
	}

}

//向后移动n个节点
function back(n)
{
	while(n>0)
	{
		if (this.currNode.next.element=="head") {
			this.currNode=this.currNode.next.next;
		}else{
			this.currNode=this.currNode.next;
		}
		n--;
	}
}

//当前链表的元素个数
function count()
{
	let node=this.head;
	let i=0;
	while(!(node.next.element=="head"))
	{
		node=node.next;
		i++;
	}
	return i;
}

function display()
{
	let currNode=this.head;
	while(!(currNode.next==null)&&!(currNode.next.element=="head")){
		console.log(currNode.next.element);
		currNode=currNode.next;
	}
}


/*let cities = new List(); 
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display(); 
cities.remove("Carlisle");
console.log("删除后:");
cities.display()
*/

module.exports=List;



























