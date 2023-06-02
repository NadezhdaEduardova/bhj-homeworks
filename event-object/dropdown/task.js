const valueDropdown = document.querySelector('.dropdown__value');
const listDropdown = document.querySelector('.dropdown__list');
const itemDropdown = Array.from(document.querySelectorAll('.dropdown__item'));
                                
valueDropdown.addEventListener("click", (event) => {
  listDropdown.classList.toggle('dropdown__list_active');
})

for (let i = 0; i < itemDropdown.length; i++) {
  itemDropdown[i].addEventListener('click', (event) => {
    valueDropdown.textContent = itemDropdown[i].textContent;
    listDropdown.classList.remove('dropdown__list_active');
    event.preventDefault();
  })
}

  
                                                                         
