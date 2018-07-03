const List=require('./lesson5-1.js');


// List.prototype.currNode=List.find('head');


//1.向前移动n个节点
List.prototype.advance=function(n){
	while((n>0) && !(this.currNode==null))
	{
		this.currNode=this.currNode.previous;
		n--;
	}
}

//2.向后移动n个节点
List.prototype.back=function(n){

	while((n>0) && !(this.currNode==null))
	{
		this.currNode=this.currNode.next;
		n--;
	}
}

//3.只显示当前节点上的数据
List.prototype.show=function(){
	return this.currNode?this.currNode.element:'溢出';
}

/*let test=new List();
test.insert('A','head');
test.insert('B','A');
test.insert('C','B');
test.insert('D','C');
test.insert('E','D');
test.display();
console.log("向后移动三个节点");
test.back(3);
console.log(test.show());
console.log("向前移动二个节点");
test.advance(2);
console.log(test.show());*/

/*4.传说在公元 1 世纪的犹太战争中，犹太历史学家弗拉维奥·约瑟夫斯和他的40个同胞
被罗马士兵包围。犹太士兵决定宁可自杀也不做俘虏，于是商量出了一个自杀方案。他们
围成一个圈，从一个人开始，数到第三个人时将第三个人杀死，然后再数，直到杀光所有人。
约瑟夫和另外一个人决定不参加这个疯狂的游戏，他们快速地计算出了两个位置，
站在那里得以幸存。写一段程序将 n 个人围成一圈，并且第 m 个人会被杀掉，
计算一圈人中哪两个人最后会存活。使用循环链表解决该问题。*/
const cycList=require('./lesson5-2.js');

/**
 * @Author    Huang
 * @DateTime  2018-07-03
 * @param     cycList 		链表
 * @param      n       		移动数
 * @param      m      		剩余人数
 * @return             
 */
function survice(cycList,n=3,m=2)
{
	while(person.count()>m)
   {
	person.back(n);
	person.remove(person.currNode.element);
	console.log("剩余人：");
	person.display();
   }
}

let person=new cycList();
person.insert('1','head');
person.insert('2', '1');
person.insert('3', '2');
person.insert('4', '3');
person.insert('5', '4');
person.insert('6', '5');
person.insert('7', '6');
person.insert('8', '7');
person.insert('9', '8');
person.insert('10','9');

person.display();

survice(person);



