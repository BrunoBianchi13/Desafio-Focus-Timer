
const btnsun =document.querySelector("#sun")
const btnmoon =document.querySelector("#moon")

btnsun.addEventListener('click', function troca(){
  document.querySelector('html').classList.add("light")
})

btnmoon.addEventListener('click', function troca(){
  document.querySelector('html').classList.remove("light")
})