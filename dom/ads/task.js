const rotatorCases = Array.from(document.querySelectorAll(".rotator__case"));


const timer = setInterval(() => {
    let index = rotatorCases.findIndex(item => item.classList.contains("rotator__case_active"));
                                       
    rotatorCases.forEach(el => {
      
      if (index > rotatorCases.length - 1) {
        index = -1;
      } else {
      el[index].classList.remove("rotator__case_active");   
      el[index + 1].classList.add("rotator__case_active");
    });
    
}, 1000)


