import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    // Apply logarithmic scale to the value
    const logValue = Math.log(props.value + 1); // Adding 1 to avoid log(0)

    // Define a maximum percentage height for a bar (e.g., 80%)
    const maxBarHeightPercentage = 100;

    // Calculate the bar height percentage based on the logarithmic scale and the maximum percentage height
    barFillHeight =
      Math.round(
        (logValue / Math.log(props.maxValue + 1)) * maxBarHeightPercentage
      ) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
