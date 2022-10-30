import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const AreaButtonGroup = (props) => {
  const { area, onAreaChange } = props;
  const [newArea, setNewArea] = useState(area);

  const handleChange = (event, newValue) => {
    setNewArea(newValue);
    onAreaChange(newValue);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={newArea}
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
