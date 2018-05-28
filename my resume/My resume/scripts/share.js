// 点击某些a标签，阻止跳转；
function stopSkip(){
	var page4_hobby=getId("page4_hobby");
	page4_hobby.onclick=function(event){
		var e=event||window.event;
		var target=e.target||e.srcElement;
		if (target.tagName.toLowerCase()=="a"||target.parentNode.tagName.toLowerCase()=="a") {
			alert("非常抱歉，正在赶工建设中……");
			return false;
		}
	}
	var  web_note=getId('web_note');
	web_note.onclick=function(){
		alert("非常抱歉，正在赶工建设中……");
		return false;
	}
}
stopSkip();


// 点击某个元素的a标签，阻止跳转；
function preventA(id){
	var geta=getId(id);
	geta.onclick=function(){
		return false;
	}
}
preventA("callMe");

// 点击某个元素的a标签，阻止跳转并弹出提示；
function preventAA(id){
	var getaa=getId(id);
	getaa.onclick=function(){
		alert("非常抱歉，正在赶工建设中……");
		return false;
	}
}
preventAA("to_community");


// 打开网页时header栏目缓慢出现；
function headerDown(){
	var header=getId("header");
	tabChange(header,80).slidedown();
}
headerDown();


//下拉缓慢出现和消失；
function tabFade(el){
	var el=getId(el);
	el.style.display="block";
	var h=el.clientHeight;
	el.style.display="none";
	el.parentNode.onmouseenter=function(){  //阻止冒泡，避免重复滑动；
		tabChange(el,h).slidedown();
	}
	el.parentNode.onmouseleave=function(){
		tabChange(el,h).slideup();
	}
}
tabFade("hobby");


// 当滚动条向上时，显示header栏，当滚动条向下运动时，隐藏header栏；
function headershow(){
	var h1=document.documentElement.scrollTop||document.body.scrollTop;
	var header=getId('header');
	var h_show=function(){
		var h2=document.documentElement.scrollTop||document.body.scrollTop;
		if (h2>80){
			if (h1<h2) {
				header.className="header "+"on";
			}else{
				header.className="header";
			}
		}
		h1=h2;
	};
	window.addEventListener('scroll',h_show);
}
headershow()







