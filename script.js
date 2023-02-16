//create variables to hold the cashier and overall scores
let cashier = 0
let c_tot = 0
let c_num = 0
let overall = 0
let o_tot = 0
let o_num = 0

let cashierScore = document.querySelector("#cashierScore")
let overallScore = document.querySelector("#overallScore")

//cashier button 1
cashierScoreBtn1 = document.querySelector("#cashier-1")
cashierScoreBtn1.addEventListener("click", function() {
	c_tot = c_tot + 1 //adding 1 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	cashierScore.textContent = cashier
})

//cashier button 2
cashierScoreBtn2 = document.querySelector("#cashier-2")
cashierScoreBtn2.addEventListener("click", function() {
	c_tot = c_tot + 2 //adding 2 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	cashierScore.textContent = cashier
})

//cashier button 3
cashierScoreBtn3 = document.querySelector("#cashier-3")
cashierScoreBtn3.addEventListener("click", function() {
	c_tot = c_tot + 3 //adding 3 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	cashierScore.textContent = cashier
})


//cashier button 4
cashierScoreBtn4 = document.querySelector("#cashier-4")
cashierScoreBtn4.addEventListener("click", function() {
	c_tot = c_tot + 4 //adding 4 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	cashierScore.textContent = cashier
})

//overall button 1
overallScoreBtn1 = document.querySelector("#overall-1")
overallScoreBtn1.addEventListener("click", function() {
	c_tot = c_tot + 1 //adding 1 to score
	c_num = c_num + 1
	overall = c_tot / c_num
	overallScore.textContent = overall
})

//overall button 2
overallScoreBtn2 = document.querySelector("#overall-2")
overallScoreBtn2.addEventListener("click", function() {
	c_tot = c_tot + 2 //adding 2 to score
	c_num = c_num + 1
	overall = c_tot / c_num
	overallScore.textContent = overall
})

//overall button 3
overallScoreBtn3 = document.querySelector("#overall-3")
overallScoreBtn3.addEventListener("click", function() {
	c_tot = c_tot + 3 //adding 3 to score
	c_num = c_num + 1
	overall = c_tot / c_num
	overallScore.textContent = overall
})

//overall button 4
overallScoreBtn4 = document.querySelector("#overall-4")
overallScoreBtn4.addEventListener("click", function() {
	c_tot = c_tot + 4 //adding 4 to score
	c_num = c_num + 1
	overall = c_tot / c_num
	overallScore.textContent = overall
})

let showHide = document.querySelector("#show-hide")
showHide.addEventListener('click',function(){
  let scoresDiv = document.querySelector("#show-scores")

  cashierScore.textContent = cashier
  overallScore.textContent = overall

  let btnText = showHide.textContent
  if(btnText === "Display Ratings"){
	scoresDiv.style.display = "block"
	showHide.innerHTML = "Hide Ratings"
  }
  else{
	scoresDiv.style.display = "none"
	showHide.innerHTML = "Display Ratings"
  }
})