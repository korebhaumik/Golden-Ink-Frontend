import { useContext } from "react";
import Card from "../components/Card";
import QueryBar from "../components/QueryBar";
import Filter from "../components/Filter.store";
import { StoreContext } from "../context/Store.context";
import { FilterProvider } from "../context/Filter.context";
import SkeletonCards from "../components/SkeletonCards.store";

type Props = {};

export default function Store({}: Props) {
  const { data, error, isLoading } = useContext(StoreContext);
  // let CardArrJSX: React.ReactNode = <SkeletonCards />;
  let CardArrJSX: React.ReactNode = [];
  if (isLoading) {
    CardArrJSX = <SkeletonCards />;
  }
  if (error) {
    return <>error</>;
  }
  if (data) {
    CardArrJSX = data!.map((book) => {
      return <Card book={book} key={Math.random()} />;
    });
  }

  // console.log(data)

  return (
    <div className="pb-16 pt-32 max-w-5.5xl mx-4 sm:mx-20 xl:mx-auto">
      <QueryBar />
      <FilterProvider>
        <Filter />
      </FilterProvider>
      <div className="flex justify-between flex-wrap">{CardArrJSX}</div>
    </div>
  );
}
