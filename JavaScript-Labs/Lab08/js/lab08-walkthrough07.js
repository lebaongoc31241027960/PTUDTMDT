// Exercise 8.7: Arrays and calendar table
var daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
document.write("<table border='1' cellpadding='8'><thead><tr>");
for (var i = 0; i < daysOfWeek.length; i++) {
    var day = daysOfWeek[i];
    document.write("<th>" + day + "</th>");
}
document.write("</tr></thead><tbody><tr>");
for (var blank = 0; blank < 0; blank++) document.write("<td></td>");
for (var date = 1; date <= 30; date++) {
    document.write("<td>" + date + "</td>");
    if (date % 7 === 0 && date !== 30) document.write("</tr><tr>");
}
document.write("</tr></tbody></table>");
