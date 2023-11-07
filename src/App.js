import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";
import { useImmer } from "use-immer";
import React from "react";

let nextId = 1;

function App(props) {
  const [items, updateItems] = useImmer([]);

  function handleButtonClick(todo) {
    updateItems((draft) => {
      draft.push({ id: nextId++, done: false, text: todo });
    });
  }

  function handleDoneButtonClick(id) {
    updateItems((draft) => {
      const itemIndex = draft.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        draft[itemIndex].done = true;
      }
    });
  }

  return (
    <div>
      <Button onClick={() => handleButtonClick("제육먹기")}>제육먹기</Button>
      <Button onClick={() => handleButtonClick("수업 안듣기")}>
        수업 안듣기
      </Button>
      <Button onClick={() => handleButtonClick("닭가슴살먹기")}>
        {" "}
        닭가슴살먹기
      </Button>
      <Box>
        <UnorderedList>
          {items.map((item) => (
            <ListItem
              key={item.id}
              textDecoration={item.done ? "line-through" : "none"}
            >
              {item.text}
              <Button onClick={() => handleDoneButtonClick(item.id)}>
                완료
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;
