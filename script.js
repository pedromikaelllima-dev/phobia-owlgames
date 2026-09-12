const header=document.querySelector('.header');
const nav=document.querySelector('.nav');
const menu=document.querySelector('.menu-toggle');
const modal=document.querySelector('#modal');
const trailerBtn=document.querySelector('#trailerBtn');
const modalClose=document.querySelector('#modalClose');

window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>40));

menu.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menu.setAttribute('aria-expanded',open);
});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

trailerBtn.addEventListener('click',()=>modal.classList.add('active'));
modalClose.addEventListener('click',()=>modal.classList.remove('active'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('active')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('active')});

document.querySelector('#year').textContent=new Date().getFullYear();

// Pequeno efeito de interferência no título, usado com moderação.
const title=document.querySelector('.hero h1');
setInterval(()=>{
  if(Math.random()>.72){
    title.style.transform=`translateX(${Math.random()*4-2}px)`;
    title.style.textShadow=`${Math.random()*7-3}px 0 rgba(211,70,77,.28)`;
    setTimeout(()=>{title.style.transform='';title.style.textShadow=''},90);
  }
},1800);
