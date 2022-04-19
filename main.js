const ctx = document.getElementById("myChart").getContext("2d");

let delayed;
// Gradient fill
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(58,123,213,1");
gradient.addColorStop(1, "rgba(0,210,255,0.3");

const labels = [
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2021",
];

const data = {
  labels,
  datasets: [
    {
      data: [1419, 1398, 1342, 1102, 1134, 1389, 1201, 1400, 1219, 1691],
      label: "Total Cats Adoption",
      fill: true,
      backgroundColor: gradient,
      borderColor: "#fff",
      pointBackgroundColor: "rgb(189,195,199",
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    radius: 5,
    hitRadius: 30, // this will allow it not to only hit at the exact radius point
    hoverRadius: 12,
    responsive: true,
    tension: 0.2,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    // if we need to add additional info to the labels
    // scales : {
    //     y: {
    // ticks: {
    //     callback : function(value) {
    //         return value + xx
    //     }
    // }
    //     }
    // }
  },
};

const myChart = new Chart(ctx, config);
