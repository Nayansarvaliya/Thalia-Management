//navbar
const toggleButton = document.getElementById('toggleButton')
const navbarLinks = document.getElementById('navbarLinks')

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})
//calender
function bookNow() {
    const checkin = new Date(document.getElementById("checkin").value);
    const checkout = new Date(document.getElementById("checkout").value);
    const adults = document.getElementById("adults").value;
    const children = document.getElementById("children").value;
    const messageElement = document.getElementById("message");

    // Validate that check-out is after check-in and at least one adult is selected
    if (checkout <= checkin) {
        messageElement.innerText = "Check-out date must be after check-in date.";
        messageElement.style.color = "red";
        return;
    }
    if (adults < 1) {
        messageElement.innerText = "At least one adult must be selected.";
        messageElement.style.color = "red";
        return;
    }

    // If everything is valid, show a booking confirmation message
    messageElement.innerText = `Booking confirmed! Check-in: ${checkin.toDateString()}, Check-out: ${checkout.toDateString()}, Adults: ${adults}, Children: ${children}`;
    messageElement.style.color = "green";
}
//Fade
