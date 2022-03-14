{
    let tasks = [];
    let hideTaskDone = false;

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent }];
        render();
        document.querySelector(".js-newTask").focus()
    };

    const removeTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const doneTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            {
                ...tasks[taskIndex],
                done: !tasks[taskIndex].done,
            },
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const toogleHideTaskDone = () => {
        hideTaskDone = !hideTaskDone;
        render();
    }
    const markAllTasksDone = () => {
        tasks = tasks.map((task) => ({
            ...task,
            done: true,
        }));

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

    const renderButton = () => {
        const buttonsList = document.querySelector(".js-buttonsList");
        if (!tasks.length) {
            buttonsList.innerHTML = "";
            return;
        };

        buttonsList.innerHTML = `
        <button class="section__button js-doneTaskHide"> ${hideTaskDone ? "Pokaż" : "Ukryj"} ukończone</button>
        <button class="section__button js-allTaskDone" ${tasks.every(({ done }) => done) ? " disabled" : ""}> Ukończ wszystkie</button>
        `;
    };

    const renderTask = () => {
        const htmlString = task => `
           <li class="list__element ${hideTaskDone && task.done ? "list__element--hidden" : ""} ">
           <button class="list__button list__button--done js-done">${task.done ? "✔" : ""}</button>
           <div class=" list__paragraph ${task.done ? "list__paragraph--done" : ""}"> ${task.content} </div>
            <button class="list__button list__button--remove js-remove">🗑</button>
           </li>
          `;
        document.querySelector(".js-tasks").innerHTML = tasks.map(htmlString).join("");
    };

    const buttonsEvent = () => {
        const buttonHideDone = document.querySelector(".js-doneTaskHide");
        if (buttonHideDone) {
            buttonHideDone.addEventListener("click", toogleHideTaskDone);
        };
        const buttonAllDone = document.querySelector(".js-allTaskDone");
        if (buttonAllDone) {
            buttonAllDone.addEventListener("click", markAllTasksDone);
        };
    };

    const render = () => {
        renderTask();
        renderButton();
        buttonsEvent();
        click();
    };

    const init = () => {
        render();
    };

    const onFromSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === "") {
            document.querySelector(".js-newTask").focus();
            return;
        };
        addNewTask(newTaskContent);
        document.querySelector(".js-newTask").value = "";
    };

    const from = document.querySelector(".js-from");
    from.addEventListener("submit", onFromSubmit);
    init();
}