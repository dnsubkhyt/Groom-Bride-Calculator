function calculatePrice(event) {
    event.preventDefault(); 

    let basePrice = 100;
    let finalPrice = basePrice;

    const education = parseFloat(document.getElementById('education').value);
    const networth = parseFloat(document.getElementById('networth').value);
    const caste = parseInt(document.getElementById('caste').value);

    finalPrice =  basePrice * education*networth;
    finalPrice += caste;

    let totalSkillsValue = calculateSkills();
    finalPrice += totalSkillsValue; 

    const age = document.querySelector('input[name="age"]:checked');
    if (age) {
        finalPrice *= parseFloat(age.value);
    }

    finalPrice = calculateReputation(finalPrice);
    document.getElementById('finalPrice').innerText = `Final Price: $${finalPrice.toFixed(3)}`;
}


function calculateSkills() {
    let total = 0; 
    const skills = document.querySelectorAll('input[type="checkbox"].skill:checked');

    if (skills.length > 0) {
        skills.forEach(skill => {
            total += parseInt(skill.value); 
        });
    }

    return total; // Return the total skills value
}

function calculateReputation(finalPrice) {
    const reputation = document.querySelectorAll('input[type="checkbox"].reputation:checked'); 

    if (reputation.length > 0) { 
        reputation.forEach(element => {
            if (element.id === "generalGossip"){
                finalPrice += parseFloat(element.value);
            }else{
                finalPrice *= parseFloat(element.value); 
            }
               
        });
    }

    return finalPrice; 
}


document.getElementById('calculate').addEventListener('click', calculatePrice);
