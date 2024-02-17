import { useState } from "react";
import Header from "@/components/Header";
import UserInputs from "@/components/UserInputs";
import Result from "@/components/Result";
import { calculateInvestmentResults } from "@/util/investment";
const INITIAL_INPUTS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};
const checkInputs = (userInputs) => {};
function App() {
  const [userInputs, setUserInputs] = useState(INITIAL_INPUTS);
  const results = calculateInvestmentResults(userInputs);
  const invalidInputs = checkInputs(userInputs);
  console.log("results", results);
  return (
    <>
      <Header />
      <UserInputs initialValues={userInputs} onDataChange={setUserInputs} />
      <Result results={results} />
    </>
  );
}

export default App;
