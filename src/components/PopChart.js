import React, { Component } from "react";
// import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

class PopChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: "#f4f4f4",
          foreColor: "#333",
        },
        xaxis: {
          categories: [
            "Quezon City",
            "Manila",
            "Caloocan City",
            "Davao",
            "Cebu City",
            "General Santos",
            "Taguig",
            "Pasig City",
            "Las Pinas",
            "Antipolo",
          ],
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        fill: {
          colors: ["#f15337"],
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "10 Largest Cities in Philippines by Population",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px",
          },
        },
      },
      series: [
        {
          name: "Population",
          data: [
            2761720, 1600000, 1500000, 1212504, 798634, 679588, 644473, 617301,
            590000, 549543,
          ],
        },
      ],
    };
  }

  onClick = () => {
    // console.log("Horizontal is Clicked");
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal,
          },
        },
      },
    });
  };

  render() {
    // return <h1>Chart</h1>;
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="450"
          width="100%"
        />
        <button onClick={this.onClick}>Toggle</button>
      </React.Fragment>
    );
  }
}

export default PopChart;
