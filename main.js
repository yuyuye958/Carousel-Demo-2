let n
init()
var Timer = setTimer()

//自动无缝轮播
function setTimer(){
    return setInterval(() => {
        makeLeave($(`.images > img:nth-child(${x(n)})`)).one('transitionend', (e) => {
            makeEnter($(e.currentTarget));
        })
        makeCurrent($(`.images > img:nth-child(${x(n + 1)})`))
        n ++
    }, 3000);
}

//控制n为1~4
function x(n) {
	if (n > 4) {
		n = n % 4;
		if (n === 0) {
			n = 4;
		}
	} // n = 1 2 3 4
	return n;
}

//初始化
function init() {
	n = 1;
	$(`.images > img:nth-child(${n})`).addClass('current').siblings().addClass('enter');
}

//轮播图片进出改变样式
function makeCurrent($node) {
	return $node.removeClass('enter leave').addClass('current');
}
function makeLeave($node) {
	return $node.removeClass('enter current').addClass('leave');
}
function makeEnter($node) {
	return $node.removeClass('leave current').addClass('enter');
}

//鼠标进入停止轮播
$('.window').on('mouseenter',function(){
    window.clearInterval(Timer)
})
$('.window').on('mouseleave',function(){
    Timer = setTimer()
})