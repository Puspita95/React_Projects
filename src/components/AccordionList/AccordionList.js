import { SlArrowDown } from "react-icons/sl";
import classes from "./AccordionList.module.css";
import AccordionDetails from "../AccordionDetails/AccordionDetails";
import { useEffect } from "react";

export default function AccordionList({
  id,
  firstName,
  lastName,
  avatar,
  email,
  setActiveItemId,
  activeItemId,
}) {
  
  function handleClick() {
    setActiveItemId((prevId) => (prevId === id ? 0 : id));
  }
  
  useEffect(() => {
    localStorage.setItem("activeItemId", activeItemId)
  }, [activeItemId])

  return (
    <>
      <div className={classes.body}>
        <div className={classes.container}>
          <div>
            <div className={classes.accordion} onClick={handleClick}>
              <p className={`${classes.name} ${classes.f50}`}>{firstName}</p>
              <p className={`${classes.name} ${classes.f50}`}>
                <SlArrowDown
                  className={`${classes.icon} ${activeItemId === id ? `${classes.active}` : ""}`}
                />
              </p>
            </div>
          </div>
          
          {activeItemId === id && (
            <AccordionDetails
              firstName={firstName}
              lastName={lastName}
              avatar={avatar}
              email={email}
            />
          )}
        </div>
      </div>
    </>
  );
}
