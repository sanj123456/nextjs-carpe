import BankCard from "@/Components/BankCard";

import React from "react";
import { bankList } from "../../util/bankData";
import "./banks.scss";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
export default function Banks() {
  return (
    <MaxWidthWrapper>
      <div id="main-div-banks" className="outer-padding">
        <h1 className="title">Explore Car Loan Options by Bank</h1>

        <div className="banks-cards">
          {bankList.map((bank, i) => (
            <BankCard key={i} bankInfo={bank} />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
