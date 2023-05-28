const tabsBtn = Array.from(document.querySelectorAll(".tab"));
const tabsContent = Array.from(document.querySelectorAll(".tab__content"));

tabsBtn.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    let tabIndex = tabsBtn.indexOf(element);
    
    tabsBtn.forEach(el => el.classList.remove("tab_active"));
    tabsContent.forEach(item => item.classList.remove("tab__content_activ"));
    
    element.classList.add('tab_active');
    tabsContent[tabIndex].classList.add("tab__content_active");
    evt.preventDefault();
}));
