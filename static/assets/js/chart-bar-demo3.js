// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart3");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Social Worker", "Teacher", "Developer", "Doctor", "Lawyer", "Customer Service"],
    datasets: [{
      label: "Sutability",
      backgroundColor: "#E8C547",
      borderColor: "rgba(2,117,216,1)",
      data: [92, 88, 70, 64, 63, 60],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'Jobs'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 0.01
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
