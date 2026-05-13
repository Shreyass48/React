import React from "react";

export default function ExampleUseMemo() {
  const user = {
    name: "RAAJU",
    baseSalary: 60000,
    tax: 5000,
    bonus: 10000,
    homeAllowance: 15000,
    fuelAllowance: 5000,
  };

  // without useMemo, the grossSalary will be recomputed on every render, even if the user object has not changed
  //   const grossSalary =
  //     user.baseSalary +
  //     user.bonus +
  //     user.homeAllowance +
  //     use.fuelAllowance -
  //     user.tax;

  // useMemo will only recompute the grossSalary when the user object changes, otherwise it will return the cached value
  const grossSalary = useMemo(
    () =>
      user.baseSalary +
      user.bonus +
      user.homeAllowance +
      use.fuelAllowance -
      user.tax,
    [user],
  );

  return (
    <div>
      <p>{`${user.name} has gross salary ${grossSalary}`}</p>
    </div>
  );
}
