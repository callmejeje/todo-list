import React from "react";
import { Button } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Calendar = React.forwardRef(({ value, onClick }, ref) => (
  <Button onClick={onClick} ref={ref}>
    {/* {value} */}
    <FontAwesomeIcon icon={faCalendarDays} fontSize={"20px"} />
  </Button>
));

export default Calendar;
