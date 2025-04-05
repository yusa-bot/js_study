'use strict';

const p = document.getElementById('output') // 出力用のp要素

const text = document.getElementById('testInput')
text.addEventListener('input', () => {
    p.textContent = text.value
})

const select = document.querySelector('select')
select.addEventListener('change', () => {
    p.textContent = select.value
})

const radio = document.getElementsByName('abcRadio')
for (const btn of radio) {
    btn.addEventListener('change', () => {
        p.textContent = btn.value
    })
}

const checkbox = document.getElementsByName('abcCheck')
const values= []
for (const box of checkbox) {
    box.addEventListener('change', () => {
        if (box.checked == true) {
            values.push(box.value)
        } else {
            const removeIndex = values.indexOf(box.value)
            values.splice(removeIndex, 1)
        }
        p.textContent = values
    })
}

// ［表示］ボタンを押したら…
document.querySelector('button').addEventListener('click', () => {
    const text = document.getElementById('textInput')
    p.textContent = text.value

    const password = document.getElementById('password')
    p.textContent = password.value

    const radio = document.getElementsByName('abcRadio')
    for (const btn of radio) {
        if (btn.checked == true) {
            p.textContent = btn.value
        }
    }

    const checkbox = document.getElementsByName('abcCheck')
    const values = []
    for (const box of checkbox) {
        if (box.checked == true) {
            values.push(box.value)
        }
    }
    // const values = Array.from(checkbox)
    // .filter((box) => box.checked == true)
    // .map((box) => box.value)
    p.textContent = values

    const select = document.querySelector('select')
    p.textContent = select.value

    const multiSelect = document.querySelector('select[multiple]')
    const anss = []
    for (const opt of multiSelect.options) {
        if (opt.selected == true) {
            anss.push(opt.value)
        }
    }
    p.textContent = anss
})  

const form = document.querySelector('from')
form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const p = form.firstElementChild
    p.textContent = form.formInput.value
})