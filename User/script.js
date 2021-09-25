// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
var options = {
    series: [
      {
        name: "Paper",
        data: [10, 12, 8, 9, 7.5, 11, 12, 10, 9],
      },
      {
        name: "Metal",
        data: [5, 4, 6, 3, 3, 5, 4, 4, 5],
      },
      {
      name: "Plastic",
      data: [6, 4, 4, 3, 4, 5, 6, 7, 2],
    },
    {
      name: "e-waste",
      data: [1, 2, 0.5, 2, 3, 1, 2, 3, 1],
      },
    ],
    chart: {
      type: "bar",
      height: 250, // make this 250
      sparkline: {
        enabled: true, // make this true
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    yaxis: {
      title: {
        text: "Kg",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "Kg";
        },
      },
    },
  };
  
  var chart = new ApexCharts(document.querySelector("#apex1"), options);
  chart.render();
  
  // Sidebar Toggle Codes;
  
  var sidebarOpen = false;
  var sidebar = document.getElementById("sidebar");
  var sidebarCloseIcon = document.getElementById("sidebarIcon");
  
  function toggleSidebar() {
    if (!sidebarOpen) {
      sidebar.classList.add("sidebar_responsive");
      sidebarOpen = true;
    }
  }
  
  function closeSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove("sidebar_responsive");
      sidebarOpen = false;
    }
  }




const reducer = (previousVal, currentVal) => previousVal + currentVal;
const sumPaper = options.series[0].data.reduce(reducer);
const sumMetal = options.series[1].data.reduce(reducer);
const sumPlastic = options.series[2].data.reduce(reducer);
const sumeWaste = options.series[3].data.reduce(reducer);
document.getElementById('totalPoints').innerHTML = sumPaper + sumMetal * 3 + sumPlastic * 2 + sumeWaste * 4
document.getElementById('paperPoints').innerHTML = sumPaper;
document.getElementById('plasticPoints').innerHTML = sumPlastic * 2;
document.getElementById('metalPoints').innerHTML = sumMetal * 3;
document.getElementById('e-wastePoints').innerHTML = sumeWaste * 4;
document.getElementById('paper').innerHTML = sumPaper + "kg";
document.getElementById('metal').innerHTML = sumMetal + "kg";
document.getElementById('plastic').innerHTML = sumPlastic + "kg";
document.getElementById('e-waste').innerHTML = sumeWaste + "kg";
document.getElementById('weight').innerHTML = (sumPaper + sumMetal + sumPlastic + sumeWaste) + " kg";

document.getElementById('formRequest').onsubmit = (function (e) {
  e.preventDefault();
  alert("Pickup Registered for " + e.target[0].value + " ,our executive will contact you for pickup.")
})