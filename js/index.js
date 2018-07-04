/*
* @Author: brand
* @Date:   2018-07-04 14:38:16
* @Email:   zhangdong@yuntianhui.com.cn
* @Last Modified time: 2018-07-04 15:10:11
*/
$(function() {
	var _data = {states:{rect1:{type:'start',text:{text:'开始'}, attr:{ x:409, y:10, width:50, height:50}, props:{text:{value:'开始'},temp1:{value:''},temp2:{value:''}}},rect2:{type:'task',text:{text:'任务1'}, attr:{ x:386, y:116, width:100, height:50}, props:{text:{value:'任务1'},assignee:{value:''},form:{value:''},desc:{value:''}}},rect3:{type:'fork',text:{text:'分支'}, attr:{ x:410, y:209, width:50, height:50}, props:{text:{value:'分支'},temp1:{value:''},temp2:{value:''}}},rect4:{type:'task',text:{text:'任务2'}, attr:{ x:192, y:317, width:100, height:50}, props:{text:{value:'任务2'},assignee:{value:''},form:{value:''},desc:{value:''}}},rect5:{type:'task',text:{text:'任务3'}, attr:{ x:385, y:317, width:100, height:50}, props:{text:{value:'任务3'},assignee:{value:''},form:{value:''},desc:{value:''}}},rect6:{type:'task',text:{text:'任务4'}, attr:{ x:556, y:320, width:100, height:50}, props:{text:{value:'任务4'},assignee:{value:''},form:{value:''},desc:{value:''}}},rect7:{type:'join',text:{text:'合并'}, attr:{ x:410, y:416, width:50, height:50}, props:{text:{value:'合并'},temp1:{value:''},temp2:{value:''}}},rect8:{type:'end',text:{text:'结束'}, attr:{ x:409, y:633, width:50, height:50}, props:{text:{value:'结束'},temp1:{value:''},temp2:{value:''}}},rect9:{type:'task',text:{text:'任务5'}, attr:{ x:384, y:528, width:100, height:50}, props:{text:{value:'任务5'},assignee:{value:''},form:{value:''},desc:{value:''}}},rect10:{type:'start',text:{text:'开始'}, attr:{ x:839, y:45, width:50, height:50}, props:{text:{value:'开始'},temp1:{value:''},temp2:{value:''}}},rect11:{type:'state',text:{text:'斯蒂芬告诉过'}, attr:{ x:820, y:198, width:100, height:50}, props:{text:{value:'斯蒂芬告诉过'},temp1:{value:'啊发发发'},temp2:{value:'2'}}},rect23:{type:'fork',text:{text:'分支'}, attr:{ x:845, y:475, width:50, height:50}, props:{text:{value:'分支'},temp1:{value:''},temp2:{value:''}}},rect24:{type:'join',text:{text:'合并'}, attr:{ x:680, y:623, width:50, height:50}, props:{text:{value:'合并'},temp1:{value:''},temp2:{value:''}}},rect25:{type:'fork',text:{text:'分支'}, attr:{ x:753, y:345, width:50, height:50}, props:{text:{value:'分支'},temp1:{value:''},temp2:{value:''}}}},paths:{path12:{from:'rect1',to:'rect2', dots:[],text:{text:'TO 任务1',textPos:{x:0,y:-10}}, props:{text:{value:''}}},path13:{from:'rect2',to:'rect3', dots:[],text:{text:'TO 分支',textPos:{x:0,y:-10}}, props:{text:{value:''}}},path14:{from:'rect3',to:'rect5', dots:[],text:{text:'TO 任务3',textPos:{x:0,y:-10}}, props:{text:{value:''}}},path15:{from:'rect5',to:'rect7', dots:[],text:{text:'TO 合并',textPos:{x:0,y:-10}}, props:{text:{value:''}}},path16:{from:'rect7',to:'rect9', dots:[],text:{text:'TO 任务5',textPos:{x:0,y:-10}}, props:{text:{value:''}}},path17:{from:'rect9',to:'rect8', dots:[],text:{text:'TO 结束',textPos:{x:0,y:-10}}, props:{text:{value:''}}},path18:{from:'rect3',to:'rect4', dots:[{x:244,y:232}],text:{text:'TO 任务2',textPos:{x:0,y:-10}}, props:{text:{value:'TO 任务2'}}},path19:{from:'rect4',to:'rect7', dots:[{x:242,y:435}],text:{text:'TO 合并',textPos:{x:0,y:-10}}, props:{text:{value:'TO 合并'}}},path20:{from:'rect3',to:'rect6', dots:[{x:607,y:234}],text:{text:'TO 任务4',textPos:{x:0,y:-10}}, props:{text:{value:'TO 任务4'}}},path21:{from:'rect6',to:'rect7', dots:[{x:607,y:439}],text:{text:'TO 合并',textPos:{x:0,y:-10}}, props:{text:{value:'TO 合并'}}},path22:{from:'rect10',to:'rect11', dots:[],text:{text:'TO 斯蒂芬告诉过',textPos:{x:0,y:-10}}, props:{text:{value:''}}}},props:{props:{}}};
	$('#myflow').myflow(
	{
		restore : _data,
		tools : {
			save : {
				onclick : function(data) {
					console.log(data)
				}
			}
		}
	});

});