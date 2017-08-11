////////////////////////////////////////////////////// foods
var a=1;		var b=1;		var c=1;		var d=1;
var a1=30;		var b1=25;		var c1=20;		var d1=25;
var a2=1;		var b2=1;		var c2=1;		var d2=1;
////////////////////////////////////////////////////// drinks
var e=1;		var f=1;		var g=1;		var h=1;
var e2=1;		var f2=1;		var g2=1;		var h2=1;
var hotdrinks=8.99;

var i=1;		var j=1;		var k=1;		var l=1;
var i2=1;		var j2=1;		var k2=1;		var l2=1;
var colddrinks=10;
////////////////////////////////////////////////////// desserts
var m=1;		var n=1;		var o=1;		var p=1;
var m2=1;		var n2=1;		var o2=1;		var p2=1;
var desserts=12;
var gst=1.06;
/////////////////////////////////////////////////////////////////////// click1
$('.add').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click1") {
		$('.b1').show();
		$('.a1').show().html(a++);
		$('.c1').show().html(a1*(a2++));
	}
});
$('.min').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click1") {
		$('.b1').show();
		$('.a1').html(--a);
		$('.c1').html(a1*(--a2));
	}
	if (a<=0) {
		a++;
		$('.b1').hide();
		$('.a1').hide();
		$('.c1').hide();
	}
	if (a2<=0) {
		a2++;
	}
	
});
/////////////////////////////////////////////////////////////////////// click2
$('.add').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click2") {
		$('.b2').show();
		$('.a2').show().html(b++);
		$('.c2').show().html(b1*(b2++));
	}
});
$('.min').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click2") {
		$('.b2').show();
		$('.a2').html(--b);
		$('.c2').html(b1*(--b2));
	}
	if (b<=0) {
		b++;
		$('.b2').hide();
		$('.a2').hide();
		$('.c2').hide();
	}
	if (b2<=0) {
		b2++;
	}
	
});
/////////////////////////////////////////////////////////////////////// click3
$('.add').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click3") {
		$('.b3').show();
		$('.a3').show().html(c++);
		$('.c3').show().html(c1*(c2++));
	}
});
$('.min').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click3") {
		$('.b3').show();
		$('.a3').html(--c);
		$('.c3').html(c1*(--c2));
	}
	if (c<=0) {
		c++;
		$('.b3').hide();
		$('.a3').hide();
		$('.c3').hide();

	}
	if (c2<=0) {
		c2++;
	}
	
});
/////////////////////////////////////////////////////////////////////// click4
$('.add').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click4") {
		$('.b4').show();
		$('.a4').show().html(d++);
		$('.c4').show().html(d1*(d2++));
	}
});
$('.min').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click4") {
		$('.b4').show();
		$('.a4').html(--d);
		$('.c4').html(d1*(--d2));
	}
	if (d<=0) {
		d++;
		$('.b4').hide();
		$('.a4').hide();
		$('.c4').hide();
	}
	if (d2<=0) {
		d2++;
	}
	
});
/////////////////////////////////////////////////////////////////////// click5
$('.add').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click5") {
		$('.b5').show();
		$('.a5').show().html(e++);
		$('.c5').show().html(hotdrinks*(e2++));
	}
});
$('.min').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click5") {
		$('.b5').show();
		$('.a5').html(--e);
		$('.c5').html(hotdrinks*(--e2));
	}
	if (e<=0) {
		e++;
		$('.b5').hide();
		$('.a5').hide();
		$('.c5').hide();
	}
	if (e2<=0) {
		e2++;
	}
	
});
/////////////////////////////////////////////////////////////////////// click6
$('.add').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click6") {
		$('.b6').show();
		$('.a6').show().html(f++);
		$('.c6').show().html(hotdrinks*(f2++));
	}
});
$('.min').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click6") {
		$('.b6').show();
		$('.a6').html(--f);
		$('.c6').html(hotdrinks*(--f2));
	}
	if (f<=0) {
		f++;
		$('.b6').hide();
		$('.a6').hide();
		$('.c6').hide();
	}
	if (f2<=0) {
		f2++;
	}
	
});
/////////////////////////////////////////////////////////////////////// click7
$('.add').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click7") {
		$('.b7').show();
		$('.a7').show().html(g++);
		$('.c7').show().html(hotdrinks*(g2++));
	}
});
$('.min').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click7") {
		$('.b7').show();
		$('.a7').html(--g);
		$('.c7').html(hotdrinks*(--g2));
	}
	if (g<=0) {
		g++;
		$('.b7').hide();
		$('.a7').hide();
		$('.c7').hide();
	}
	if (g2<=0) {
		g2++;
	}
	
});
/////////////////////////////////////////////////////////////////////// click8
$('.add').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click8") {
		$('.b8').show();
		$('.a8').show().html(h++);
		$('.c8').show().html(hotdrinks*(h2++));
	}
});
$('.min').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click8") {
		$('.b8').show();
		$('.a8').html(--h);
		$('.c8').html(hotdrinks*(--h2));
	}
	if (h<=0) {
		h++;
		$('.b8').hide();
		$('.a8').hide();
		$('.c8').hide();
	}
	if (h2<=0) {
		h2++;
	}
	
});
/////////////////////////////////////////////////////////////////////// click9
$('.add').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click9") {
		$('.b9').show();
		$('.a9').show().html(i++);
		$('.c9').show().html(colddrinks*(i2++));
	}
});
$('.min').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click9") {
		$('.b9').show();
		$('.a9').html(--i);
		$('.c9').html(colddrinks*(--i2));
	}
	if (i<=0) {
		i++;
		$('.b9').hide();
		$('.a9').hide();
		$('.c9').hide();
	}
	if (i2<=0) {
		i2++;
	}
	
});
/////////////////////////////////////////////////////////////////////// click10
$('.add').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click10") {
		$('.b10').show();
		$('.a10').show().html(j++);
		$('.c10').show().html(colddrinks*(j2++));
	}
});
$('.min').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click10") {
		$('.b10').show();
		$('.a10').html(--j);
		$('.c10').html(colddrinks*(--j2));
	}
	if (j<=0) {
		j++;
		$('.b10').hide();
		$('.a10').hide();
		$('.c10').hide();
	}
	if (j2<=0) {
		j2++;
	}
	
});

/////////////////////////////////////////////////////////////////////// click11
$('.add').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click11") {
		$('.b11').show();
		$('.a11').show().html(k++);
		$('.c11').show().html(colddrinks*(k2++));
	}
});
$('.min').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click11") {
		$('.b11').show();
		$('.a11').html(--k);
		$('.c11').html(colddrinks*(--k2));
	}
	if (k<=0) {
		k++;
		$('.b11').hide();
		$('.a11').hide();
		$('.c11').hide();
	}
	if (k2<=0) {
		k2++;
	}
	
});
/////////////////////////////////////////////////////////////////////// click12
$('.add').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click12") {
		$('.b12').show();
		$('.a12').show().html(l++);
		$('.c12').show().html(colddrinks*(l2++));
	}
});
$('.min').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click12") {
		$('.b12').show();
		$('.a12').html(--l);
		$('.c12').html(colddrinks*(--l2));
	}
	if (l<=0) {
		l++;
		$('.b12').hide();
		$('.a12').hide();
		$('.c12').hide();
	}
	if (l2<=0) {
		l2++;
	}
	
});
/////////////////////////////////////////////////////////////////////// click13
$('.add').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click13") {
		$('.b13').show();
		$('.a13').show().html(m++);
		$('.c13').show().html(desserts*(m2++));
	}
});
$('.min').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click13") {
		$('.b13').show();
		$('.a13').html(--m);
		$('.c13').html(desserts*(--m2));
	}
	if (m<=0) {
		m++;
		$('.b13').hide();
		$('.a13').hide();
		$('.c13').hide();
	}
	if (m2<=0) {
		m2++;
	}
	
});
/////////////////////////////////////////////////////////////////////// click14
$('.add').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click14") {
		$('.b14').show();
		$('.a14').show().html(n++);
		$('.c14').show().html(desserts*(n2++));
	}
});
$('.min').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click14") {
		$('.b14').show();
		$('.a14').html(--n);
		$('.c14').html(desserts*(--n2));
	}
	if (n<=0) {
		n++;
		$('.b14').hide();
		$('.a14').hide();
		$('.c14').hide();
	}
	if (n2<=0) {
		n2++;
	}
	
});
/////////////////////////////////////////////////////////////////////// click15
$('.add').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click15") {
		$('.b15').show();
		$('.a15').show().html(o++);
		$('.c15').show().html(desserts*(o2++));
	}
});
$('.min').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click15") {
		$('.b15').show();
		$('.a15').html(--o);
		$('.c15').html(desserts*(--o2));
	}
	if (o<=0) {
		o++;
		$('.b15').hide();
		$('.a15').hide();
		$('.c15').hide();
	}
	if (o2<=0) {
		o2++;
	}
	
});
/////////////////////////////////////////////////////////////////////// click16
$('.add').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click16") {
		$('.b16').show();
		$('.a16').show().html(p++);
		$('.c16').show().html(desserts*(p2++));
	}
});
$('.min').click(function(){
	var id = $(this).siblings('input:button').attr('id');
	if (id == "click16") {
		$('.b16').show();
		$('.a16').html(--p);
		$('.c16').html(desserts*(--p2));
	}
	if (p<=0) {
		p++;
		$('.b16').hide();
		$('.a16').hide();
		$('.c16').hide();
	}
	if (p2<=0) {
		p2++;
	}
	
});
///////////////////////////////////////////////////////////////// clear
$('#clear').click(function(){
	location.reload();
});
//////////////////////////////////////////////////////////// total
$('.button').click(function(){
	var total = 0;
	$('.pay').each(function(){
		total += parseFloat($(this).html());
	});

	$('.box').html("This is included GST"+"<br>"+"<br>"+"RM"+(total*gst).toFixed(2));
});
/////////////////////////////////////////////////////////////////////// done
$('.done').click(function(){
	alert("Oder have been submited...Thank you");
	location.reload();
});