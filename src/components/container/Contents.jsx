import { Box, Container, Flex, TextArea } from "@radix-ui/themes";
import Title from "../presentation/Title";

import Todo from "../presentation/Todo";
import List from "../layout/List";
import { useState } from "react";
import Input from "../presentation/Input";

const Contents = () => {
  const [list, setList] = useState([]);

  const addList = (todo) => {
    setList((prev) => [...prev, todo]);
  };

  const removeList = (i) => {
    setList((prev) => {
      const newArr = prev.filter((v, index) => index != i);
      return newArr;
    });
  };

  return (
    <Container size={"3"} p={"5"}>
      <Title />
      <Input func={addList} />
      <List list={list} func={removeList} />
    </Container>
  );
};

export default Contents;
