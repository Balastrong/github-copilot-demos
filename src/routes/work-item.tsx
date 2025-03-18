import { WorkItemForm } from "@/components/WorkItemForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work-item")({
  component: RouteComponent,
});

function RouteComponent() {
  return <WorkItemForm />;
}
