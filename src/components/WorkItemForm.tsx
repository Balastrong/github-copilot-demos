export type WorkItem = {
  title: string;
  description: string;
  assignedTo: string;
  isImportant: boolean;
  status: "open" | "in-progress" | "closed";
};

export const WorkItemForm = () => {
  return <div>I am a Form</div>;
};
