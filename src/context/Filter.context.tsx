import { createContext, useState, useEffect } from "react";

const defaultFilters: IFilter[] = [
  {
    type: "genre",
    label: "Fiction",
    isChecked: true,
  },
  {
    type: "genre",
    label: "Fantasy",
    isChecked: false,
  },
  {
    type: "genre",
    label: "Horror",
    isChecked: true,
  },
  {
    type: "genre",
    label: "Literature",
    isChecked: false,
  },
  {
    type: "genre",
    label: "Philosophy",
    isChecked: false,
  },
  {
    type: "genre",
    label: "Romance",
    isChecked: false,
  },
  {
    type: "genre",
    label: "Self-Help",
    isChecked: false,
  },
  {
    type: "genre",
    label: "Comedy",
    isChecked: false,
  },
  {
    type: "genre",
    label: "Poetry",
    isChecked: false,
  },
  {
    type: "genre",
    label: "Comic",
    isChecked: false,
  },
  {
    type: "exclusive",
    label: "Classics",
    isChecked: true,
  },
  {
    type: "exclusive",
    label: "Popular with Kids",
    isChecked: false,
  },
  {
    type: "exclusive",
    label: "New Arrivals",
    isChecked: false,
  },
  {
    type: "exclusive",
    label: "Top Picks",
    isChecked: false,
  },
  {
    type: "rating",
    label: "5 stars",
    isChecked: false,
  },
  {
    type: "rating",
    label: "4 stars",
    isChecked: true,
  },
  {
    type: "rating",
    label: "3 stars",
    isChecked: false,
  },
  {
    type: "rating",
    label: "2 stars",
    isChecked: false,
  },
  {
    type: "rating",
    label: "1 star",
    isChecked: false,
  },
];

interface IContext {
  selectorIsOpen: boolean;
  handleSelectorStatus: (isOpen: boolean) => void;
  filters: IFilter[];
  handleFilters: (label: string) => void;
}

const FilterContext = createContext<IContext>({
  selectorIsOpen: false,
  handleSelectorStatus: () => {},
  filters: [],
  handleFilters: (label: string) => {},
});

function FilterProvider({ children }: { children: React.ReactNode }) {
  const preFilters = sessionStorage.getItem("filters");
  const [filters, setFilters] = useState<IFilter[]>(
    preFilters ? (JSON.parse(preFilters) as IFilter[]) : defaultFilters
  );
  const [selectorIsOpen, setSelectorIsOpen] = useState<boolean>(false);

  function handleFilters(label: string) {
    const filtersSnapshot = [...filters];
    const indexTBU = filtersSnapshot.findIndex(
      (filter) => filter.label === label
    );
    filtersSnapshot[indexTBU].isChecked = !filtersSnapshot[indexTBU].isChecked;
    setFilters(filtersSnapshot);
    sessionStorage.setItem("filters", JSON.stringify(filtersSnapshot));
  }
  function handleSelectorStatus(status: boolean) {
    setSelectorIsOpen(status);
  }
  const exposed: IContext = {
    selectorIsOpen,
    handleSelectorStatus: (status: boolean) => {
      setSelectorIsOpen(status);
    },
    filters,
    handleFilters,
  };
  return (
    <FilterContext.Provider value={exposed}>{children}</FilterContext.Provider>
  );
}

export { FilterContext, FilterProvider };

interface IFilter {
  type: "genre" | "exclusive" | "rating";
  label: string;
  isChecked: boolean;
}
