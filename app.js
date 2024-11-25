const togglebtns=document.querySelectorAll("#toggle-btn");
const faqItems=document.querySelectorAll(".faq-item")
// console.log(togglebtns)

// acess individual btn
togglebtns.forEach((togglebtn)=>{
  

togglebtn.addEventListener("click", function(){
const clickedfaqITEM=togglebtn.closest(".faq-item");

const isActiveclikedItem=clickedfaqITEM.classList.contains(".active");

faqItems.forEach((item)=>{
  item.classList.remove("active");
  const btn=item.querySelector("#toggle-btn");
  btn.innerHTML=`<img  src="./faq-accordion-main/assets/images/icon-plus.svg" alt="">`;
});
if(!isActiveclikedItem){
  clickedfaqITEM.classList.add("active");
  togglebtn.innerHTML=`<img  src="./faq-accordion-main/assets/images/icon-minus.svg" alt="">`;
}






  // faqItems.forEach((faqItem)=>{
  //   const isActive=faqItem.classList.contains("active");

  // if(isActive){
  //   faqItem.classList.remove("active");
  //   togglebtn.innerHTML=`<img  src="./faq-accordion-main/assets/images/icon-plus.svg" alt="">`
  // }
  // else{
  //   faqItem.classList.add("active");
  //   togglebtn.innerHTML=`<img  src="./faq-accordion-main/assets/images/icon-minus.svg" alt="">`
  // }
  // })
  // console.log(isActive);
})
})


