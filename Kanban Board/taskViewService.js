(function() {
  function createTaskNode(param) {
    let categorie = document.querySelector("#" + param.key);
    let newTaskDiv = document.createElement("div");

    newTaskDiv.classList.add("task");
    newTaskDiv.setAttribute("id", param.id);
    newTaskDiv.setAttribute("data-assigned", param.isComplete);

    if (newTaskDiv.getAttribute("data-assigned") == "undefined") {
      newTaskDiv.setAttribute("data-assigned", false);
    }

    newTaskDiv.innerHTML = `
                        <div class="task-name">
                            <div class="task-value"></div>
                            <div class="data-assigned-button"></div>
                        </div>
                        <div class="button-div">
                             <button class="prev-button">â¬…</button>
                             <button class="delete-button">âŒ</button>
                            <button class="next-button">âž¡</button>
                         </div>`;

    console.log(newTaskDiv);
    newTaskDiv.setAttribute("task-value", param.value);

    categorie.appendChild(newTaskDiv);
  }

  window.taskViewService = {
    createTaskNode
  };
})();
