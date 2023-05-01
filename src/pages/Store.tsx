import { useContext } from "react";
import Card from "../components/Card";
import QueryBar from "../components/QueryBar";
import Filter from "../components/Filter.store";
import { StoreContext } from "../context/Store.context";

type Props = {};

export default function Store({}: Props) {
  const { data, error, isLoading, name } = useContext(StoreContext);

  if (isLoading) {
    return <>...</>;
  }
  if (error) {
    return <>error</>;
  }
  const CardArrJSX = data?.map((book) => {
    return <Card book={book} key={Math.random()} />;
  });

  return (
    <div className="pb-16 pt-32 max-w-5.5xl mx-4 sm:mx-20 xl:mx-auto">
      <QueryBar />
      <Filter />
      <div className="flex justify-between flex-wrap">{CardArrJSX}</div>
    </div>
  );
}
