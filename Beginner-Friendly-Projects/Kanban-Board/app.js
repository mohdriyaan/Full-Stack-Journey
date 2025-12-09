const lists = document.querySelectorAll(".list");

// Delegate drag events from the container
document.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("card")) {
        e.target.classList.add("dragging");
        e.dataTransfer.setData("text/plain", e.target.id);
    }
});

document.addEventListener("dragend", (e) => {
    if (e.target.classList.contains("card")) {
        e.target.classList.remove("dragging");
    }
});

// List events
lists.forEach(list => {
    list.addEventListener("dragover", dragOver);
    list.addEventListener("dragenter", dragEnter);
    list.addEventListener("dragleave", dragLeave);
    list.addEventListener("drop", dragDrop);
});

function dragOver(e) {
    e.preventDefault();  // Required for drop
}

function dragEnter(e) {
    e.preventDefault();
    e.currentTarget.classList.add("over");
}

function dragLeave(e) {
    e.currentTarget.classList.remove("over");
}

function dragDrop(e) {
    e.preventDefault();

    const id = e.dataTransfer.getData("text/plain");
    const card = document.getElementById(id);

    // Prevent dropping into itself (rare, but good practice)
    if (!card) return;

    e.currentTarget.appendChild(card);
    e.currentTarget.classList.remove("over");
}
