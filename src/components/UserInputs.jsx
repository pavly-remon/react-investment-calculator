import Input from "@/components/Input";

export default function UserInputs({ initialValues, onDataChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label="Inital Investment"
          dataKey="initialInvestment"
          value={initialValues.initialInvestment}
          onDataChange={onDataChange}
        />
        <Input
          label="Annual Investment"
          dataKey="annualInvestment"
          value={initialValues.annualInvestment}
          onDataChange={onDataChange}
        />
      </div>
      <div className="input-group">
        <Input
          label="Expected Return"
          dataKey="expectedReturn"
          value={initialValues.expectedReturn}
          onDataChange={onDataChange}
        />
        <Input
          label="Duration"
          dataKey="duration"
          value={initialValues.duration}
          onDataChange={onDataChange}
        />
      </div>
    </section>
  );
}
