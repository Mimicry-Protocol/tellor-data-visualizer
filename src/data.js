import Chart from 'chart.js/auto';
import chartData from './data.json';

function formatDate(epoch) {
    const date = new Date(epoch * 1000); // convert to milliseconds
    const month = date.getMonth() + 1; // getMonth() returns 0-11
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'p' : 'a'; // determine if it's AM or PM
    const formattedHours = hours % 12 || 12; // convert to 12-hour format
    return `${month}/${day} @ ${formattedHours}:${minutes.toString().padStart(2, '0')}${ampm}`;
}

(async function() {
    
    let data = [];
    for (report of chartData.data.newReportEntities) {
        data.push({
            date: report._time + " - " + formatDate(report._time),
            value: report._value
        });
    }

    data.reverse();

  new Chart(
    document.getElementById('data'),
    {
      type: 'bar',
      options: {
        animation: true,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            enabled: true
          }
        }
      },
      data: {
        labels: data.map(row => row.date),
        datasets: [
          {
            label: 'Reports by Time',
            data: data.map(row => row.value)
          }
        ]
      }
    }
  );
})();
