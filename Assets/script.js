//waits to run any code until the window has loaded
window.addEventListener("load", function(event){
    console.log('window is loaded')

    //checks for current hour
    var d = new Date()
    var currentHour = d.getHours()
    console.log('currentHour', currentHour)

    //gathers elements on the page into array
    var hoursToCheck = [
        h7 = this.document.getElementById('7'),
        h8 = this.document.getElementById('8'),
        h9 = this.document.getElementById('9'),
        h10 = this.document.getElementById('10'),
        h11 = this.document.getElementById('11'),
        h12 = this.document.getElementById('12'),
        h13 = this.document.getElementById('13'),
        h14 = this.document.getElementById('14'),
        h15 = this.document.getElementById('15'),
        h16 = this.document.getElementById('16'),
        h17 = this.document.getElementById('17')
    ]

    var saveButton = this.document.getElementsByClassName('.saveBtn')
    console.log('save button', saveButton)

    //checks each hour block against current hour and assigns classes for formatting
    function checkTime() {
        console.log('hourstocheck', hoursToCheck)
        console.log('checking time')
        for (var i = 0; i < hoursToCheck.length; i ++) {
            console.log('id', hoursToCheck[i].id)
            if (hoursToCheck[i].id < currentHour) {
                console.log('setting class to past')
                hoursToCheck[i].setAttribute("class", "row time-block past");
            } else if (hoursToCheck[i].id === currentHour) {
                console.log('setting class to present')
                hoursToCheck[i].setAttribute("class", "row time-block present")
            } else {
                console.log('setting class to future')
                hoursToCheck[i].setAttribute("class", "row time-block future")
            }
    }}
    
    //show current day in header
    $('#currentDay').text(dayjs().format('dddd  MMMM D, YYYY  h:mm a'));

    function saveItem() {
        console.log('save button clicked')
    }

    for (var i = 0; i < saveButton; i ++) {
        saveButton[i].addEventListener('click', saveItem)
    }

    //calls function to check time and assign formatting
    checkTime()
})



