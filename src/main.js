import './toggle-mode.js'
import * as sounds from './sounds.js'
import * as elements from './elements.js'


let state = true
stand()

elements.timer.addEventListener('click', function edit(){
  minutes.addEventListener('focus', () => {
    minutes.textContent = "" 
    seconds.textContent = "" 
    
  })
  
  minutes.setAttribute('contenteditable', true)
  minutes.onkeypress = (event) => /\d/.test(event.key)
  seconds.setAttribute('contenteditable', true)
  seconds.onkeypress = (event) => /\d/.test(event.key)
  minutes.focus()
  
  
})
elements.play.addEventListener('click', function running(){
  run()
  sounds.buttonPressAudio.play()
  countdownSeconds()
})
elements.pause.addEventListener('click', function troca(){
  sounds.buttonPressAudio.play()
  stand()  
})
elements.reset.addEventListener('click', function reset(){
  minutes.innerHTML = "00"
  seconds.innerHTML = "00"
  stand()
})
elements.btncampfire.addEventListener('click', function tocar(){
  sounds.lareira.play()
  elements.btncampfireOn.classList.remove("hide")
  elements.btncampfire.classList.add("hide")
  
  
})
elements.btncampfireOn.addEventListener('click', function noTocar(){
  sounds.lareira.pause()
  elements.btncampfireOn.classList.add("hide")
  elements.btncampfire.classList.remove("hide")
})
elements.btntree.addEventListener('click', function tocar(){
  sounds.floresta.play()
  elements.btntreeOn.classList.remove("hide")
  elements.btntree.classList.add("hide")
  
  
})
elements.btntreeOn.addEventListener('click', function noTocar(){
  sounds.floresta.pause()
  elements.btntreeOn.classList.add("hide")
  elements.btntree.classList.remove("hide")
})
elements.btnrain.addEventListener('click', function tocar(){
  sounds.chuva.play()
  elements.btnrainOn.classList.remove("hide")
  elements.btnrain.classList.add("hide")
  
  
})
elements.btnrainOn.addEventListener('click', function noTocar(){
  sounds.chuva.pause()
  elements.btnrainOn.classList.add("hide")
  elements.btnrain.classList.remove("hide")
})
elements.btncofee.addEventListener('click', function tocar(){
  sounds.cafeteria.play()
  elements.btncofeeOn.classList.remove("hide")
  elements.btncofee.classList.add("hide")
  
  
})
elements.btncofeeOn.addEventListener('click', function noTocar(){
  sounds.cafeteria.pause()
  elements.btncofeeOn.classList.add("hide")
  elements.btncofee.classList.remove("hide")
})
elements.plus.addEventListener('click', function addTime(){
  let a = Number(minutes.textContent) 
  let b = Number(seconds.textContent) 
  

  if (a>59) {
    a = 60
    b = 0
    minutes.innerHTML = a
    seconds.innerHTML = b
    return
  } else {
    
    a = a + 5
    minutes.innerHTML = a
  }
  
  
})
elements.minus.addEventListener('click', function remoeTime(){
  let a = Number(minutes.textContent) 
  let b = Number(seconds.textContent) 
  

  if (a < 0) {
    a = 0
    b = 0
    minutes.innerHTML = a
    seconds.innerHTML = b
    return
  } else {
    
    a = a - 5
    minutes.innerHTML = a
  }
  
  
})




function countdownMinutes(){
  
  let b = Number(minutes.textContent) 
  let a = Number(seconds.textContent) 

  if (b > 60) {
    b =60
    a = 0
    b= b -1
    minutes.innerHTML = b
    seconds.innerHTML = a
    return
  } 
  if (b > 60 || b < 0) {
    b = 59
    minutes.innerHTML = b
    return
  } else {
    
  }
  if (b == 0) {
    return
  } 
    b= b -1
    minutes.innerHTML = b
    
    return

}
function countdownSeconds(){
  
  if (state == false) {
    return
  } 
 
  let b = Number(minutes.textContent) 
  let a = Number(seconds.textContent) 

  if (b > 60) {
    b =60
    a = 60
    b= b -1
    a= a -1
    minutes.innerHTML = b
    seconds.innerHTML = a
    return
  } 

  if (b < 0) {
    b = "00"
    a = "00"
    
    minutes.innerHTML = b
    seconds.innerHTML = a
    return
  } 
  
  if (a > 60 || a < 0) {
    countdownMinutes()
    a = 60
    seconds.innerHTML = a
  } else {
    
  }
  
    if (seconds.innerHTML <= 0 && minutes.innerHTML <= 0) {
      minutes.innerHTML = "00"
      seconds.innerHTML = "00"
      sounds.kichenTimer.play()
      return
    }
     
    
    a = a - 1
    
    if (seconds.innerHTML <= 0) {
      countdownMinutes()
      a = 59
      seconds.innerHTML = a
    }
    seconds.innerHTML = a

    setTimeout(()=> countdownSeconds(), 1000)
  
}
function run(){
  elements.pause.classList.remove("hide")
  elements.reset.classList.remove("hide")
  elements.play.classList.add("hide")
  elements.timer.classList.add("hide")
  state = true
  return
  
}
function stand(){
  elements.play.classList.remove("hide")
  elements.timer.classList.remove("hide")
  elements.pause.classList.add("hide")
  elements.reset.classList.add("hide")
  state = false
  return
  
  
}


















