(function() {
  var selectedCategorie;

  const buttons = document.querySelectorAll(".new-task-button");

  const closeDialogButton = document.querySelector(".dialog-cancel-button");
  closeDialogButton.addEventListener("click", function() {
    closeDialog();
  });

  let saveDialogButton = document.querySelector(".dialog-create-new-task");
  saveDialogButton.addEventListener("click", function() {
    saveButton(selectedCategorie);
  });

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      openDialog(buttons[i].parentNode.parentNode);
      let test = buttons[i].parentNode.parentNode;
      console.log(test);
    });
  }

  function openDialog(categorie) {
    selectedCategorie = categorie;
    let dialog = document.getElementById("dialog");
    dialog.showModal();
  }

  function closeDialog() {
    let dialog = document.getElementById("dialog");
    dialog.close();
  }

  function saveButton() {
    let value = document.querySelector(".dialog-create-task-field").value;
    console.log(value);
    console.log(selectedCategorie.id);
    if (value.length >= 3) {
      let task = {
        key: selectedCategorie.id,
        value: value,
        isAssigned: false
      };
      taskApiService.write(task).then(newTask => {
        taskViewService.createTaskNode(newTask);
      });
    }

    document.querySelector(".dialog-create-task-field").value = "";
    closeDialog();
  }

  window.dialogService = {};
})();
