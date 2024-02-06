import classes from "./AccordionDetails.module.css";

export default function AccordionDetails({
  firstName,
  lastName,
  avatar,
  email,
}) {
  return (
    <>
      <div>
        <div className={classes.container}>
          <img className={classes.imageW} src={avatar} alt="accordion" />
          <div className={classes.items}>
            <div className={classes.flex}>
              <p className={classes.bold}>First Name :</p>
              <p> {firstName}</p>
            </div>
            <div className={classes.flex}>
              <p className={classes.bold}>Last Name :</p>
              <p> {lastName}</p>
            </div>
            <div className={classes.flex}>
              <p className={classes.bold}>Email :</p>
              <p> {email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
