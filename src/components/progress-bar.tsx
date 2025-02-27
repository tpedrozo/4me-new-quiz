"use client";

import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type ProgressBarProps = {
  percentage: number;
  pathColor?: string;
  trailColor?: string;
  textColor?: string;
};

export default function ProgressBar({
  percentage,
  pathColor = "black",
  trailColor = "white",
  textColor = "black",
}: ProgressBarProps) {
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={{
        path: {
          stroke: pathColor,
        },
        trail: {
          stroke: trailColor,
        },
        text: {
          fill: textColor,
          fontSize: "18px",
          transform: "translateX(05%)",
        },
      }}
    />
  );
}
