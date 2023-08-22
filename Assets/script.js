//waits to run any code until the window has loaded
window.addEventListener("load", function(event){
    console.log('window is loaded')

    var currentTime = $(dayjs().hour())
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
    console.log('hours', hoursToCheck)

    var saveButton = this.document.querySelectorAll('.saveBtn')

    function checkTime(hoursToCheck) {
        console.log('checking time')
        console.log('id', this.id)
        // for (var i = 0; i < this.length; i++){
            if (hoursToCheck.div.id < currentTime) {
                $(hoursToCheck.div).addClass('past');
            }
        }
    // }

    //show current day in header
    $('#currentDay').text(dayjs().format('dddd  MMMM D, YYYY  h:mm a'));

    
    function saveItem() {
        console.log('save button clicked')
    }

    checkTime()
})



