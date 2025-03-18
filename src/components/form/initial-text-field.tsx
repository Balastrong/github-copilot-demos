import { useFieldContext } from ".";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type TextFieldProps = {
  label: string;
};

export const TextField = ({ label }: TextFieldProps) => {
  const field = useFieldContext<string>();

  return (
    <div className="space-y-1">
      <Label htmlFor={field.name}>{label}</Label>
      <Input
        id={field.name}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
      />
    </div>
  );
};
