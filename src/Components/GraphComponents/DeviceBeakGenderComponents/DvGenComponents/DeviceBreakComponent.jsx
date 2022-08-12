import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
function DeviceBreakComponent() {
  const [deviceCount, setDeviceCount] = useState([
    {
      name: "iOS",
      value: 5435,
    },
    {
      name: "Android",
      value: 5435,
    },
    {
      name: "Web",
      value: 5435,
    },
  ]);
  const deviceChangeHandler = (e) => {
    setDeviceCount(e.target.value);
  };
  const COLORS = ["#AB47BC", "#9CCC65", "#29B6F6"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="geo-tweet-barchart">
      <div>
        <h2 className="grapheads">Device Breakdown</h2>
      </div>
      <div className="select-muis">
        <div>
          <FormControl fullWidth>
            <InputLabel id="select-device">Select device</InputLabel>
            <Select
              labelId="select-device"
              id="demo-simple-select"
              value={deviceCount[0].name}
              name="Device"
              label="Device"
              onChange={setDeviceCount}
            >
              <MenuItem value={"iOS"}>iOs</MenuItem>
              <MenuItem value={"Android"}>Android</MenuItem>
              <MenuItem value={"Web"}>Web</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <PieChart width={500} height={500}>
          <Pie
            data={deviceCount}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {deviceCount.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default DeviceBreakComponent;
