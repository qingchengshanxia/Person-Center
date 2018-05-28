//点击选择查看技能的进度条；
function progressView(){
	var skills_progress=getId("skills_progress"),
		hardskill=getId("hardskill"),
		softskill=getId("softskill"),
		uls=skills_progress.getElementsByTagName("ul"),
		spans=skills_progress.getElementsByTagName('span'),
		is=skills_progress.getElementsByTagName('i'),
		length=[532,445,335,425,365,245,325,365,425,465,385,155,425,225,445,325,405,365,420];

	var intWidth=function(){
		for (var i = 0,len=spans.length; i < len; i++) {
			spans[i].style.width=70+"px";
		}
	}

	var rate=function (obj1,leng,obj2){
		clearInterval(sport);
		var step=1;
		var sport=setInterval(function(){
				var li_width=parseInt(skills_progress.clientWidth);
				obj1.style.width=obj1.clientWidth+step+"px";
				obj2.innerHTML=parseInt((parseInt(obj1.style.width)/li_width)*100)+"%";
				if (parseInt(obj1.style.width)>leng) {
					clearInterval(sport);
					obj1.style.width=leng+"px";
					obj2.innerHTML=parseInt((parseInt(leng)/li_width)*100)+"%";
				}
			},50);
	}

	var lop=function(){
		for (var i = 0,len=spans.length; i <len ; i++) {
			rate(spans[i],length[i],is[i]);
		}
	}

	lop();

	hardskill.onclick=function(){
		this.style.color="orange";
		softskill.style.color="gray";
		uls[0].style.zIndex="20";
		uls[1].style.zIndex="19";
		intWidth();
		lop();
		return false;
	}

	softskill.onclick=function(){
		this.style.color="orange";
		hardskill.style.color="gray";
		uls[1].style.zIndex="20";
		uls[0].style.zIndex="19";
		intWidth();
		lop();
		return false;
	}
}
progressView();


// 当页面打开的时候，‘背景’和‘进度条’进行偏移动画；
// class_name为类名前缀；
function cb(id,class_name){
	function comeback(ele,name){
		addClass(ele,name);
	}
	var id=getId(id);
	var cb_ul=id.getElementsByTagName('ul')[0];
	var cb_lis=cb_ul.childNodes;
	var m=[];
	for (var i = 0; i < cb_lis.length; i++) {
		if (cb_lis[i].nodeType==1) {
			m.push(cb_lis[i]);
		}
	}
	var m_l=m.length;
	for (var j = 0; j < m_l; j++) {
		comeback(m[j],class_name+j);
	}
}
cb("Mymessage","cb");
cb("personal_background","bg_p");










