function Dialog_close() {
  var dialog_checkbox = document.getElementById("dialog_checkbox");
  var dialog = document.getElementById("dialog");
  var dialog_text = document.getElementById("dialog_text");
  if (dialog_checkbox.checked) {
    dialog.close();
  } else {
    dialog_text.style.color = "red";
  }
}

document.getElementById("dialog").showModal();
