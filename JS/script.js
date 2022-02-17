{
const tasks = [
    {
        content:"Pobawić się z psem",
        done: false,
    },
    {
        content:"Wyprowadzić na spacer",
        done: true,
    },
];

const render = () => {
   let htmlString = "";

   for (const task of tasks) {
htmlString += `
               <li>
                ${task.content}
               </li>
              `;
    document.querySelector(".js-tasks").innerHTML = htmlString;
 };
};

 const init = () => {
render();
 };
 init();
}