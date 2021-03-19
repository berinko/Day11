var monitorsListArray = ["Apple", "Peach", "Berry"];
var monitorsList = [];

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];

    for(var i = 0; i < newMonitorsList.length; i++) {
          monitorsList[i] = [newMonitorsList[i], i + 1];
    };
    return monitorsList;
}
console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;