import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/calculator")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Calculator</div>;
}
