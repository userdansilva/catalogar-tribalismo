import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";

export const App = () => {
  const [task, setTask] = useState("");

  const onChange = (event: FormEvent) => {
    const { value } = event.target as HTMLInputElement;
    setTask(value);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    dispatchEvent(
      new CustomEvent("@ds/task-adder/to/task/add", {
        detail: {
          id: uuid(),
          name: task,
        },
      })
    );

    setTask("");
  };

  return (
    <form onSubmit={onSubmit} data-testid="form">
      <h1>Task Adder</h1>
      <input
        type="text"
        placeholder="task-adder"
        onChange={onChange}
        value={task}
      />
      <button disabled={!task} data-testid="submit">
        Add By Foreign
      </button>
      <hr />
    </form>
  );
};
