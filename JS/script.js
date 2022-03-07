{
    const tasks = [];
    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent
        });
        render();
    };
    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };
    const doneTask = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };
    const click = () => {
        const removeButton = document.querySelectorAll(".js-remove");
        removeButton.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index)
            });
        });
        const doneButton = document.querySelectorAll(".js-done");
        doneButton.forEach((doneButton, index) => {
            doneButton.addEventListener("click", () => {
                doneTask(index)
            });
        });
    };
    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
               <li class="list__element">
               <button class="list__button list__button--done js-done">${task.done ? "✔" : ""}</button>
               <span class=" list__paragraph ${task.done ? "list__paragraph--done" : ""}"> ${task.content} </span>
                <button class="list__button list__button--remove js-remove">🗑</button>
               </li>
              `;
        };
        document.querySelector(".js-tasks").innerHTML = htmlString;
        click();
    };
    const init = () => {
        render();
    };
    const onFromSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === "") {
            return;
        };
        addNewTask(newTaskContent);
        document.querySelector(".js-newTask").value = "";
    };
    const from = document.querySelector(".js-from");
    from.addEventListener("submit", onFromSubmit);

    init();
}