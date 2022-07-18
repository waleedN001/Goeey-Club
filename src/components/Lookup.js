import React, { useEffect, useState } from "react";

const Lookup = (props) => {
  const [lookupValue, setLookupValue] = useState(null);
  const [balance, setBalance] = useState(null);
  const [hasMutate, setHasMutate] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value.replace(/\D/g, "");
    if (value.length < 5 && value[0] != 0) {
      setLookupValue(value);
    }
  };

  const lookup = () => {
    if (lookupValue?.length > 0) {
      props.tokensContract.methods
        .rewardBalance(lookupValue)
        .call()
        .then((balance) => {
          setBalance((parseInt(balance) / 1000000000000000000).toFixed(2));
        });

      props.mutantsContract.methods
        .hasMutate(lookupValue)
        .call()
        .then((hasMutate) => {
          setHasMutate(hasMutate.toString());
        });
    }
  };

  const balanceOfToken = () => {
    if (lookupValue?.length > 0) {
      props.tokensContract.methods
        .rewardBalance(lookupValue)
        .call()
        .then((balance) => {
          setBalance((parseInt(balance) / 1000000000000000000).toFixed(2));
        });
    }
  };

  return (
    <div className="lookup-container">
      <h3 className="collection-title">Lookup Tool</h3>
      <label>
        Token ID:
        <input value={lookupValue} onChange={(e) => handleChange(e)} />
      </label>
      <button onClick={() => lookup()} style={{ cursor: "pointer" }}>
        Lookup
      </button>
      {balance ? <div>Balance: {balance} $PSTL</div> : null}
      {hasMutate ? <div>Has Mutate: {hasMutate}</div> : null}
    </div>
  );
};

export default Lookup;
