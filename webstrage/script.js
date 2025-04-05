'use strict';
const storage = localStorage

const input = document.querySelector('input');    // input要素
const output = document.getElementById('output'); // div#output要素
const submit = document.getElementById('submit'); // button#submit要素

const ul = document.createElement('ul')
output.appendChild(ul)

document.addEventListener('DOMContentLoaded', () => {
    // const storagedData = storage.store || 'ここに内容を表示します'
    // output.textContent = storagedData
    if (storage.store != undefined) {
        listItems = JSON.parse(storage.store)
    }
    for (const item of listItems) {
        const li = document.createElement('li')
        li.textContent = item
        ul.appendChild(li)
    }
})

let listItems = []

// ［記録］ボタンを押したら…
submit.addEventListener('click', () => {
//   output.textContent = input.value; // div要素に表示
//   storage.setItem('store', input.value)

  const li = document.createElement('li')
  li.textContent = input.value
  ul.appendChild(li)

  listItems.push(input.value)
  storage.store = JSON.stringify(listItems)

  input.value = ''
});

// delete storage.store
// storage.removeItem('store')

const remove = document.createElement('button')
remove.textContent = 'ストレージデータを削除'
document.body.insertBefore(remove, output.nextElementSibling)

remove.addEventListener('click', () => {
    delete storage.store
    output.textContent = ''
    listItems = []
})

const link = document.createElement('button')
link.textContent = '別ページへ飛ぶ'
document.body.insertBefore(link, remove)

link.addEventListener('click', () => {
    location.href = 'page.html'
    // window.open('page.html', '_self')
})
