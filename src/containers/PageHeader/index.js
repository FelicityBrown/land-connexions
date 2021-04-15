import React, { useState } from "react";

// Components
import logo from "../../assets/logo.svg";
import { Tabs } from "../../components/Tabs";

function PageHeader(props) {
  const [tab, setTab] = useState("Home");

  return (
    <div className="bg-blue-600 flex flex-row justify-between p-5">
      <span className="flex flex-row">
        <img src={logo} alt="logo" />
        <h1 className="text-white self-end text-xxl pl-8">
          Independent Land Agents
        </h1>
      </span>
      <div className="flex flex-row text-white items-end">
        <Tabs
          tabs={[
            {
              label: "Home",
              selected: tab === "Home",
            },
            { label: "Contact Us", selected: tab === "Contact Us" },
          ]}
          onTab={(tab) => setTab(tab.label)}
        />
      </div>
    </div>
  );
}

PageHeader.propTypes = {};

export { PageHeader };
