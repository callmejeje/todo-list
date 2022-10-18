import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Button = styled.button`
  /* margin-left: 4px; */
`;

export const MyDatePicker = styled(DatePicker)`
  margin-left: auto;
  margin-right: 0;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 400px;
  .react-datepicker-wrapper {
    width: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

export const Form = styled.form`
  display: flex;
  width: 400px;
`;
