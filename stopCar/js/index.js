window.onload=function(){
	// 页面加载完成后执行
	let $time=$('.time')
	let $date=$('.date')
	function updateTime(){
		let date=new Date()
		let nowdate=date.getFullYear()+'年'+((date.getMonth()+1)<10?'0'+(date.getMonth()+1):(date.getMonth()+1))+'月'+(date.getDate()<10?'0'+date.getDate():date.getDate())+'日'
		$date.html(nowdate)
		let h=date.getHours()
		let m=date.getMinutes()
		let s=date.getSeconds()
		let nowtime=(h<10?'0'+h:h)+':'+(m<10?'0'+m:m)+':'+(s<10?'0'+s:s)
		$time.html(nowtime)
	}
	let t=setInterval(updateTime,1000)
	 








	
}
