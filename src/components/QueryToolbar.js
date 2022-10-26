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
  const { date, onDateChange, onAreaChange } = props;
  const [value, setValue] = useState(dayjs("2022-10-01"));

  return (
    <Toolbar>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            label="방송일자"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
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
      <AreaButtonGroup />
    </Toolbar>
  );
};

export default QueryToolbar;
