///////////////////////////////////////////////////////////////////////////
a=1;	g=1;	m=1;	s=1;	y=1;	ee=1;	kk=1;	qq=1;	ww=1;
b=1;	h=1;	n=1;	t=1;	z=1;	ff=1;	ll=1;	rr=1;	xx=1;			
c=1;	i=1;	o=1;	u=1;	aa=1;	gg=1;	mm=1;	ss=1;	yy=1;
d=1;	j=1;	p=1;	v=1;	bb=1;	hh=1;	nn=1;	tt=1;	zz=1;
e=1;	k=1;	q=1;	w=1;	cc=1;	ii=1;	oo=1;	uu=1;
f=1;	l=1;	r=1;	x=1;	dd=1;	jj=1;	pp=1;	vv=1;								
/////////////////////////////////////////////////////////////////////////////
a1=10;	g1=10;	m1=10;	s1=10;	y1=10;
b1=10;	h1=10;	n1=10;	t1=10;	z1=10;
c1=10;	i1=10;	o1=10;	u1=10;
d1=10;	j1=10;	p1=10;	v1=10;
e1=10;	k1=10;	q1=10;	w1=10;
f1=10;	l1=10;	r1=10;	x1=10;
////////////////////////////////////////////////////////////////////////////
$('.amount').ready(function(){
	$('.amount').hide();
});
$('li').ready(function(){
	$('li').hide();
})
$('td').click(function(){
	$('img').removeClass('transparent');
	$('.display').html();
	$('.amount').hide();
	$(this).children().siblings($('.amount')).show();
	$(this).children().siblings('img').addClass('transparent');
});
$('.b2').click(function(){
	$('.d1').html(a++);
	$('.l1').show();
	$('.i1').show().html(a1*(b++));
	$('.w3').html(parseInt($('ul li').html())+parseInt());
	
})
$('.b1').click(function(){
	$('.d1').html(--a);
	$('.l1').show();
	$('.i1').html(a1*(--b));
	if (a<=0) {a++};
	if (b<=0) {b++};
})
$('.b4').click(function(){
	$('.d2').html(c++);
	$('.l2').show();
	$('.i2').show().html(b1*(d++));
})
$('.b3').click(function(){
	$('.d2').html(--c);
	$('.l2').show();
	$('.i2').show().html(b1*(--d));

	if (c<=0) {c++};
	if (d<=0) {d++};
})
$('.b6').click(function(){
	$('.d3').html(e++);
	$('.l3').show();
	$('.i3').show().html(c1*(f++));
})
$('.b5').click(function(){
	$('.d3').html(--e);
	$('.l3').show();
	$('.i3').show().html(c1*(--f));
	if (e<=0) {e++};
	if (f<=0) {f++};
})
$('.b8').click(function(){
	$('.d4').html(g++);
	$('.l4').show();
	$('.i4').show().html(d1*(h++));
})
$('.b7').click(function(){
	$('.d4').html(--g);
	$('.l4').show();
	$('.i4').show().html(d1*(--h));
	if (g<=0) {g++};
	if (h<=0) {h++};
})
$('.b10').click(function(){
	$('.d5').html(i++);
	$('.l5').show();
	$('.i5').show().html(f1*(j++));
})
$('.b9').click(function(){
	$('.d5').html(--i);
	$('.l5').show();
	$('.i5').show().html(f1*(--j));
	if (i<=0) {i++};
	if (j<=0) {j++};
})
$('.b12').click(function(){
	$('.d6').html(k++);
	$('.l6').show();
	$('.i6').show().html(g1*(l++));
})
$('.b11').click(function(){
	$('.d6').html(--k);
	$('.l6').show();
	$('.i6').show().html(g1*(--l));
	if (k<=0) {k++};
	if (l<=0) {l++};
})
$('.b14').click(function(){
	$('.d7').html(m++);
	$('.l7').show();
	$('.i7').show().html(h1*(n++));
})
$('.b13').click(function(){
	$('.d7').html(--m);
	$('.l7').show();
	$('.i7').show().html(h1*(--n));
	if (m<=0) {m++};
	if (n<=0) {n++};
})
$('.b16').click(function(){
	$('.d8').html(o++);
	$('.l8').show();
	$('.i8').show().html(i1*(p++));
})
$('.b15').click(function(){
	$('.d8').html(--o);
	$('.l8').show();
	$('.i8').show().html(i1*(--p));
	if (o<=0) {o++};
	if (p<=0) {p++};
})
$('.b18').click(function(){
	$('.d9').html(q++);
	$('.l9').show();
	$('.i9').show().html(j1*(r++));
})
$('.b17').click(function(){
	$('.d9').html(--q);
	$('.l9').show();
	$('.i9').show().html(j1*(--r));
	if (q<=0) {q++};
	if (r<=0) {r++};
})
$('.b20').click(function(){
	$('.d10').html(s++);
	$('.l10').show();
	$('.i10').show().html(k1*(t++));
})
$('.b19').click(function(){
	$('.d10').html(--s);
	$('.l10').show();
	$('.i10').show().html(k1*(--t));
	if (s<=0) {s++};
	if (t<=0) {t++};
})
$('.b20a').click(function(){
	$('.d11').html(u++);
	$('.l11').show();
	$('.i11').show().html(l1*(v++));
})
$('.b19a').click(function(){
	$('.d11').html(--u);
	$('.l11').show();
	$('.i11').show().html(l1*(--v));
	if (u<=0) {u++};
	if (v<=0) {v++};
})
$('.b22').click(function(){
	$('.d12').html(w++);
	$('.l12').show();
	$('.i12').show().html(m1*(x++));
})
$('.b21').click(function(){
	$('.d12').html(--w);
	$('.l12').show();
	$('.i12').show().html(m1*(--x));
	if (w<=0) {w++};
	if (x<=0) {x++};
})
$('.b24').click(function(){
	$('.d13').html(y++);
	$('.l13').show();
	$('.i13').show().html(m1*(z++));
})
$('.b23').click(function(){
	$('.d13').html(--y);
	$('.l13').show();
	$('.i13').show().html(m1*(--z));
	if (y<=0) {y++};
	if (z<=0) {z++};
})
$('.b26').click(function(){
	$('.d14').html(aa++);
	$('.l14').show();
	$('.i14').show().html(n1*(bb++));
})
$('.b25').click(function(){
	$('.d14').html(--aa);
	$('.l14').show();
	$('.i14').show().html(n1*(--bb));
	if (aa<=0) {aa++};
	if (bb<=0) {bb++};
})
$('.b28').click(function(){
	$('.d15').html(cc++);
	$('.l15').show();
	$('.i15').show().html(o1*(dd++));
})
$('.b27').click(function(){
	$('.d15').html(--cc);
	$('.l15').show();
	$('.i15').show().html(o1*(--dd));
	if (cc<=0) {cc++};
	if (dd<=0) {dd++};
})
$('.b30').click(function(){
	$('.d16').html(ee++);
	$('.l16').show();
	$('.i16').show().html(p1*(ff++));
})
$('.b29').click(function(){
	$('.d16').html(--ee);
	$('.l16').show();
	$('.i16').show().html(p1*(--ff));
	if (ee<=0) {ee++};
	if (ff<=0) {ff++};
})
$('.b32').click(function(){
	$('.d17').html(gg++);
	$('.l17').show();
	$('.i17').show().html(q1*(hh++));
})
$('.b31').click(function(){
	$('.d17').html(--gg);
	$('.l17').show();
	$('.i17').show().html(q1*(--hh));
	if (gg<=0) {gg++};
	if (hh<=0) {hh++};
})
$('.b34').click(function(){
	$('.d18').html(ii++);
	$('.l18').show();
	$('.i18').show().html(r1*(jj++));
})
$('.b33').click(function(){
	$('.d18').html(--ii);
	$('.l18').show();
	$('.i18').show().html(r1*(--jj));
	if (ii<=0) {ii++};
	if (jj<=0) {jj++};
})
$('.b36').click(function(){
	$('.d19').html(kk++);
	$('.l19').show();
	$('.i19').show().html(s1*(ll++));
})
$('.b35').click(function(){
	$('.d19').html(--kk);
	$('.l19').show();
	$('.i19').show().html(s1*(--ll));
	if (kk<=0) {kk++};
	if (ll<=0) {ll++};
})
$('.b38').click(function(){
	$('.d20').html(mm++);
	$('.l20').show();
	$('.i20').show().html(t1*(nn++));
})
$('.b37').click(function(){
	$('.d20').html(--mm);
	$('.l20').show();
	$('.i20').show().html(t1*(--nn));
	if (mm<=0) {mm++};
	if (nn<=0) {nn++};
})
$('.b40').click(function(){
	$('.d21').html(oo++);
	$('.l21').show();
	$('.i21').show().html(u1*(pp++));
})
$('.b39').click(function(){
	$('.d21').html(--oo);
	$('.l21').show();
	$('.i21').show().html(u1*(--pp));
	if (oo<=0) {oo++};
	if (pp<=0) {pp++};
})
$('.b42').click(function(){	
	$('.d22').html(ss++);
	$('.l22').show();
	$('.i22').show().html(w1*(tt++));
})
$('.b41').click(function(){
	$('.d22').html(--ss);
	$('.l22').show();
	$('.i22').show().html(w1*(--tt));
	if (ss<=0) {ss++};
	if (tt<=0) {tt++};
})
$('.b44').click(function(){
	$('.d23').html(uu++);
	$('.l23').show();
	$('.i23').show().html(x1*(vv++));
})
$('.b43').click(function(){
	$('.d23').html(--uu);
	$('.l23').show();
	$('.i23').show().html(x1*(--vv));
	if (uu<=0) {uu++};
	if (vv<=0) {vv++};
})
$('.b46').click(function(){
	$('.d24').html(ww++);
	$('.l24').show();
	$('.i24').show().html(y1*(xx++));
})
$('.b45').click(function(){
	$('.d24').html(--ww);
	$('.l24').show();
	$('.i24').show().html(y1*(--xx));
	if (ww<=0) {ww++};
	if (xx<=0) {xx++};
})

$('button').click(function(){
	$('.w3').html(
		 parseInt($('.i1').html())	//$('.i1').html()?$('.i1').html():0;
		+ parseInt($('.i2').html())
		+ parseInt($('.i3').html())
		+ parseInt($('.i4').html())
		+ parseInt($('.i5').html())
		+ parseInt($('.i6').html())
		+ parseInt($('.i7').html())
		+ parseInt($('.i8').html())
		+ parseInt($('.i9').html())
		+ parseInt($('.i10').html())
		+ parseInt($('.i11').html())
		+ parseInt($('.i12').html())
		+ parseInt($('.i13').html())
		+ parseInt($('.i14').html())
		+ parseInt($('.i15').html())
		+ parseInt($('.i16').html())
		+ parseInt($('.i17').html())
		+ parseInt($('.i18').html())
		+ parseInt($('.i19').html())
		+ parseInt($('.i20').html())
		+ parseInt($('.i21').html())
		+ parseInt($('.i22').html())
		+ parseInt($('.i23').html())
		+ parseInt($('.i24').html()));
})
$('.select1').click(function(){
	location.reload();
	alert('You can wait few minute! And the food you ordered will br ready to take away. Thank you, hope next time you will come again.')
})







