import { useEffect } from "react";
import * as d3 from "d3";
import "./../styles/BarChart.css";

const BarChart = () => {
  useEffect(() => {
    const width = 800;
    const height = 400;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 30;
    const marginLeft = 40;

    // Remove any existing SVG to avoid duplicates
    d3.select("#chart").selectAll("*").remove();

    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const tooltip = d3
      .select("#container")
      .append("div")
      .attr("id", "tooltip")
      .style("opacity", 0);

    const overlay = d3
      .select("#container")
      .append("div")
      .attr("class", "overlay")
      .style("opacity", 0);

    const getAndVisualizeData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"
        );
        const data = await response.json();
        constructBarChart(data);
      } catch (err) {
        console.error(err);
      }
    };

    const constructBarChart = (data) => {
      const yearsDate = data.data.map((d) => new Date(d[0]));
      const GDP = data.data.map((d) => d[1]);

      const years = data.data.map((item) => {
        let quarter;
        let month = item[0].substring(5, 7);
        if (month === "01") quarter = "Q1";
        else if (month === "04") quarter = "Q2";
        else if (month === "07") quarter = "Q3";
        else if (month === "10") quarter = "Q4";
        return item[0].substring(0, 4) + " " + quarter;
      });

      const xScale = d3
        .scaleTime()
        .domain([d3.min(yearsDate), d3.max(yearsDate)])
        .range([marginLeft, width - marginRight]);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(GDP)])
        .range([height - marginBottom, marginTop]);

      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale);

      svg
        .append("g")
        .attr("id", "x-axis")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(xAxis)
        .selectAll("path, line, text")
        .style("stroke", "white")
        .style("fill", "white")
        .style("font-size", "12px");

      svg
        .append("g")
        .attr("id", "y-axis")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)
        .selectAll("path, line, text")
        .style("stroke", "white")
        .style("fill", "white")
        .style("font-size", "12px");

      const barWidth = Math.max(
        (width - marginLeft - marginRight) / data.data.length,
        1
      );

      svg
        .selectAll("rect")
        .data(GDP)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("data-date", (d, i) => data.data[i][0])
        .attr("data-gdp", (d) => d)
        .attr("x", (d, i) => xScale(yearsDate[i]))
        .attr("y", (d) => yScale(d))
        .attr("width", barWidth)
        .attr("height", (d) => height - marginBottom - yScale(d))
        .attr("index", (d, i) => i)
        .style("fill", "grey")
        .on("mouseover", function (event, d) {
          let i = +this.getAttribute("index");
          overlay
            .style("opacity", 0.9)
            .style("left", marginLeft + i * barWidth + "px")
            .style("top", height - marginBottom - d + "px")
            .style("height", height - marginBottom - yScale(d) + "px")
            .style("width", barWidth + "px");
          tooltip
            .style("opacity", 0.9)
            .html(
              years[i] +
                "<br>$" +
                GDP[i].toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") +
                " Billion"
            )
            .attr("data-date", data.data[i][0])
            .style("left", marginLeft + i * barWidth + 30 + "px")
            .style("top", height - 100 + "px");
        })
        .on("mouseout", function () {
          tooltip.style("opacity", 0);
          overlay.style("opacity", 0);
        });
    };

    getAndVisualizeData();

    // Cleanup function to remove any existing elements
    return () => {
      d3.select("#chart").selectAll("*").remove();
      d3.select("#tooltip").remove();
      d3.select(".overlay").remove();
    };
  }, []);

  return <div id="chart"></div>;
};

export default BarChart;
