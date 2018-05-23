var selectChooseDom = document.getElementsByClassName('select-choose')[0];
var selectChoosesDom = document.getElementsByClassName('select-chooses')[0];
var selectPDom = document.getElementsByClassName('select-p')[0];
var selectMenuDoms = document.getElementsByClassName('select-menu');
var navPicDom = document.getElementsByClassName('nav-pic')[0];
var navLiDoms = document.getElementsByClassName('nav-li');
var navLiDom = Array.prototype.slice.call(navLiDoms);	
var navPageDoms = document.getElementsByClassName('nav-page');
var navPageDom = Array.prototype.slice.call(navPageDoms);
var selectionDom = document.getElementsByClassName('selection')[0];
var selectMenuDom = Array.prototype.slice.call(selectMenuDoms);	
var nowAddressDom = document.getElementsByClassName('now-address')[0];
var userCommunityDoms = document.getElementsByClassName('user-community');
var userCommunityDom = Array.prototype.slice.call(userCommunityDoms);	
var guoquanDom = document.getElementsByClassName('guoquan')[0];
var guotieDom = document.getElementsByClassName('guotie')[0];
var communityGuoquanDom = document.getElementsByClassName('community-guoquan')[0];
var aspectDoms = document.getElementsByClassName('aspect');
var aspectDom = Array.prototype.slice.call(aspectDoms);	
var tuijianBnDom = document.getElementsByClassName('tuijian-bn')[0];
var communityGuotieDom = document.getElementsByClassName('community-guotie')[0];
var pageDoms = document.getElementsByClassName('page');
var pageDom = Array.prototype.slice.call(pageDoms);
var gameTypeDoms = document.getElementsByClassName('game-type');
var gameTypeDom = Array.prototype.slice.call(gameTypeDoms);
var menuDoms = document.getElementsByClassName('menu');	
var menuDom = Array.prototype.slice.call(menuDoms);
var tablesDoms = document.getElementsByClassName('tables');	
var tablesDom = Array.prototype.slice.call(tablesDoms);

// banner图
var bannerLDom = document.getElementsByClassName('banner-l')[0];
var gameBannerDom = document.getElementsByClassName('game-banner')[0];
var bannerRDom = document.getElementsByClassName('banner-r')[0];
var bannerCDom = document.getElementsByClassName('banner-c')[0];



// 滑块
var bannerCDom = document.getElementsByClassName('banner-c')[0];
var bannerSclDom = document.getElementsByClassName('banner-scl')[0];

var bannerRLDom = document.getElementsByClassName('banner-r-l')[0];
var gameRBDom = document.getElementsByClassName('game-r-b')[0];
var bannerRRDom = document.getElementsByClassName('banner-r-r')[0];
var changeDom = document.getElementsByClassName('change')[0];
// game热点
var chooseMDoms = document.getElementsByClassName('choose-m');
var chooseMDom = Array.prototype.slice.call(chooseMDoms);
var gameNewDoms = document.getElementsByClassName('game-new');
var gameNewDom = Array.prototype.slice.call(gameNewDoms);

// 排行榜
var levelDayDoms = document.getElementsByClassName('level-day');
var  levelDayDom = Array.prototype.slice.call( levelDayDoms);
var levelLeDoms = document.getElementsByClassName('level-le');
var  levelLeDom = Array.prototype.slice.call( levelLeDoms);

// 头条banner图
var touLeftDom = document.getElementsByClassName('tou-left')[0];
var touRightDom = document.getElementsByClassName('tou-right')[0];
var touBannerDom = document.getElementsByClassName('tou-banner')[0];
var pointDoms = document.getElementsByClassName('point');
var pointDom = Array.prototype.slice.call( pointDoms);

var zixunMenuDoms = document.getElementsByClassName('zixun-menu');
var zixunMenuDom = Array.prototype.slice.call( zixunMenuDoms);

var menusDoms = document.getElementsByClassName('menus');
var menusDom = Array.prototype.slice.call( menusDoms);





var index = 0;
function css(dom,obj){
	for(var k in obj){
		dom.style[k] = obj[k];
	}
}
navLiDom.forEach(function(e,i){
	e.addEventListener('mouseover',function(){
		css(e,{
			'background-color':'#383d50'
		});
	},false);
	e.addEventListener('mouseout',function(){
		css(e,{
			'background-color':'#292e41'
		});
	},false);
	e.addEventListener('click',function(){
		nowAddressDom.innerHTML = e.innerHTML;
	},false);

	
});
navPageDom.forEach(function(e,i){
	e.addEventListener('click',function(){
		for(var x = 0; x < 5;x++){
			if(x == i){
				pageDom[x].style.display = 'block';
			}else{
				pageDom[x].style.display = 'none';
			}
		}
	},false);
});


selectChooseDom.addEventListener('mouseover',function(){
	css(selectChoosesDom,{
		'visibility':'visible'
	});
},false);
selectChooseDom.addEventListener('mouseout',function(){
	css(selectChoosesDom,{
		'visibility':'hidden'
	});
},false);

selectMenuDom.forEach(function(e,i){
	e.addEventListener('click',function(){
		selectPDom.innerHTML = e.innerHTML;
	},false);
});

navPicDom.addEventListener('click',function(){
	css(navPicDom,{
		'visibility':'hidden'
	});
	css(selectionDom,{
		'overflow':'visible',
		'width':'300px'
	});
},false);

userCommunityDom.forEach(function(e,i){
	e.addEventListener('mouseover',function(){
		css(e,{
			'background-color':'#292e41'
		});
	},false);
	e.addEventListener('mouseout',function(){
		css(e,{
			'background-color':'#33394d'
		});
	},false);
});

guotieDom.addEventListener('click',function(){
	css(communityGuoquanDom,{
		'display':'none'
	});
	css(guoquanDom,{
		'border-bottom':'none'
	});
	css(guotieDom,{
		'border-bottom':'3px solid #ff6900'
	});
	css(communityGuotieDom,{
		'display':'block'
	});
},false);
guoquanDom.addEventListener('click',function(){
	css(communityGuoquanDom,{
		'display':'block'
	});
	css(guoquanDom,{
		'border-bottom':'3px solid #ff6900'
	});
	css(guotieDom,{
		'border-bottom':'none'
	});
	css(communityGuotieDom,{
		'display':'none'
	});
},false);


aspectDom.forEach(function(e,i){
	if(i == 0){
		e.addEventListener('click',toLeft,false);
	}else if( i == 1){
		e.addEventListener('click',toRight,false);
	}
});

function toLeft(){
	index++;
	if(index <= 2){
		tuijianBnDom.style.left = -1 * 790 * index + 'px';
	}
	if(index > 2){
		index = 2;
	}

	console.log(index);
}
function toRight(){
	index--;
	if(index >= 0){
		tuijianBnDom.style.left = -1 * 790 * index + 'px';
	}
	if(index < 0){
		index = 0;
	}
}

gameTypeDom.forEach(function(e,i){
	e.addEventListener('click',function(ev){
			for(var x = 0; x < 5 ;x++){
				if( i == x){
					menuDom[x].style.height = 153 +'px';
				}else{
					menuDom[x].style.height =0;
				}
			}
	},false);
});



// 游戏轮播图左滑动
var flag = 0;
bannerLDom.addEventListener('click',function(){
	clearInterval(ccc);
	flag--;
	if(flag < 0){
		flag = 11;
	}
	gameBannerDom.style.left = -1*665*flag +'px';
	bannerSclDom.style.left = 47.25 * flag +'px';
	ccc();
},false);
bannerRDom.addEventListener('click',function(){
	flag++;
	if(flag > 11){
		flag = 0;
	}
	gameBannerDom.style.left = -1*665*flag +'px';
	bannerSclDom.style.left = 47.25 * flag +'px';
},false);

// 滑块

bannerCDom.addEventListener('click',function(ev){
	var pointX = ev.offsetX,
	pointall = bannerSclDom.offsetWidth;
	changeX = (pointX / pointall).toFixed(0);
	if(changeX < 12){
		bannerSclDom.style.left = 47.25 * changeX +'px';
		gameBannerDom.style.left = -1 * 665 * changeX +'px';
	}
	if(changeX == 12){
		bannerSclDom.style.left = 47.25 * 11 +'px';
		gameBannerDom.style.left = -1 * 665 * 11 +'px';
	}


},false);

// 计时器轮播
ccc = setInterval(function(){
	flag++;
	if (flag > 11) {
		flag = 0;
	}
	index++;
	if (index > 4) {
		index = 0;
		
	}
	for(var x = 0;x <= 4; x++){
			if( x == index){
				pointDom[x].style.backgroundColor = '#fff';
			}else{
				pointDom[x].style.backgroundColor = '#b5b5b5';
			}
		}
	gameBannerDom.style.left = -1 * 665 * flag +'px';
	touBannerDom.style.left = -1 * 1903 * index +'px';
	bannerSclDom.style.left = 47.25 * flag + 'px';

},3000);


bannerRLDom.addEventListener('click',function(){
	flag--;
	if(flag < 0){
		flag = 3;
	}
	gameRBDom.style.left = -1 * 265 * flag +'px';
	changeDom.innerHTML = flag+1;
},false);
bannerRRDom.addEventListener('click',function(){
	flag++;
	if(flag > 3){
		flag = 0;
	}
	gameRBDom.style.left = -1 * 265 * flag +'px';
	changeDom.innerHTML = flag+1;
},false);

chooseMDom.forEach(function(e,i){
	e.addEventListener('click',function(){
		for(var x = 0; x < 3; x++){
			if(i == x){
				css(chooseMDom[x],{
					'background-color':'#9b9da0'
				});
				css(gameNewDom[x],{
					'visibility':'visible'
				});
			}else{
				css(chooseMDom[x],{
					'background-color':'#393d42'
				});
				css(gameNewDom[x],{
					'visibility':'hidden'
				});
			}
		
		}
	},false);
});

levelDayDom.forEach(function(e,i){
	if( i == 0){
		e.addEventListener('click',function(){
			css(levelLeDom[0],{
				'visibility':'visible'
			});
			css(levelLeDom[1],{
				'visibility':'hidden'
			});
		},false); 
	}else{
		e.addEventListener('click',function(){
			css(levelLeDom[1],{
				'visibility':'visible'
			});
			css(levelLeDom[0],{
				'visibility':'hidden'
			});
		},false); 
	}
});

touLeftDom.addEventListener('click',function(){
	index--;
	if (index < 0) {
		index = 4;
	}

	touBannerDom.style.left = -1 * 1903 * index +'px'; 
},false);
touRightDom.addEventListener('click',function(){
	index++;
	if (index > 4) {
		index = 0;
	}
	touBannerDom.style.left = -1 * 1903 * index +'px'; 
},false);

pointDom.forEach(function(e,i){
	e.addEventListener('click',function(){
		touBannerDom.style.left = -1 * 1903 * i +'px'; 
		css(e,{
			'background-color':'#fff'
		});
},false);	
});

zixunMenuDom.forEach(function(e,i){
	e.addEventListener('click',function(){
		for(var x = 0; x < 5;x++){
			if( x == i){
				zixunMenuDom[x].style.backgroundColor = '#fff';
				zixunMenuDom[x].style.borderTop =  '2px solid #eb6100';
				menusDom[x].style.display = 'block';
			}else{
				zixunMenuDom[x].style.backgroundColor = '#f7f7f7';
				zixunMenuDom[x].style.borderTop =  '2px solid #f7f7f7';
				menusDom[x].style.display = 'none';
			}
		}
	},false);
});


// 登录方式
var loginWayDoms = document.getElementsByClassName('login-way'); 
var loginWayDom = Array.prototype.slice.call(loginWayDoms);
var loginStyleDoms = document.getElementsByClassName('login-style');
var loginStyleDom = Array.prototype.slice.call(loginStyleDoms);

// 注册方式
var zuceWayDoms = document.getElementsByClassName('zuce-way');
var zuceWayDom  = Array.prototype.slice.call(zuceWayDoms );
var zuceAllDoms = document.getElementsByClassName('zuce-all');
var zuceAllDom  = Array.prototype.slice.call(zuceAllDoms);

 loginWayDom.forEach(function(e,i){
 	 loginWayDom[0].addEventListener('click',function(){
 		loginStyleDom[1].style.display = 'block';
 		loginStyleDom[0].style.display = 'none';
 	},false);
 	  loginWayDom[1].addEventListener('click',function(){
 		loginStyleDom[0].style.display = 'block';
 		loginStyleDom[1].style.display = 'none';
 	},false);
 });

 zuceWayDom[0].addEventListener('click',function(){
 	css(zuceAllDom[0],{
 		'display':'block'
 	})
 	css(zuceAllDom[1],{
 		'display':'none'
 	})
 },false);

  zuceWayDom[1].addEventListener('click',function(){
 	css(zuceAllDom[1],{
 		'display':'block'
 	})
 	css(zuceAllDom[0],{
 		'display':'none'
 	})
 },false);