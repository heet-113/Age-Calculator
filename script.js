let btn = document.getElementById("submit-btn");
let age_display = document.getElementById("age-display");

const current_date = new Date();

btn.addEventListener("click", () => {
    const input_date = document.getElementById("date-input").value;

    const new_date = new Date(input_date);

    const input_day = new_date.getDate();
    const input_month = new_date.getMonth() + 1;
    const input_year = new_date.getFullYear();

    const current_day = current_date.getDate();
    const current_month = current_date.getMonth() + 1;
    const current_year = current_date.getFullYear();

    let age_year = (current_year - 1) - input_year;
    let age_month = (12 - input_month) + current_month;
    if(age_month > 12)
    {
        age_year++;
        age_month = age_month - 12;
    }
    else if(age_month == 12)
    {
        age_year++;
        age_month = 0;
    }
    let age_day = Math.abs(current_day - input_day);

    age_display.innerHTML = `You are ${age_year} years ${age_month} months and ${age_day} days old.`;
    
});


