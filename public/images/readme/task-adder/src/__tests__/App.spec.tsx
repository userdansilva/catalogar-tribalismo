import { fireEvent, render } from "@testing-library/react";
import { App } from "../App";

describe("Task Adder", () => {
  it("should renders correctly", () => {
    const { getByText } = render(<App />);

    expect(getByText("Task Adder")).toBeInTheDocument();
  });

  it("should be able to change", () => {
    const { getByPlaceholderText } = render(<App />);

    const input = getByPlaceholderText("task-adder") as HTMLInputElement;

    fireEvent.change(input, {
      target: {
        value: "test",
      },
    });

    expect(input.value).toBe("test");
  });

  it("should be able to submit", () => {
    const { getByTestId, getByPlaceholderText } = render(<App />);

    const form = getByTestId("form");
    const input = getByPlaceholderText("task-adder") as HTMLInputElement;

    fireEvent.change(input, {
      target: {
        value: "test",
      },
    });

    fireEvent.submit(form);

    expect(input.value).toBe("");
  });

  it("should not be able to submit with empty task", () => {
    const { getByPlaceholderText, getByTestId } = render(<App />);

    const input = getByPlaceholderText("task-adder") as HTMLInputElement;
    const button = getByTestId("submit");

    expect(input.value).toBe("");
    expect(button).toBeDisabled();
  });
});
