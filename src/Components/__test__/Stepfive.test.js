import { fireEvent, render, screen } from "@testing-library/react";
import StepFive from "../StepFive";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("test the step five component", () => {
  test("render the step five form with 7 input", async () => {
    render(
      <Router>
        <StepFive />
      </Router>
    );
    const checkboxList = await screen.getAllByRole("checkbox");
    expect(checkboxList).toHaveLength(7);
  });

  test("input type should be password", async () => {
    render(
      <Router>
        <StepFive />
      </Router>
    );
    const isPassword = await screen.getByPlaceholderText("Password");
    expect(isPassword).toHaveAttribute("type", "password");
  });

  //   test("button should be able to submit form", () => {
  //     render(
  //       <Router>
  //         <StepFive />
  //       </Router>
  //     );

  //     const submitBtn = screen.getByTestId("submit");
  //     const emailInputNode = screen.getByLabelText("Enter Email");
  //     const passwordInputNode = screen.getByLabelText("Password");

  //     userEvent.type(emailInputNode, "rizwan@mail.com");
  //     userEvent.type(passwordInputNode, "123456");

  //     userEvent.click(submitBtn);
  //     // const userInfo = screen.getByText("rizwan@mail.com");
  //     expect(userInfo).toBeInTheDocument();
  //   });

  test("button should be able to reset form", () => {
    const { getByTestId } = render(
      <Router>
        <StepFive />
      </Router>
    );
    const resetBtn = getByTestId("reset");

    const emailInputResetNode = screen.getByLabelText("Enter Email");
    const passwordInputResetNode = screen.getByLabelText("Password");

    resetBtn.click(resetBtn);
    expect(emailInputResetNode.value).toMatch("");
    expect(passwordInputResetNode.value).toMatch("");
  });
});
