"use client";

import { InputText } from "primereact/inputtext";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";

import { useState } from "react";

export default function Home() {
  const [checked, setChecked] = useState<boolean>(true);
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  return (
    <section className="container mx-auto border">
      <form
        name="login"
        className="grid grid-rows-1 items-center justify-centern rounded-lg w-1/2 "
      >
        <div>
          <label htmlFor="email" className="text-900  font-medium mb-2">
            Email
          </label>
          <InputText
            id="email"
            type="text"
            placeholder="Email address"
            className="w-full mb-3"
          />

          <label htmlFor="password" className="text-900 font-medium mb-2">
            Password
          </label>
          <InputText
            id="password"
            type="password"
            placeholder="Password"
            className="w-full mb-3"
          />
        </div>
      </form>
    </section>
  );
}
