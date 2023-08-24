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

    //targets save button elements and returns array
    var saveButton = this.document.querySelectorAll('.saveBtn')
    var saveBtnArray = Array.from(saveButton)

    //variable for saved notification
    var savedNotification = this.document.getElementById('notify')

    //checks each hour block against current hour and assigns classes for formatting
    function checkTime() {
        console.log('hourstocheck', hoursToCheck)
        console.log('checking time')
        for (var i = 0; i < hoursToCheck.length; i ++) {
            // console.log('id', hoursToCheck[i].id)
            if (hoursToCheck[i].id < currentHour) {
                // console.log('setting class to past')
                hoursToCheck[i].setAttribute("class", "row time-block past");
            } else if (hoursToCheck[i].id == currentHour) {
                // console.log('setting class to present')
                hoursToCheck[i].setAttribute("class", "row time-block present")
            } else {
                // console.log('setting class to future')
                hoursToCheck[i].setAttribute("class", "row time-block future")
            }
    }}
    
    //show current day in header
    $('#currentDay').text(dayjs().format('dddd  MMMM D, YYYY  h:mm a'));

    //saves text from user to page when save button is clicked
    function saveItem() {
        console.log('save button clicked')
        var textInput = this.previousElementSibling.value
        var timeElement = this.parentNode.id
        console.log('save btn children', textInput)
        console.log('save btn parent id', timeElement)
        localStorage.setItem(timeElement, textInput)
        savedNotification.textContent = "Saved!"
        hideNotif() 
    }

    // timeout function to hide saved notification after certain period
    function hideNotif() {
        setTimeout(function() {
            if (1 === 1) {
            savedNotification.textContent = ""
        }
    }, 2000)}

    //assigns event listeners to each save button element
    for (var i = 0; i < saveBtnArray.length; ++i) {
        saveBtnArray[i].addEventListener('click', saveItem)
    }

    // checks for saved text from local storage
    $('#7 .description').val(localStorage.getItem('7'));
    $('#8 .description').val(localStorage.getItem('8'));
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('12 .description').val(localStorage.getItem('12'));
    $('13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));

    //calls function to check time and assign formatting
    checkTime()
})



