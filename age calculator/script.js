let dateInput = document.querySelector(".date");
let calculateBtn = document.querySelector("button");
let result = document.querySelector("p");

// max selection is today
let today = new Date();
dateInput.max = today.toISOString().split("T")[0];


function getDaysInMonth(year,month){
    return  new Date(year, month, 0).getDate();
}

function calculateAge(){
    let birthDate = new Date(dateInput.value);
    let d1 = birthDate.getDay();
    let m1 = birthDate.getMonth()+1;
    let y1 = birthDate.getFullYear();

    // current date
    let d2 = today.getDay();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();  
    
    // age calculation

    // year
    let y3 = y2 - y1;

    // month
    let m3;
    if(m2>=m1){
        m3=m2-m1;
    }
    else{
        y3--;
        m3=12+m2-m1;
    }

    // day
    let d3;
    if(d2>=d1){
        d3=d2-d1;
    }
    else{
        m3--;
        d3 = getDaysInMonth(y3,m3) + d2 - d2;
        if(m3<0){
            y3--;
            m3 = 11;
        }
    }

    result.innerHTML = `You are <span>${y3}</span> years <span>${m3}</span> months <span>${d3}</span> days old.`;
}

calculateBtn.addEventListener("click", calculateAge);

