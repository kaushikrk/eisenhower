var state= {
	cilist:[],cnimplist:[],ncimplist:[],ncnimplist:[]
};
var icon="<i class=\"fa fa-remove float-right\" onclick=\"removeItem(event)\"></i>";
var listValues=[];

$(document).ready(function(){
	/*Make the list sortable*/
	Sortable.create(cilist, { /* options */ });
	Sortable.create(cnimplist, { /* options */ });
	Sortable.create(ncimplist, { /* options */ });
	Sortable.create(ncnimplist, { /* options */ });
	
/* Initialize list from localStorage*/	
  loadItemsFromLocal();
  
});
function onEnter(event){
	if (event.keyCode == 13) {
         console.log(event);
		 console.log(event.srcElement.id);
		 switch(event.srcElement.id){
			 case "ci":{
			 //state.ci.push(event.srcElement.value);
			 //localStorage.setItem("ci",ci);
             updateList("cilist",event.srcElement.value);
			 break;	 
			 };
			 case "cnimp":{
			 //state.cnimp.push(event.srcElement.value);
             updateList("cnimplist",event.srcElement.value);
			 break;
			 };
			 case "ncimp":{
			 //state.ncimp.push(event.srcElement.value);
             updateList("ncimplist",event.srcElement.value);
			 break;	 
			 };
			 case "ncnimp":{
			 //state.ncnimp.push(event.srcElement.value);
             updateList("ncnimplist",event.srcElement.value);
			 break;		 
			 };
         }
         return true;
      } 
}
function updateList(listId,content){
	
	$("#"+listId).append("<li>"+content+icon+"</li>");
}
function loadItemsFromLocal(type,listString){
	var state=localStorage.getItem("state");
	state=JSON.parse(state);
	state.cilist.forEach((item)=>{updateList("cilist",item)});
	state.cnimplist.forEach((item)=>{updateList("cnimplist",item)});
	state.ncimplist.forEach((item)=>{updateList("ncimplist",item)});
	state.ncnimplist.forEach((item)=>{updateList("ncnimplist",item)});
	
}
function removeItem(ev){
	$(event.target).parent().remove();
}

$("#save").click(function(btn){
	$("#cilist").children("li").toArray().forEach(getListValues);
	state.cilist=(listValues);
	listValues=[];
	state.cnimplist=$("#cnimplist").children("li").toArray().forEach(getListValues);
	state.cnimplist=(listValues);
	listValues=[];
	state.ncimplist=$("#ncimplist").children("li").toArray().forEach(getListValues);
	state.ncimplist=(listValues);
	listValues=[];
	state.ncnimplist=$("#ncnimplist").children("li").toArray().forEach(getListValues);
	state.ncnimplist=(listValues);
	listValues=[];
	localStorage.setItem("state", JSON.stringify(state));
})
function getListValues(item){
	console.log($(item).text());
	listValues.push($(item).text());
}