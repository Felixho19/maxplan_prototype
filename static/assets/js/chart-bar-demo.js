// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart2");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Social Work", "Computer Sceince", "Mathematics", "Medicine", "Economics", "Engineering"],
    datasets: [{
      label: "Sutability",
      backgroundColor: "#A83552",
      borderColor: "rgba(2,117,216,1)",
      data: [93, 79, 77, 75, 70, 65],
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
