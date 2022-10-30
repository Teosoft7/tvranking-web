import { useState } from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import AreaButtonGroup from "./AreaButtonGroup";

const QueryToolbar = (props) => {
  const { area, date, onDateChange, onAreaChange } = props;
  const [dateValue, setDateValue] = useState(dayjs(date));
  const [areaValue, setAreaValue] = useState(area);

  return (
    <Toolbar>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            label="방송일자"
            value={dateValue}
            onChange={(newValue) => {
              const newDate = dayjs(newValue).format("YYYY-MM-DD");
              console.log(`new date : ${newDate}`);
              setDateValue(newDate);
              onDateChange(newDate);
            }}
            renderInput={(params) => (
              <TextField
                sx={{ paddingRight: 1 }}
                variant="standard"
                size="small"
                {...params}
              />
            )}
          />
        </LocalizationProvider>
      </Box>
      <AreaButtonGroup
        onAreaChange={(newValue) => {
          setAreaValue(newValue);
          onAreaChange(newValue);
        }}
        area={areaValue}
      />
    </Toolbar>
  );
};

export default QueryToolbar;
