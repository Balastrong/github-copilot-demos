import { createFileRoute } from "@tanstack/react-router";
import { Calendar } from "../components/Calendar";

export const Route = createFileRoute("/calendar")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Calendar />;
}
