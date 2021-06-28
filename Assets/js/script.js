// Get current day using moment.js
var currentDay = moment().format("dddd, MMMM Do");

// Set each timeblock in the daily schedule using moment.js
var hour9 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);
var hour17 = moment().hour(17);

// Array for Time Blocks
var hours = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16];

// Get local storage data or set to empty
var tasks9 = JSON.parse(localStorage.getItem('hour9')) || "";
var tasks10 = JSON.parse(localStorage.getItem('hour10')) || "";
var tasks11 = JSON.parse(localStorage.getItem('hour11')) || "";
var tasks12 = JSON.parse(localStorage.getItem('hour12')) || "";
var tasks13 = JSON.parse(localStorage.getItem('hour13')) || "";
var tasks14 = JSON.parse(localStorage.getItem('hour14')) || "";
var tasks15 = JSON.parse(localStorage.getItem('hour15')) || "";
var tasks16 = JSON.parse(localStorage.getItem('hour16')) || "";

// Make Time Blocks and enter saved data (local storage)
$.each(hours, function (index, value) {
    tasks = [tasks9, tasks10, tasks11, tasks12, tasks13, tasks14, tasks15, tasks16]
    $(".container").append("<div class='row'><div class='col-2 hour text-right' id='hour" +
        (index + 9) + "'><span>" + value.format("h A") + "</span></div><div class='col-8 task-group' id='timeblock" +
        (index + 9) + "'><textarea class='tasks col-12' id='taskblock" + (index + 9) + "'>" + tasks[index] + "</textarea></div>" +
        "<div class='col-2 keep-delete' id='keep-delete" + (index + 9) + "'><i class='fas fa-thumbs-up' title='Save Task'></i> <i class='fas fa-thumbs-down' title='Remove Task'></i></div></div></div>");
});

// Displays the current Day in Jumbotron header
$("#currentDay").text(currentDay);

// Adding time construct - past Present Future with colour coding
var auditTime = function () {
    currentTime = moment().format("hh:mm:ss");
    

    // hour9am
    if (moment().isBetween(hour9, hour10)) {
        $("#timeblock9").addClass("present");
    }
    else if (moment().isAfter(hour10)) {
        $("#timeblock9").addClass("past");
    }
    else {
        $("#timeblock9").addClass("future");
    }

    // hour10am
    if (moment().isBetween(hour10, hour11)) {
        $("#timeblock10").addClass("present");
    }
    else if (moment().isAfter(hour11)) {
        $("#timeblock10").addClass("past");
    }
    else {
        $("#timeblock10").addClass("future");
    }

    // hour11am
    if (moment().isBetween(hour11, hour12)) {
        $("#timeblock11").addClass("present");
    }
    else if (moment().isAfter(hour12)) {
        $("#timeblock11").addClass("past");
    }
    else {
        $("#timeblock11").addClass("future");
    }

    // hour12pm
    if (moment().isBetween(hour12, hour13)) {
        $("#timeblock12").addClass("present");
    }
    else if (moment().isAfter(hour13)) {
        $("#timeblock12").addClass("past");
    }
    else {
        $("#timeblock12").addClass("future");
    }

    // hour 1pm
    if (moment().isBetween(hour13, hour14)) {
        $("#timeblock13").addClass("present");
    }
    else if (moment().isAfter(hour14)) {
        $("#timeblock13").addClass("past");
    }
    else {
        $("#timeblock13").addClass("future");
    }

    // hour 2pm
    if (moment().isBetween(hour14, hour15)) {
        $("#timeblock14").addClass("present");
    }
    else if (moment().isAfter(hour15)) {
        $("#timeblock14").addClass("past");
    }
    else {
        $("#timeblock14").addClass("future");
    }

    // hour 3pm
    if (moment().isBetween(hour15, hour16)) {
        $("#timeblock15").addClass("present");
    }
    else if (moment().isAfter(hour16)) {
        $("#timeblock15").addClass("past");
    }
    else {
        $("#timeblock15").addClass("future");
    }

    // hour 4pm
    if (moment().isBetween(hour16, hour17)) {
        $("#timeblock16").addClass("present");
    }
    else if (moment().isAfter(hour17)) {
        $("#timeblock16").addClass("past");
    }
    else {
        $("#timeblock16").addClass("future");
    }

}


// Enable delete task for each timeblock (clicking on thumbs-down icon)
$("#keep-delete9").on("click", "i.fa-thumbs-down", function () {
    localStorage.removeItem("hour9");
    $("#taskblock9").val("");
})
$("#keep-delete10").on("click", "i.fa-thumbs-down", function () {
    localStorage.removeItem("hour10");
    $("#taskblock10").val("");
})
$("#keep-delete11").on("click", "i.fa-thumbs-down", function () {
    localStorage.removeItem("hour11");
    $("#taskblock11").val("");
})
$("#keep-delete12").on("click", "i.fa-thumbs-down", function () {
    localStorage.removeItem("hour12");
    $("#taskblock12").val("");
})
$("#keep-delete13").on("click", "i.fa-thumbs-down", function () {
    localStorage.removeItem("hour13");
    $("#taskblock13").val("");
})
$("#keep-delete14").on("click", "i.fa-thumbs-down", function () {
    localStorage.removeItem("hour14");
    $("#taskblock14").val("");
})
$("#keep-delete15").on("click", "i.fa-thumbs-down", function () {
    localStorage.removeItem("hour15");
    $("#taskblock15").val("");
})
$("#keep-delete16").on("click", "i.fa-thumbs-down", function () {
    localStorage.removeItem("hour16");
    $("#taskblock16").val("");
})



// Enable keep task for each timeblock (clicking on thumbs-up icon)
$("#keep-delete9").on("click", "i.fa-thumbs-up", function () {
    var task9 = $("#taskblock9").val().trim();
    localStorage.setItem('hour9', JSON.stringify(task9));
})
$("#keep-delete10").on("click", "i.fa-thumbs-up", function () {
    var task10 = $("#taskblock10").val().trim();
    localStorage.setItem('hour10', JSON.stringify(task10));
})
$("#keep-delete11").on("click", "i.fa-thumbs-up", function () {
    var task11 = $("#taskblock11").val().trim();
    localStorage.setItem('hour11', JSON.stringify(task11));
})
$("#keep-delete12").on("click", "i.fa-thumbs-up", function () {
    var task12 = $("#taskblock12").val().trim();
    localStorage.setItem('hour12', JSON.stringify(task12));
})
$("#keep-delete13").on("click", "i.fa-thumbs-up", function () {
    var task13 = $("#taskblock13").val().trim();
    localStorage.setItem('hour13', JSON.stringify(task13));
})
$("#keep-delete14").on("click", "i.fa-thumbs-up", function () {
    var task14 = $("#taskblock14").val().trim();
    localStorage.setItem('hour14', JSON.stringify(task14));
})
$("#keep-delete15").on("click", "i.fa-thumbs-up", function () {
    var task15 = $("#taskblock15").val().trim();
    localStorage.setItem('hour15', JSON.stringify(task15));
})
$("#keep-delete16").on("click", "i.fa-thumbs-up", function () {
    var task16 = $("#taskblock16").val().trim();
    localStorage.setItem('hour16', JSON.stringify(task16));
})

//set current time
setInterval(function () {
    $(".task-group .tasks").each(function (index, el) {
        auditTime(el);
    });

}, (1000 * 60)); 

auditTime();