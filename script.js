const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const btnImg = document.getElementById('btn-img2');
const dayValidate = document.getElementById('day-validate');
const monthValidate = document.getElementById('month-validate');
const yearValidate = document.getElementById('year-validate');
// const answer = document.querySelector('.answer-sub');
const answerYear = document.getElementById('answer-year');
const answerMonths = document.getElementById('answer-months');
const answerDays = document.getElementById('answer-days');


btnImg.addEventListener('click',(e)=>{
    e.preventDefault();

    if(Number(day.value) > 31 || Number(day.value) <= 0 ){
        dayValidate.innerHTML = "Must be a valid day";
    }
    else{
        dayValidate.innerHTML = "";
    }

    if(Number(month.value) > 12 || Number(month.value) <= 0){
        monthValidate.innerHTML = "Must be a valid month";
    }
    else{
        monthValidate.innerHTML = "";
    }

    if(Number(year.value) > 2024 || Number(year.value) <= 0){
        yearValidate.innerHTML = "Must be a valid year";
    }
    else{
        yearValidate.innerHTML = "";
    }

    const joinDate = day.value + "-" + month.value + "-" + year.value;
    const today = new Date();
    const birth = new Date(joinDate);

    let ageYears = today.getFullYear() - birth.getFullYear();
    let ageMonths = today.getMonth() - birth.getMonth();
    let ageDays = today.getDate() - birth.getDate();

    const answerSubs = document.querySelectorAll('.answer-sub');
    answerSubs.forEach(sub => {
        const children = sub.children;
        for (let i = 0; i < children.length; i++) {
            if ((i + 1) % 2 === 0) { 
                children[i].style.display = "none";
            } else {
                children[i].style.display = ""; 
            }
        }
    });

    answerYear.innerHTML = ageYears;
    answerMonths.innerHTML = ageMonths;
    answerDays.innerHTML = ageDays;


    console.log("ageYears",ageYears,"ageMonths",ageMonths,"ageDays",ageDays)

})