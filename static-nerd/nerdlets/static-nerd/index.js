import React from 'react';
import { BarChart, HeatmapChart, BillboardChart, LineChart } from "nr1";

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class StaticNerdNerdlet extends React.Component {
  render() {
    const data1 = {
      metadata: {
        id: "version-a-newsletter-signups",
        name: "Data 1",
        viz: "main",
        color: "blue",
      },
      data: [
        { x: 0, y: 0 },
        { x: 10, y: 5 },
        { x: 20, y: 10 },
        { x: 30, y: 8 },
        { x: 40, y: 15 },
        { x: 50, y: 20 },
      ],
    };

    const data2 = {
      metadata: {
        id: "version-b-newsletter-signups",
        name: "Data 2",
        viz: "main",
        color: "green",
      },
      data: [
        { x: 0, y: 10 },
        { x: 10, y: 8 },
        { x: 20, y: 15 },
        { x: 30, y: 20 },
        { x: 40, y: 25 },
        { x: 50, y: 30 },
      ],
    };

  return (
    <>
      <BarChart
        accountId={4267261}
        data={[data1, data2]}
        fullWidth
      />
      <HeatmapChart
        accountId={4267261}
        data={[data1, data2]}
        fullWidth
      />
      <BillboardChart
        accountId={4267261}
        data={[data1, data2]}
        fullWidth
      />
      <LineChart
        accountId={4267261}
        data={[data1, data2]}
        fullWidth
      />
    </>
  );
}
}