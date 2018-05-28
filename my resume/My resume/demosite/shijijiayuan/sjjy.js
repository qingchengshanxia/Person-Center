//输入框获得焦点时，占位符消失；失去焦点时，占位符重现； 
removePlace("header-text");
(function(){
	var p_p=getId('password-placeholder'),
		h_w=getId('header-password');
	h_w.addEventListener('focus',function(){
		p_p.style.display="none";
	},false);
	h_w.addEventListener('blur',function(){
		p_p.style.display="block";
	},false);
})();