const menu=document.querySelector(".menu"),nav=document.querySelector(".nav nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const progress=document.querySelector(".progress");
window.addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(window.scrollY/max*100)+"%";
},{passive:true});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const serviceSelect=document.querySelector("#service");
document.querySelectorAll("[data-service]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    serviceSelect.value=btn.dataset.service;
    document.querySelector("#order").scrollIntoView({behavior:"smooth"});
  });
});
document.querySelectorAll("[data-service-link]").forEach(a=>{
  a.addEventListener("click",()=>serviceSelect.value=a.dataset.serviceLink);
});

const form=document.querySelector("#orderForm"),toast=document.querySelector("#toast");
form.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.querySelector("#name").value.trim();
  const mobile=document.querySelector("#mobile").value.trim();
  const service=document.querySelector("#service").value;
  const qty=document.querySelector("#qty").value.trim()||"Not specified";
  const date=document.querySelector("#date").value||"Not specified";
  const details=document.querySelector("#details").value.trim()||"No additional details";
  const message=`*KRISHNA STUDIO - NEW ENQUIRY*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Mobile:* ${encodeURIComponent(mobile)}%0A*Service:* ${encodeURIComponent(service)}%0A*Quantity:* ${encodeURIComponent(qty)}%0A*Needed by:* ${encodeURIComponent(date)}%0A*Requirement:* ${encodeURIComponent(details)}`;
  toast.classList.add("show");
  setTimeout(()=>{toast.classList.remove("show");window.open(`https://wa.me/${KRISHNA_STUDIO_WHATSAPP}?text=${message}`,"_blank","noopener")},500);
});
