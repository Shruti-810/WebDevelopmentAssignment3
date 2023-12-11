/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let cost_per_day = 35;  //Full day button is clicked by default
let number_of_selected_days = 0;
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let calculated_cost = document.getElementById("calculated-cost");
let full_day_button = document.getElementById('full');
let half_day_button = document.getElementById('half');
let clear_button = document.getElementById("clear-button");                                                                                     

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
monday.addEventListener('click',mondayClicked);
function mondayClicked(){
    if(!monday.classList.contains('clicked')){
        monday.classList.add('clicked');
        number_of_selected_days = number_of_selected_days + 1;
        recalculateCost();
    }
}

tuesday.addEventListener('click',tuesdayClicked);
function tuesdayClicked(){
    if(!tuesday.classList.contains('clicked')){
        tuesday.classList.add('clicked');
        number_of_selected_days = number_of_selected_days + 1;
        recalculateCost();
    }
}

wednesday.addEventListener('click',wednesdayClicked);
function wednesdayClicked(){
    if(!wednesday.classList.contains('clicked')){
        wednesday.classList.add('clicked');
        number_of_selected_days = number_of_selected_days + 1;
        recalculateCost();
    }
}

thursday.addEventListener('click',thursdayClicked);
function thursdayClicked(){
    if(!thursday.classList.contains('clicked')){
        thursday.classList.add('clicked');
        number_of_selected_days = number_of_selected_days + 1;
        recalculateCost();
    }
}

friday.addEventListener('click',fridayClicked);
function fridayClicked(){
    if(!friday.classList.contains('clicked')){
        friday.classList.add('clicked');
        number_of_selected_days = number_of_selected_days + 1;
        recalculateCost();
    }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clear_button.addEventListener('click',clearDays);
function clearDays(){
    number_of_selected_days = 0;
    recalculateCost();
    monday.classList.remove('clicked');
    tuesday.classList.remove('clicked');
    wednesday.classList.remove('clicked');
    thursday.classList.remove('clicked');
    friday.classList.remove('clicked');
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
half_day_button.addEventListener('click',halfDay);
function halfDay(){
    cost_per_day = 20;
    half_day_button.classList.add('clicked');
    full_day_button.classList.remove('clicked');
    recalculateCost();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full_day_button.addEventListener('click',fullDay);
function fullDay(){
    cost_per_day = 35;
    full_day_button.classList.add('clicked');
    half_day_button.classList.remove('clicked');
    recalculateCost();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculateCost(){
    calculated_cost.innerHTML = cost_per_day * number_of_selected_days;
}
