let ul1 = document.createElement('ul')
ul1.id = 'ulid';

let ulidselect = document.querySelector('#ulid')

let list = ['Python', 'C', 'C++', 'Javascript', 'Java'];

let fragment = document.createDocumentFragment();

for (let i in list) {
  let li = document.createElement('li');
  li.textContent = list[i];
  fragment.appendChild(li)
}

ul1.appendChild(fragment)
document.body.appendChild(ul1)