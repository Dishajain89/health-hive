import React, { useState } from 'react';
import './style.css';

const plans = [
  {
    id: 1,
    name: 'Yearly Plan',
    price: '₹6000/-',
    features: ['Protection Upto 12 months', 'Covers Unlimited Cases Within 12 months', 'No Hidden Fees'],
  },
  {
    id: 2,
    name: 'Lifetime Plan',
    price: '₹1,46,000/-',
    features: ['Liftime Protection', 'Lifetime Coverage of Unlimited Cases', 'No Hidden Fees'],
  },
 
];

const PlanPurchasePage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePurchase = () => {
    if (selectedPlan) {
      // Perform purchase logic here
      console.log(`Purchased ${selectedPlan.name}`);
    }
  };

  return (
    <div className="container">
      <h1 className="containerHeading">Choose a Plan</h1>
      <div className="plans">
        {plans.map((plan) => (
          <div
            className={`plan-card ${selectedPlan === plan ? 'selected' : ''}`}
            key={plan.id}
            onClick={() => handlePlanSelection(plan)}
          >
            <h2 className='planName'>{plan.name}</h2>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button
        className="purchase-button"
        onClick={handlePurchase}
        disabled={!selectedPlan}
      >
        <a href="/#contact">
        Purchase Now
        </a>
        {/* Purchase Now */}
      </button>
    </div>
  );
};

export default PlanPurchasePage;
