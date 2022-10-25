const addButton = document.querySelector("#add");

const updateLocalStorageData = () => {
  const textAreaData = document.querySelectorAll("textarea");
  const notes = [];
  textAreaData.forEach((note) => {
    return notes.push(note.value);
  });
  localStorage.setItem("notess", JSON.stringify(notes));
};

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

  delButton.addEventListener("click", () => {
    note.remove();
    updateLocalStorageData();
  });

  textarea.value = text;
  mainDiv.innerHTML = text;
  editButton.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });

  textarea.addEventListener("change", (e) => {
    const value = e.target.value;
    mainDiv.innerHTML = value;
    console.log("..");
    updateLocalStorageData();
  });

  document.body.append(note);
};

const notes = JSON.parse(localStorage.getItem("notess"));
if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addButton.addEventListener("click", () => {
  addNewNote();
});
