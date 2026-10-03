(function(){
var root=document.documentElement;
// accent colour
function setAccent(c){root.style.setProperty('--accent',c);try{localStorage.setItem('sk-accent',c)}catch(e){}
document.querySelectorAll('.sw').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.c===c)})}
document.querySelectorAll('.sw').forEach(function(b){b.addEventListener('click',function(){setAccent(b.dataset.c)})});
try{var a=localStorage.getItem('sk-accent');if(a)setAccent(a);var t=localStorage.getItem('sk-theme');if(t)root.dataset.theme=t}catch(e){}
document.getElementById('theme').addEventListener('click',function(){
var dark=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
root.dataset.theme=dark?'light':'dark';try{localStorage.setItem('sk-theme',root.dataset.theme)}catch(e){}});
// mobile menu
var ul=document.getElementById('links'),mb=document.getElementById('menu');
mb.addEventListener('click',function(){var o=ul.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
ul.addEventListener('click',function(){ul.classList.remove('open');mb.setAttribute('aria-expanded',false)});
// typing roles
var roles=['Java Full-Stack Developer','Spring Boot Developer','React Developer','AI & ML Student'],ri=0,ci=0,del=false,el=document.getElementById('typed');
if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.textContent=roles[0]}else{(function tick(){
var w=roles[ri];ci+=del?-1:1;el.textContent=w.slice(0,ci);var d=del?35:70;
if(!del&&ci===w.length){del=true;d=1500}else if(del&&ci===0){del=false;ri=(ri+1)%roles.length;d=300}
setTimeout(tick,d)})()}
// project filter
document.querySelectorAll('.f').forEach(function(b){b.addEventListener('click',function(){
document.querySelectorAll('.f').forEach(function(x){x.setAttribute('aria-pressed',x===b)});
document.querySelectorAll('.card').forEach(function(c){c.hidden=!(b.dataset.f==='all'||c.dataset.k===b.dataset.f)})})});
// scroll spy + reveal
var secs=document.querySelectorAll('main section[id]'),ls=document.querySelectorAll('nav a.l');
if('IntersectionObserver' in window){
var spy=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)ls.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(function(s){spy.observe(s)});
var rv=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');rv.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(r){rv.observe(r)})}else{document.querySelectorAll('.rv').forEach(function(r){r.classList.add('in')})}
// contact form -> mailto
document.getElementById('form').addEventListener('submit',function(ev){ev.preventDefault();
var n=document.getElementById('n').value.trim(),e=document.getElementById('e').value.trim(),m=document.getElementById('m').value.trim(),o=document.getElementById('msg');
if(!n||!/^\S+@\S+\.\S+$/.test(e)||!m){o.textContent='Enter your name, a valid email and a message.';return}
location.href='mailto:keshrisanya621@gmail.com?subject='+encodeURIComponent('Portfolio message from '+n)+'&body='+encodeURIComponent(m+'\n\n'+n+' ('+e+')');
o.textContent='Opening your email app.'});
document.getElementById('y').textContent=new Date().getFullYear();
})();