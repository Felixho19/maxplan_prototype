// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Physics", "Chemistry", "Economics", "History", "Art", "Biology"],
    datasets: [{
      label: "Sutability",
      backgroundColor: "#437F97",
      borderColor: "rgba(2,117,216,1)",
      data: [80, 70, 64, 64, 54, 50],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'Subjects'
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
