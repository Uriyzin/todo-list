function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.onclick = () => li.remove();

    li.appendChild(removeBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
