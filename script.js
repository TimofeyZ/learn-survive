import { data } from "./data.js";
let timer = document.getElementById("timer")

let time = 0
let enemyLeft = 110
let weaponLeft = 10
let weapon = document.getElementById("weapon")
let word = ""
let hero = document.getElementsByClassName("hero")[0]
let h = false
let speed = 0.02
let wn = 0
let health = document.getElementById("health")
let hearts = 3
let enWord = null
let ruWord = null
let enWordBtn = null
let ruWordBtn = null
let isRunning = false;
const emojis = [
    "😴", "🥱", "☹", "😎",
    "👩🏾‍🦰", "🎅🏾", "🤰🏾", "🛀🏾", "🚴🏾‍♂️", "🤜🏾",
    "🎃", "🌝", "🌜", "🌞",
    "♑", "♐", "♏", "♎", "♍", "♌", "♋", "♊", "♉", "♈", "⛎"
];
let heroNumber = Math.floor(Math.random() * emojis.length)
hero.innerHTML = emojis[heroNumber]
const weapons = ['🧨', '🏈', '🎱', '🎮', '🔨', '🎷', '🎺', '🧪', '🎻', '🔪', '💣', '📞', '📀', '💾', '📓', '💰', '📦', '⏰', '📐', '🍗', '⚓', '🧹', '🌂', '🦴', '🛌🏾'];
let pause = document.getElementById("pause")
let emoji = Math.floor(Math.random() * weapons.length)
weapon.innerHTML = weapons[emoji]
let startBtn = document.getElementById("startBtn")
let enemy = document.getElementsByClassName("enemy")[0]
let checkArr = []
let wordsBtns = document.getElementById("words").getElementsByTagName("button")


let fourObj = data.slice(0, 4)
let eng = []
let rus = []
let left = document.getElementById('left')
let right = document.getElementById("right")
refreshWords()
for (let i = 0; i < wordsBtns.length; i++) {
    let btn = wordsBtns[i]
    btn.onclick = function () {
        let grayBtn = document.getElementsByClassName("gray")[0]
        if (grayBtn) {
            grayBtn.classList.remove("gray")
            console.log("ghjdthrf");

        }
        btn.classList.add("gray")
        if (btn.parentElement.id == "left") {
            enWord = btn.innerHTML
            enWordBtn = btn
        }
        if (btn.parentElement.id == "right") {
            ruWord = btn.innerHTML
            ruWordBtn = btn
        }
        if (enWord && ruWord) {
            let wordObj = data.filter(function (obj) {
                emoji = Math.floor(Math.random() * weapons.length)
                weapon.innerHTML = weapons[emoji]

                return obj.en == enWord

            })[0]
            if (wordObj.ru == ruWord) {
                console.log("TRUE");
                enWordBtn.style.border = "5px solid  rgba(110, 211, 101, 0.97)"
                ruWordBtn.style.border = "5px solid  rgba(110, 211, 101, 0.97)"
                document.getElementsByClassName("gray")[0].className = ""
                h = true
                enWordBtn.disabled = true
                ruWordBtn.disabled = true
                wn = wn + 1
                console.log(wn);

            }
            else {
                console.log("ЛОХ!!!");
                h = false
                speed = speed + 0.01
            }
            if (wn == 4) {
                console.log("wn4");
                refreshWords()

                wn = 0

            }
            ruWord = null
            enWord = null
        }




    }
}
setTimeout(function () {
    enemy.style.left = '';

}, 1000)




function step(timestamp) {

    enemyLeft = enemyLeft - speed
    enemy.style.left = enemyLeft + '%'
    if (h == true) {
        weapon.style.display = "inline-block"
        weaponLeft = weaponLeft + 0.5
        weapon.style.left = weaponLeft + "%"
    }
    if (weaponLeft > enemyLeft) {
        weaponLeft = 10
        h = false
        enemyLeft = 100



    }
    if (h == false) {
        weapon.style.left = weaponLeft + "%"
        weapon.style.display = "none"
    }

    //   const shift = Math.min(0.1 * elapsed, 200);
    //   element.style.trans = `translateX(${shift}px)`;
    //   if (shift < 200) {
    requestAnimationFrame(step);
    //   }
}


requestAnimationFrame(step);



console.log(eng, rus);




console.log(eng, rus);
let timerInterval = null;

pause.onclick = function () {

    clearInterval(timerInterval);
    timerInterval = null;
    isRunning = false;

}

startBtn.onclick = function () {
    startBtn.innerHTML = "начать заново 🔄"
    enemyLeft = 100
    pause.style.opacity  ="1"
    refreshWords()
    time = 0
    isRunning = true;
    clearInterval(timerInterval)
    timerInterval = setInterval(function () {
        time = time + 0.1;
        timer.innerHTML = time.toFixed(1);
    }, 100);

}
// setTimeout(function () {
//     enemy.style.display = 

// }, 1000000)



function refreshWords() {

    data.sort(function () {
        return Math.random() > 0.5 ? 1 : -1
    })
    console.log("2");

    fourObj = data.slice(0, 4)
    console.log(fourObj);
    eng = []
    rus = []
    for (let i = 0; i < 4; i++) {

        eng.push(fourObj[i].en)
        rus.push(fourObj[i].ru)

    }
    rus.sort(function () {
        return Math.random() > 0.5 ? 1 : -1

    })
    for (let i = 0; i < 4; i++) {
        let lBtn = left.children[i]
        let rBtn = right.children[i]
        lBtn.innerHTML = eng[i]
        rBtn.innerHTML = rus[i]
        lBtn.disabled = false
        rBtn.disabled = false
        lBtn.style.border = "0px solid  rgba(110, 211, 101, 0.97)"
        rBtn.style.border = "0px solid  rgba(110, 211, 101, 0.97)"
        console.log(lBtn);
    }

}