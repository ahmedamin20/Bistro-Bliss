import React from "react";

interface Option {
  id: number;
  name: string;
}

interface TSelect<T> {
  options: Array<T>;
}

const SelectMenu = <T extends Option>(props: TSelect<T>) => {
  return (
    <div className="col-span-1 md:col-span-2">
      <label className="block text-lg font-bold text-gray-700">
        Total Person
      </label>
      <select defaultValue="" className="select select-bordered w-full rounded-2xl">
        <option disabled value="" className="p-2 my-3 text-[16px]">
          Choose Number Of Persons
        </option>
        {props.options.map((item) => (
          <option key={item.id} value={item.id} className="p-2 my-3 text-[16px]">
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectMenu;
