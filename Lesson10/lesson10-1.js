
//邻接表数组:将边存储为由定点的相邻列表构成的数组，并以此顶点为索引
function Vertex(label)
{
	this.label=label;
	this.wasVisited=wasVisited;
}

function Graph(v){
	this.vertices=v;
	this.vertexList=[];
	this.edges=0;
	this.adj=[];
	for(let i=0;i<this.vertices;i++){
		this.adj[i]=[];
	}
	this.addEdge=addEdge;
	this.showGraph=showGraph;

	//记录已经访问过的节点
	this.marked=[];
	for(let i=0;i<this.vertices;i++){
		this.marked[i]=false;
	}
	this.dfs=dfs;
	this.bfs=bfs;
	this.edgeTo=[];
	this.pathTo=pathTo;
	this.hashPathTo=hashPathTo;
	this.topSortHelper=topSortHelper;
	this.topSort=topSort;
}

//增加边
function addEdge(v,w){
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

//深度优先搜索函数
function dfs(v){
	this.marked[v]=true;
	if(this.adj[v]){
		console.log("Visited vertex:"+v);
	}
	for(let w of this.adj[v]){
		if(!this.marked[w]){
			this.dfs(w);
		}
	}
}

//广度优先搜索函数
function bfs(s){
	let queue=[];
	this.marked[s]=true;
	// this.edgeTo[s]=this.adj[s][0];
	queue.push(s);//添加到队尾
	while(queue.length>0){
		let v=queue.shift();//从队首移除
		if(v!=undefined){
			console.log("Visited vertex: "+v);
		}
		for(let w of this.adj[v]){
			if (!this.marked[w]){
				this.edgeTo[w]=v;
				this.marked[w]=true;
				queue.push(w);
			}
		}
	}
}

/*function showGraph(){
	for(let i=0;i<this.vertices;i++){
		console.log(i+"->");
		for(let j=0;j<this.vertices;j++){
			if(this.adj[i][j]!=undefined){
				console.log(this.adj[i][j]+" ");
			}
		}
		console.log("--------");
	}
}
*/
//用于显示名字而非数字的新函数
function showGraph(){
	let visited=[];
	for(let i=0;i<this.vertices;i++){
		console.log(this.vertexList[i]+"->");
		visited.push(this.vertexList[i]);
		for(let j=0;j<this.vertices;j++){
			if(this.adj[i][j]!=undefined){
				if(visited.indexOf(this.vertexList[j])<0){
					console.log(this.vertexList[j]+" ");
				}
			}
		}
		visited.pop();
	}
}


//展示图中连接到不同顶点的路径
function pathTo(v,source=0){
	if (!this.hashPathTo(v)){
		return undefined;
	}

	let path=[];
	for(let i=v;i !=source;i=this.edgeTo[i]){
		path.push(i);
	}
	path.push(source);
	return path;
}

function hashPathTo(v){
	return this.marked[v];
}


function topSort(){
	let stack=[];
	let visited=[];
	for(let i=0;i<this.visited;i++){
		visited[i]=false;
	}
	for(let i=0;i<this.vertices;i++){
		if (visited[i]===false){
			this.topSortHelper(i,visited,stack);
		}
	}
	for(let i=0;i<stack.length;i++){
		if(stack[i]!=undefined && stack[i] !=false){
			console.log(this.vertexList[stack[i]]);
		}
	}
}


function topSortHelper(v,visited,stack){
	visited[v]=true;
	for(let w in this.adj[v]){
		if(!visited[w]){
			this.topSortHelper(visited[w],visited,stack);
		}
	}
	stack.push(v);
}



// let g=new Graph(5);
// g.addEdge(0,1);
// g.addEdge(0,2);
// g.addEdge(1,3);
// g.addEdge(2,4);
// g.addEdge(2,3);
// g.showGraph();
// // g.dfs(1);
// g.bfs(0);
// console.log(g.edgeTo);

// let paths=g.pathTo(4);
// while(paths.length>0){
// 	if (paths.length>1){
// 		console.log(paths.pop()+"-");
// 	}else{
// 		console.log(paths.pop());
// 	}
// }

let g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(0, 1);
g.vertexList = ["CS1","CS2","Data Structures","Assembly Language","Operating Systems",                 "Algorithms"];
g.showGraph();
g.topSort();







