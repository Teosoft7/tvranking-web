import { useState } from "react";

import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";

import AreaButtonGroup from "./AreaButtonGroup";

const QueryToolbar = (props) => {
  const { area, date, onDateChange, onAreaChange } = props;
  const [dateValue, setDateValue] = useState(dayjs(date));
  const [areaValue, setAreaValue] = useState(area);

  return (
    <Toolbar>
      <Grid container spacing={1}>
        <Grid item xs>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
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
        </Grid>
        <Grid item xs={4} justifyContent="flex-end">
          <AreaButtonGroup
            onAreaChange={(newValue) => {
              setAreaValue(newValue);
              onAreaChange(newValue);
            }}
            area={areaValue}
          />
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default QueryToolbar;
