import React from "react";

function BaseInputWidget({
  baseAmount,
  handleAmountInput,
  handleSubmit,
  error,
  loading,
}) {
  return (
    <div className="base-input">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={baseAmount}
          onChange={handleAmountInput}
          placeholder="input amount in (cents)...."
        />
        <br />
        {error.baseAmount && (
          <span style={{ color: "black", width: "100px" }}>
            {`*${error.baseAmount}`}
          </span>
        )}
        <br />

        <button disabled={loading} type="submit">
          convert
        </button>
      </form>
    </div>
  );
}

export default BaseInputWidget;
