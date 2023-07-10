import { createContext, useState } from "react";
import { useQuery } from "react-query";

export type BookType = {
  url: string;
  title: string;
  author: string;
  rating: number;
  genre: string[];
  quantity: number;
  reviews: string;
  description: string;
};
type ContextType = {
  name: string;
  isLoading: boolean;
  error: unknown;
  data: BookType[] | null;
};
const StoreContext = createContext<ContextType>({
  name: "korebhaumik",
  isLoading: true,
  error: null,
  data: null,
});

function StoreProvider({ children }: { children: JSX.Element }) {
  const [name, setName] = useState<string>("Bhaumik");

  const {
    isLoading,
    error,
    data = null,
  } = useQuery<BookType[]>({
    queryKey: ["storeData"],
    // queryFn: () => fetch("store_full.json").then((res) => res.json()),
    queryFn: () =>
      // fetch("http://localhost:1337/getMine").then((res) => res.json()),
      // fetch("http://159.89.170.119:1338/getMine").then((res) => res.json()),
    fetch("https://b5oz5e5ii3.execute-api.ap-south-1.amazonaws.com/getMine").then((res) => res.json()),
  });

  return (
    <StoreContext.Provider value={{ name, isLoading: true, error, data }}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreProvider };
