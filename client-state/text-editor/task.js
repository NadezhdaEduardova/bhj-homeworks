const editor = document.getElementById("editor");
console.log(editor);

editor.value = localStorage.getItem("editor");
editor.oninput = () => localStorage.editor = editor.value;
