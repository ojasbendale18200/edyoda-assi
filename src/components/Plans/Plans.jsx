import React, { useEffect, useState } from "react";
import "./Plans.css";

function Plans() {
  const [selectedPlan, setSelectedPlan] = useState("179");
  const [total, setTotal] = useState(179);
  const [recommended, setRecommended] = useState(true);
  let subscriptionFee = 99;
  const handleChange = (e) => {
    setRecommended(false);
    const selectedPlanValue = e.target.value;
    setSelectedPlan(selectedPlanValue);
  };

  useEffect(() => {
    let planTotal = 0;
    if (selectedPlan === "179") {
      planTotal = 179 + subscriptionFee;
    } else if (selectedPlan === "149") {
      planTotal = 149 + subscriptionFee;
    } else if (selectedPlan === "99") {
      planTotal = 99 + subscriptionFee;
    }
    // Adding Gst

    const gstAmount = (planTotal * 18) / 100;
    const totalWithGST = planTotal + gstAmount;
    setTotal(totalWithGST.toFixed(0));
  }, [selectedPlan]);

  return (
    <>
      {" "}
      <div className="main__right">
        <div className="main__rightHeader">
          <div className="main__rightHeaderSignup">
            <p className="main__rightHeaderNumber">1</p>
            <p className="main__rightHeaderText"> Sign up</p>
          </div>
          <div className="main__rightHeaderSignup">
            <p className="main__rightHeaderNumber">2</p>
            <p className="main__rightHeaderText">Subscribe</p>
          </div>
        </div>
        <p className="main__rightHeaderHeading">Select your subcription plan</p>
        <div className="main__rightExpired">
          <div className="main__rightInputContainer">
            <p className="main__Rightsighns">Offer expired</p>
            <input
              type="radio"
              className="main__rightInput"
              id="expired"
              value="99"
              name="radioGroup"
              disabled
            />
            <div className="main__rightInfoContainer">
              <label for="expired" className="main__rightInfoText">
                12 Months Subscription
              </label>
              <div className="main__rightPrice">
                <div className="main__rightTotalPrice">
                  <p className="main__rightTotalPriceText">Total</p>
                  <p className="main__rightTotalPriceValue">₹99</p>
                </div>
                <div className="main__rightSubscription">
                  <p className="main__rightSubscriptionText">₹8</p>
                  <p className="main__rightSubscriptionValue">/mo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="main__rightInputContainer2">
            <p className="main__Rightsighns2">Recommended</p>
            {recommended ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
              >
                <path
                  d="M14.1333 22.6334L23.5333 13.2334L21.6667 11.3667L14.1333 18.9001L10.3333 15.1001L8.46667 16.9667L14.1333 22.6334ZM16 29.8334C14.1556 29.8334 12.4222 29.4832 10.8 28.7827C9.17778 28.0832 7.76667 27.1334 6.56667 25.9334C5.36667 24.7334 4.41689 23.3223 3.71733 21.7001C3.01689 20.0779 2.66667 18.3445 2.66667 16.5001C2.66667 14.6556 3.01689 12.9223 3.71733 11.3001C4.41689 9.67786 5.36667 8.26675 6.56667 7.06675C7.76667 5.86675 9.17778 4.91653 10.8 4.21608C12.4222 3.51653 14.1556 3.16675 16 3.16675C17.8444 3.16675 19.5778 3.51653 21.2 4.21608C22.8222 4.91653 24.2333 5.86675 25.4333 7.06675C26.6333 8.26675 27.5831 9.67786 28.2827 11.3001C28.9831 12.9223 29.3333 14.6556 29.3333 16.5001C29.3333 18.3445 28.9831 20.0779 28.2827 21.7001C27.5831 23.3223 26.6333 24.7334 25.4333 25.9334C24.2333 27.1334 22.8222 28.0832 21.2 28.7827C19.5778 29.4832 17.8444 29.8334 16 29.8334Z"
                  fill="#47BA68"
                />
              </svg>
            ) : (
              <input
                type="radio"
                className="main__rightInput"
                id="recommended"
                value="179"
                name="radio1"
                onChange={handleChange}
                checked={selectedPlan === "179"}
              />
            )}

            <div className="main__rightInfoContainer">
              <label for="recommended" className="main__rightInfoText2">
                12 Months Subscription
              </label>
              <div className="main__rightPrice">
                <div className="main__rightTotalPrice">
                  <p className="main__rightTotalPriceText2">Total</p>
                  <p className="main__rightTotalPriceValue2">₹179</p>
                </div>
                <div className="main__rightSubscription">
                  <p className="main__rightSubscriptionText2">₹15</p>
                  <p className="main__rightSubscriptionValue2">/mo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="main__rightInputContainer3">
            <input
              type="radio"
              className="main__rightInput"
              id="6month"
              value="149"
              name="radio2"
              onChange={handleChange}
              checked={selectedPlan === "149"}
            />
            <div className="main__rightInfoContainer">
              <label for="6month" className="main__rightInfoText2">
                6 Months Subscription
              </label>
              <div className="main__rightPrice">
                <div className="main__rightTotalPrice">
                  <p className="main__rightTotalPriceText2">Total</p>
                  <p className="main__rightTotalPriceValue2">₹149</p>
                </div>
                <div className="main__rightSubscription">
                  <p className="main__rightSubscriptionText2">₹25</p>
                  <p className="main__rightSubscriptionValue2">/mo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="main__rightInputContainer3">
            <input
              type="radio"
              className="main__rightInput"
              id="3month"
              value="99"
              name="radio3"
              onChange={handleChange}
              checked={selectedPlan === "99"}
            />
            <div className="main__rightInfoContainer">
              <label for="3month" className="main__rightInfoText2">
                3 Months Subscription
              </label>
              <div className="main__rightPrice">
                <div className="main__rightTotalPrice">
                  <p className="main__rightTotalPriceText2">Total</p>
                  <p className="main__rightTotalPriceValue2">₹99</p>
                </div>
                <div className="main__rightSubscription">
                  <p className="main__rightSubscriptionText2">₹33</p>
                  <p className="main__rightSubscriptionValue2">/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__finalTotal">
          <div className="main__SubscriptionFee">
            <p className="main__SubscriptionFeeLeft">Subscription Fee</p>
            <h4>₹18,500</h4>
          </div>

          <div className="main__limitedtime">
            <div className="main__timerupee">
              <p>Limited time offer</p>
              <h4>- ₹18,401</h4>
            </div>
            <div className="main__validOffer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11 7V13L16.2 16.1L17 14.9L12.5 12.2V7H11ZM20 12V18H22V12H20ZM20 20V22H22V20H20ZM18 20C16.3 21.3 14.3 22 12 22C6.49998 22 1.99998 17.5 1.99998 12C1.99998 6.5 6.49998 2 12 2C16.8 2 20.9 5.4 21.8 10H19.7C18.8 6.6 15.7 4 12 4C7.59998 4 3.99998 7.6 3.99998 12C3.99998 16.4 7.59998 20 12 20C14.4 20 16.5 18.9 18 17.3V20Z"
                  fill="#DE4313"
                />
              </svg>
              <p>Offer valid till 25th March 2023 </p>
            </div>
          </div>
          <div className="main__rightTotal">
            <p>
              <span>Total</span> (IncJl. of 18% GST)
            </p>
            <h4>₹ {total}</h4>
          </div>
        </div>

        <div className="buttons">
          <button className="main__rightButton1">CANCEL</button>
          <button className="main__rightButton2">PROCEED TO PAY</button>
        </div>
        <div className="main__end"></div>
      </div>
    </>
  );
}

export default Plans;
