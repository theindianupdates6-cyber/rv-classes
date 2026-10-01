function toggleMenu(){
  const nav=document.getElementById("mainNav");
  if(nav) nav.classList.toggle("open");
}
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav")?.classList.remove("open")));
document.getElementById("year") && (document.getElementById("year").textContent=new Date().getFullYear());

const form=document.getElementById("enquiryForm");
if(form){
  form.addEventListener("submit",function(e){
    e.preventDefault();
    const name=document.getElementById("studentName").value.trim();
    const parent=document.getElementById("parentName").value.trim();
    const cls=document.getElementById("studentClass").value;
    const board=document.getElementById("board").value;
    const mobile=document.getElementById("mobile").value.trim();
    const msg=document.getElementById("message").value.trim();
    const text=`Hello RV Classes, I want admission details.%0A%0AStudent Name: ${encodeURIComponent(name)}%0AParent/Guardian: ${encodeURIComponent(parent)}%0AClass: ${encodeURIComponent(cls)}%0ABoard: ${encodeURIComponent(board)}%0AMobile: ${encodeURIComponent(mobile)}%0AMessage: ${encodeURIComponent(msg || "Please share batch timing and fee details.")}`;
    window.open(`https://wa.me/919165402035?text=${text}`,"_blank");
  });
}
