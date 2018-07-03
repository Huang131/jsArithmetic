
//节点
function Node(element)
{
	this.element=element;
	this.next=null;//向后节点的指向
	this.previous=null;//向前节点的指向
}

//对链表进行操作的方法
function List()
{
	this.head=new Node("head");
	this.find=find;
	this.findPrevious=findPrevious;
	this.findLast=findLast;
	this.insert=insert;
	this.remove=remove;
	this.display=display;
	this.dispReverse=dispReverse;
	this.currNode=this.head;
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
	newNode.previous=currNode;
	currNode.next=newNode;

}

//删除节点
function remove(item)
{
	let currNode=this.find(item);
	if (!(currNode.next==null)) {
		currNode.previous.next=currNode.next;
		currNode.next.previous=currNode.previous;
		currNode.next=null;
		currNode.previous=null;
	}

}

//查找最后的节点
function findLast()
{
	let currNode=this.head;
	while(!(currNode.next==null)){
		currNode=currNode.next;
	}
	return currNode;
}
//反序显示
function dispReverse()
{
	let currNode=this.findLast();
	while(!(currNode.previous==null))
	{
		console.log(currNode.element);
		currNode=currNode.previous;
	}
}

function display()
{
	let currNode=this.head;
	while(!(currNode.next==null)){
		console.log(currNode.next.element);
		currNode=currNode.next;
	}
}

module.exports=List;


//测试
/*let cities=new List();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display();
cities.remove("Russellville");
console.log("删除后:");
cities.display();
console.log("反序显示:");
cities.dispReverse();*/



























































