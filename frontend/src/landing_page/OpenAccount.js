import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-4">Open a TradeHUB account</h1>
        <p className="mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="p-2 btn btn-primary fs-5"
        >
          <a
            href="https://trade-5hols22wn-jkhg.vercel.app/register"
            style={{ color: "white" }}
          >
            Sign up now
          </a>
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
