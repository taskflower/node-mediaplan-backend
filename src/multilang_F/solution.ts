import { WorkflowState } from "./state";

/**
 * Prints the last message from the workflow state in user-friendly format.
 */
export const solution = (state: WorkflowState) => {
  return state.messages.at(-1)?.content;
};
