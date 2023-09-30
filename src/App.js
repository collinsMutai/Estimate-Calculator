import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Form from "./components/Form";
import Header from "./components/Header";

import Table from "./components/Table";

function App() {
  const [userInput, setCurrentData] = useState(null);

  const calculateHandler = (userInput) => {
  
    setCurrentData(userInput);
  };

  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput["currentSavings"];
    const yearlyContribution = +userInput["yearlyContribution"];
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header logo={logo} />

      <Form saveDataHandler={calculateHandler} />

     {!userInput && <p style={{textAlign: 'center'}}>No Investment calculated yet.</p>}
      {userInput &&
        <Table
          yearlyData={yearlyData}
          initialInvestment={userInput["currentSavings"]}
        />
      }
    </div>
  );
}

export default App;
