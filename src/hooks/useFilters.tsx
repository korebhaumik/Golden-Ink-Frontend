import { useContext } from "react";
import { FilterContext } from "../context/FIlter.context";

export const useFilters = () => {
  const { filters, handleFilters, handleSelectorStatus, selectorIsOpen } =
    useContext(FilterContext);
  return { filters, handleFilters, handleSelectorStatus, selectorIsOpen };
};
