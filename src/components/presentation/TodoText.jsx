import { Text } from "@radix-ui/themes";

const TodoText = ({ todo, isDone }) => {
  return (
    <Text
      size={"5"}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {todo}
    </Text>
  );
};

export default TodoText;
