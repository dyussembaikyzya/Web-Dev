const form = document.querySelector('#todoForm');
const input = document.querySelector('#taskInput');
const list = document.querySelector('#todoList');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.className = 'todo-item';

  const left = document.createElement('div');
  left.className = 'todo-item__left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'todo-item__checkbox';

  const taskText = document.createElement('p');
  taskText.className = 'todo-item__text';
  taskText.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'btn btn--danger';

  left.appendChild(checkbox);
  left.appendChild(taskText);
  li.appendChild(left);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  checkbox.addEventListener('change', () => {
    li.classList.toggle('todo-item--done');
  });

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  input.value = '';
});
