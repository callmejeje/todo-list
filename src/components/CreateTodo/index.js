import React, { useState } from "react";

import Calendar from "../Calendar";

import { fetchCreate } from "../../util/api";
import useInput from "../../util/useInput";
import Input from "../Input";

import {
  InputContainer,
  MyDatePicker,
  Container,
  Form,
  Button,
} from "./styles";

import "react-datepicker/dist/react-datepicker.css";

function CreateTodo({ todos }) {
  const [content, contentBind] = useInput("");

  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      content,
      status: 0,
      date: date ? date.toLocaleDateString("ko-KR") : "",
    };
    fetchCreate("http://localhost:3001/todos/", data);
  };

  return (
    <Container>
      {todos && (
        <>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <Input label={"할 일"} value={contentBind} />
              <MyDatePicker
                dateFormat="yyyy/MM/dd"
                // selected={new Date()}
                onChange={(date) => setDate(date)}
                minDate={new Date()}
                customInput={<Calendar />}
              />
              <Button>등록</Button>
            </InputContainer>
          </Form>
        </>
      )}
    </Container>
  );
}

export default CreateTodo;
