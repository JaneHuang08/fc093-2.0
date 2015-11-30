// 显示隐藏 效果

	// sub_show('navZbs');
    
	function sub_show(id){
		var oYbk=document.getElementById(id);
		var oSub= oYbk.getElementsByTagName('li');
	// var oSub=oYbk.children[2];

		for(var i = 1; i < oSub.length; i++){
			// alert(oYbk[i].children[2].innerHTML)
			(function(index){
				oSub[i].onmouseover = function(){
					for (var j = 1; j < oSub.length; j++) {					//全部子对象隐藏
						oSub[j].children[2].style.display = 'none';
					};
					oSub[index].children[2].style.display = 'block';  		//对应子对象显示
					oSub[index].children[2].style.top = oSub[index].offsetTop + 'px';				//对应子对象显示


					var oNow = oYbk.offsetHeight;							//id 的top高 和 自身高
					var oSub_h = oSub[index].children[2].offsetHeight

					if(oSub[index].offsetTop > oNow - oSub_h ){				// 验收函数
						oSub[index].children[2].style.top = oNow - oSub_h  + 'px';
					}
				};

				oSub[i].onmouseout = function(){
					this.children[2].style.display = 'none';
				};

			})(i);
		}
	};


// 模拟滚动条效果
// 函数执行文档
// go_up_down('free_box3','fcQsnk3','go_up5','go_down5')
function go_up_down(id1,id2,id3,id4){
	var oOut_box=document.getElementById(id1);
	var oContent_bd=document.getElementById(id2);
	var oGo_up=document.getElementById(id3);
	var oGo_down=document.getElementById(id4);

	var Max_down = oContent_bd.offsetHeight - oOut_box.offsetHeight +40;
		// alert(Max_down)
	var count = 0;
	oGo_up.onclick = function(){
		count += 300;
		if (count > 0) {
	
			count = 0;
		};
		move(oContent_bd,{'top':count},{duration:1000});
		
	};
	oGo_down.onclick = function(){
		count -= 300;
		if (Max_down < 0 ){
			count = 0;
			return;
		}
		if (count < -Max_down) {
			count = -Max_down
		};
		move(oContent_bd,{'top':count},{duration:1000});
		
	};
}




//  此效果 不可复用

	var oSlide = document.getElementById('slideTxtBox_1');
	var oTxtBoxHd = document.getElementById('txtBoxHd');
	var aHead_b = oTxtBoxHd.getElementsByTagName('li');


	var oTxtBoxBd = document.getElementById('txtBoxBd');
	var aFcBox = oTxtBoxBd.children;

	// alert(aFcBox.length)
	for(var i = 0; i < aHead_b.length-1; i++){
		(function(index){
			aHead_b[i].onclick = function(){
				for(var j = 0; j < aHead_b.length -1; j++){
					aFcBox[j].children[0].style.left = '15px';
					aFcBox[j].children[1].style.left = '-15px';
				}
				// aFcBox[index].children[0].style.left = '0px';
				move(aFcBox[index].children[0],{'left':0},{duration:300});

				// aFcBox[index].children[1].style.left = '0px';
				move(aFcBox[index].children[1],{'left':0},{duration:300});

			};
		})(i);
	}
	aHead_b[4].onclick = function(){
		aFcBox[4].children[0].children[0].children[0].style.left = 	'15px';
		aFcBox[4].children[0].children[0].children[1].style.left =  '-15px';
		
		move(aFcBox[4].children[0].children[0].children[0],{'left':0},{duration:300});
		move(aFcBox[4].children[0].children[0].children[1],{'left':0},{duration:300});
		
	};

//............................................................

//头像分析师 点击跳转
	var oLayout = document.getElementById('navYbk');
	var aBtn_jump = oLayout.getElementsByTagName('li');
	// alert(aBtn_jump[1].children[2].children[1].href)
	for (var i = 1; i < aBtn_jump.length; i++) {
		aBtn_jump[i].onclick = function(){
			window.open(this.children[2].children[1].href)
		};
	};







