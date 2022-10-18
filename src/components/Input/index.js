import { TodoInput } from "./styles";

const Input = ({ label, value }) => {
  return (
    <>
      <TodoInput
        type="text"
        required
        {...value}
        placeholder={`새로운 ${label}`}
      />
    </>
  );
};

export default Input;
