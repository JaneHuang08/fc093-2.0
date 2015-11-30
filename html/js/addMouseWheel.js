
function addMouseWheel(obj,fn){//接div,接函数
	if(navigator.userAgent.indexOf('Firefox') != -1){
		obj.addEventListener('DOMMouseScroll',fnWheel,false); //火狐需要事件绑定
	}else{
		obj.onmousewheel=fnWheel;		//低版本
	}
	
	function fnWheel(ev){
		var oEvt=ev||event;
		var down=true;
		if(oEvt.wheelDelta){
			down = oEvt.wheelDelta<0?true:false;
		}else{
			down = oEvt.detail>0?true:false;
		}
		
		//开始办事
		fn(down);//调用传入的函数，并把处理好的down传过去
		
		oEvt.preventDefault && oEvt.preventDefault()	
		return false;
	}

};
