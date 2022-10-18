import React from "react";
import {
  Ul,
  Li,
  Check,
  Button,
  Date,
  Content,
  ButtonContainer,
} from "./styles";
import { fetchPatch, fetchDelete } from "../../util/api";

function Todo({ todos }) {
  const handleCheck = (e, id) => {
    let status = e.target.checked ? 1 : 0;

    const data = { status: status };
    fetchPatch("http://localhost:3001/todos/", id, data);
  };

  const handleDelete = (id) => {
    fetchDelete("http://localhost:3001/todos/", id);
  };
  return (
    <Ul>
      {todos
        .sort((a, b) => b.id - a.id)
        .sort((a, b) => a.status - b.status)
        .map((todo) => (
          <Li key={todo.id}>
            <Check
              type="checkbox"
              onChange={(e) => handleCheck(e, todo.id)}
              checked={todo.status ? true : false}
            ></Check>
            <Content>{todo.content}</Content>
            <Date>{todo.date}</Date>
            <ButtonContainer>
              <Button onClick={() => handleDelete(todo.id)}>삭제</Button>
            </ButtonContainer>
          </Li>
        ))}
    </Ul>
  );
}

export default Todo;
