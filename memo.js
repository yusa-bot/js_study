document.querySelector("p").textContent = "khj"; // HTML
document.getElementById("second") //getElement~は、elementを取得する (.textCOntentで中身)
el = document.createElement('p')
    console.log(Element)
document.body.appendChild(element)

window.alert("wer"); //window
console.log('dhfyguk') //console

const array = [1, 2, 3]
array.push()
array.unshift()
array.pop()
array.shift()
array.splice(1, 0, 'A')
const index = array.indexOf('b')
if (index == 0) {}
 
const newArray = array.map((el) => el + 'go')
const newArray2 = array.filter((el) => el > 3)
const newWarrar = array.filter((el) => el > 3).map((el) => el + 'go')

const ul = document.getElementById('list')
const numList = [1, 2, 3, 4, 5, 6, 7, 8];
const evenList = numList.filter((num) => num % 2 == 0).map((even) => 'No.' + even)
for (const num of evenList) {
    const li = document.createElement('li')
    li.textContent = num
    ul.appendChild(li)
}

const obj = { a: 'A', b: 'B', c: 'C' }
for (const [prop, val] of Object.entries(obj)) {
    console.log(prop)
    console.log(val)
}

const evList = [
    { name: 'サンダース', type: 'でんき', weight: 24.5, ability: 'ちくでん' },
    { name: 'ブースター', type: 'ほのお', weight: 25.0, ability: 'もらいび' },
    { name: 'エーフィ', type: 'エスパー', weight: 26.5, ability: 'シンクロ' },
    { name: 'ブラッキー', type: 'あく', weight: 27.0, ability: 'シンクロ' },
    { name: 'リーフィア', type: 'くさ', weight: 25.5, ability: 'リーフガード' },
    { name: 'ニンフィア', type: 'フェアリー', weight: 23.5, ability: 'メロメロボディ' },
    { name: 'グレイシア', type: 'こおり', weight: 25.9, ability: 'ゆきがくれ' },
    { name: 'シャワーズ', type: 'みず', weight: 29.0, ability: 'ちょすい' },
  ];

const nameList = evList.map((ev) => `${ev.name}だぞ`)
for (const n of nameList) {
    console.log(n)
}

const nameList2 = evList
    .filter((ev) => ev.weight > 25)
    .map((ev) => `${ev.name} (${ev.weight}kg) `)
for (const n of nameList) {
    console.log(n)
}
// ↓
evList
    .filter((ev) => ev.weight > 25)
    .map((ev) => `${ev.name} (${ev.weight}kg) `)
    .forEach((ev) => {
        console.log(ev)
    })


// 表
const table = document.querySelector('table')
const tr = document.createElement('tr')
const header = ['名前', 'タイプ', '体重', '特技'];

for (const h of header) {
    const th = document.createElement('th')
    th.textContent = h;
    tr.appendChild(th)
}
table.appendChild(tr)

for (const ev of evList) {
    const tr = document.createElement('tr')
    for (const prop in ev) {
        const td = document.createElement('td')
        td.textContent = ev[prop]
        if (prop == 'weight') {
            td.textContent += ' kg'
        }
        tr.appendChild(td)
    }
    table.appendChild(tr)
}


const ul = document.getElementById('list');
const newLi = document.createElement('li');
newLi.textContent = 'DOM!!';

const li1 = ul.firstElementChild;  // ul要素の先頭の子要素

ul.insertBefore(newLi, li1);  // ul要素の先頭の子要素の手前に挿入
const li1 = ul.firstElementChild;   // 1番目のli要素
const li2 = li1.nextElementSibling; // 2番目のli要素
親エレメント.insertBefore(追加エレメント, 参照エレメント);// 参照エレメントの一つ前にエレメントを挿入する
ul.insertBefore(newLi, li2); // 2番目のli要素の手前に挿入
親エレメント.replaceChild(新しいエレメント, 古いエレメント);
親エレメント.removeChild(削除したい子エレメント); //再利用(DOM ツリーから切り離す

p.className = 'new_class'; // class属性を追加
a.removeAttribute('target');
const attrs = a.attributes; // 属性一覧を取得

//  CSS プロパティには「エレメント.style.CSSプロパティ名」としてアクセス
console.log(p.style.color);  // → firebrick
console.log(p.style.border); // → solid 1px navy

// 一時的な変更は.styleで
p.style.backgroundColor // キャメルケース, ドット記法
p.style['background-color'] // ケバブケース, ブラケット記法

//複雑な変更
p.classList.add('p_class')
p.classList.toggle('myStyle')

// event(待ち構える＝駆動型
    //イベント対象 = element, window, document

イベント対象.addEventListener(イベント名, イベントリスナー);
button.addEventListener('click', () => {
    const p = document.getElementById('target')
    p.classList.toggle('myStyle')
})

img.addEventListener('click', (ev) => {
    ev.currentTarget.src = 'https://github.com/ugok-girls.png'
}) //evはobject, currentTargetはimg
//　↓
document.querySelector('img').addEventListener('click', (ev) => {
    ev.currentTarget.src = 'https://github.com/ugok-girls.png'
}) // currentTargetはdocument.querySelector('img')

// DOMContentLoaded = HTMLの読み込みが完了したら
document.addEventListener('DOMContentLoaded', () => {})

// 既定動作を止めるイベント
イベント対象.addEventListener(イベント名, (Eventオブジェクト) => {
    Eventオブジェクト.preventDefault();  // 既定動作を止める
  })

// イベント削除
イベント対象.removeEventListener(イベント名, イベントリスナー)

button.addEventListener('click', () => {
    window.removeEventListener('resize', letPGold)
    button.disabled = true
})

const intervalID = setInterval(関数, 繰り返し間隔[ミリ秒]);
// 戻り値を受け取る定数名は何でもよい
// 戻り値の受け取りは省略可

const countID = setInterval(() => {
    document.body.textContent = count;
    count += 1;
    if (count > 5) {
      clearInterval(countID);  // 繰り返し停止
      document.body.textContent += ' stopped!!';
    }
  }, 1000);

  const text = document.getElementById('testInput')
text.addEventListener('input', () => {
    p.textContent = text.value
})


// strage
const storage = localStorage
//記録方法は2種類
storage.store = input.value //key名は自由
storage.setItem('store', input.value)
//読み込み
document.addEventListener('DOMContentLoaded', () => {
    // const storagedData = storage.store
    const storagedData = storage.getItem('store')
    output.textContent = storagedData
})

//ページ遷移
link.addEventListener('click', () => {
    location.href = 'page.html';
    // window.open('page.html', '_self');
  });
  //.hrefは現在のURLの値を保持

  document.getElementById('rewrite').addEventListener('click', (ev) => {
    storage.store = document.querySelector('input').value
    ev.currentTarget.textContent = '書き換え完了'
})

const object = { dog: 'ワン！', cat: 'ニャ〜', pig: 'Hi, John!' }
const string = JSON.stringify(object)// 文字列に
const newObject = JSON.parse(string)// 配列に