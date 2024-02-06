import "./App.css";
import { useEffect, useState } from "react";
import AccordionList from "./components/AccordionList/AccordionList";
import useAccordion from "../src/query/useAccordion";

function App() {
  const [activeItemId, setActiveItemId] = useState(0);
  const { data, isSuccess, isLoading } = useAccordion();

  useEffect(() => {
    const item= localStorage.getItem('activeItemId');
    if(item !== 0){
      setActiveItemId(parseInt(item))
    }
  }, [])
  //console.log('activeItemId',activeItemId)
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isSuccess &&
        data.data.length > 0 &&
        data.data.map((item) => {
          return (
            <AccordionList
              id={item.id}
              firstName={item.first_name}
              lastName={item.last_name}
              avatar={item.avatar}
              email={item.email}
              activeItemId={activeItemId}
              setActiveItemId={setActiveItemId}
            />
          );
        })}
    </div>
  );
}

export default App;
