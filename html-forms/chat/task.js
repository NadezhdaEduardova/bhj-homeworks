const widgetChat = document.querySelector(".chat-widget");
widgetChat.addEventListener('click', () => {
  widgetChat.classList.add("chat-widget_active");
});

const input = document.getElementById("chat-widget__input");
const messages = document.querySelector(".chat-widget__messages");
let robotMessages = [
	"Добрый день, мы ещё не проснулись. Напишите через 10 лет",
	"Вы ничего у нас не купили, чтобы так с нами разговаривать!",
	"Мы нечего не будем вам продавать",
	"Кто тут?",
	"Добрый день! До свидания!",
	"Где ваша совесть?",
	"К сожелению, все операторы сейчас заняты. Не пишите нам больше",
];

input.addEventListener('keydown', (event) => {
    if ((input.value.length > 0) && (event.key === "Enter")) {

      let time = new Date();
      const robotMessage = robotMessages[Math.floor(Math.random() * robotMessages.length)];
      const messages = document.querySelector(".chat-widget__messages");

      messages.innerHTML += `
         <div class="message message_client">
            <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
            <div class="message__text">${input.value}</div>
         </div>
      `;
      messages.innerHTML += `
         <div class="message">
            <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
            <div class="message__text">${robotMessage}</div>
         </div>
      `;
     input.value = "";
  };
});
      
