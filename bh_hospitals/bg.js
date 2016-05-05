// check bg
var title = document.title;
var pattern = "玛丽亚|妇婴|男科|乳腺|华夏|丽人|万众|安真|福华|女子|中西医|中骏|博爱|同济|惠爱|北陵|长征|东吴|整形|美莱|妇产科|登特|天骄|股骨头|退休|华美|不孕|不育|人流|肿瘤|现代|长安|益寿|肛肠|长江|和谐|阳光|仁爱|泌尿|耳鼻喉|曙光|众彩|生殖专科|前列腺|美妇|康复|男子|女子|虹桥|皮肤病|糖尿病|友好|安康|集美|白癜风|真爱|和平|圣爱|九州|红房子|爱尔|福康|莆田|安太";
var blackHeartedPattern = new RegExp(pattern);
if(/医院/.test(title) && blackHeartedPattern.test(title)){
	alert("访问网站疑似莆田系黑心医院网站，谨防受骗！");
	new Notification("Warning:",{
		icon: "fuck.png",
		body: "访问网站疑似莆田系黑心医院网站，谨防受骗！"
	});
}