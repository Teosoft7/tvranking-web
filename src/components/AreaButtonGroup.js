import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const AreaButtonGroup = () => {
  const [area, setArea] = useState("gse");

  const handleChange = (event, newArea) => {
    setArea(newArea);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={area}
      exclusive
      aria-label="area"
      onChange={handleChange}
    >
      <ToggleButton value="gse">수도권</ToggleButton>
      <ToggleButton value="nat">전국</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default AreaButtonGroup;
