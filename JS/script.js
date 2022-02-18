{
    const tasks = [
        {
            content: "Pobawić się z psem",
            done: false,
        },
        {
            content: "Wyprowadzić na spacer",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
               <li class="list__element ${task.done ? "list__element--done" : ""}">
                ${task.content}
               </li>
              `;
            document.querySelector(".js-tasks").innerHTML = htmlString;
        };
    };
    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent
        });
        render()
    };

    const init = () => {
        render();
    };
    const onFromSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent)
    };
    const from = document.querySelector(".js-from");
    from.addEventListener("submit", onFromSubmit);

    init();
}