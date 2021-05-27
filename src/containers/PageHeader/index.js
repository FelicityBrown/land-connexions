import React, { useState } from "react";

// Components
import logo from "../../assets/logo.svg";
import { Tabs } from "../../components/Tabs";

function PageHeader(props) {
  const [tab, setTab] = useState("Home");

  return (
    <div>
      <div className="bg-blue-600 flex flex-row justify-between py-6 px-2 md:px-0 md:pr-5">
        <div className="bg-blue-600 md:absolute">
          <img
            src={logo}
            alt="logo"
            className="md:h-64 md:block md:z-10 bg-blue-600 md:px-8 md:pb-4 rounded-r-xl"
          />
          <div className="hidden md:block text-green-300 z-10 items-end pb-6 text-center">
            Independent Land Agents
          </div>
        </div>
        <div className="relative"></div>
        <div className="flex flex-row text-white items-end z-10 mr-2">
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
    </div>
  );
}

PageHeader.propTypes = {};

export { PageHeader };
