const addButton = document.querySelector("#add");

const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.style.borderRadius = "1rem";

  const htmlData = `
  <div class="operation" >
  <button class="edit"><i class="fas fa-edit"></i></button>
  <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>

<div class="main ${text ? "" : "hidden"}">

</div>
<textarea class="${text ? "hidden" : ""}"></textarea>`;
  note.insertAdjacentHTML("afterbegin", htmlData);
  const editButton = note.querySelector(".edit");
  const delButton = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textarea = note.querySelector("textarea");

  // deleting the node
  delButton.addEventListener("click", () => {
    note.remove();
  });

  textarea.value = text;
  mainDiv.innerHTML = text;
  // toggle using edit button
  editButton.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });

  textarea.addEventListener("change", (e) => {
    const value = e.target.value;
    mainDiv.innerHTML = value;
    console.log("..");
  });

  document.body.append(note);
};

addButton.addEventListener("click", () => {
  addNewNote();
});
