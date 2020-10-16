import React, { useState } from "react";
import { addEvent } from "../redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import withWidth from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  inputField: {
    width: "80%",
    margin: "2% 1%"
  },
  formContainer: {
    border: "1px solid lightgray",
    // width: "50%",
    padding: "10px",
    borderRadius: "5%",
    boxShadow: "0px 6px 10px #888888",
    textAlign: "center"
  },
  mainContainer: {
    padding: "2%",
    width: "35%"
  },
  buttonContainer: {
    width: "80%",
    margin: "0 auto"
  },
  button: {
    width: "48%"
    // margin: "5px"
  }
});

function containerStyle(width) {
  let output = width === "xs" ? { width: "95%" } : { width: "35%" };
  return { ...output, padding: "2%" };
}

function AddEventForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [venue, setVenue] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const { classes } = props;

  const eventInfo = {
    name: name,
    description: description,
    venue: venue,
    price: price,
    discount: discount
  };

  const clearFields = () => {
    setName("");
    setDescription("");
    setVenue("");
    setPrice(0);
    setDiscount(0);
  };
  return (
    <div style={containerStyle(props.width)}>
      <form
        onSubmit={() => {
          clearFields();
          props.addEvent(eventInfo);
        }}
        className={classes.formContainer}
      >
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Add event here ->{" "}
        </Typography>
        <TextField
          label="Event Name"
          required={true}
          value={name}
          onChange={e => setName(e.target.value)}
          variant="outlined"
          className={classes.inputField}
          color="secondary"
        />

        <TextField
          label="Event Description"
          required={true}
          value={description}
          onChange={e => setDescription(e.target.value)}
          variant="outlined"
          className={classes.inputField}
          color="secondary"
        />
        <TextField
          label="Event Venue"
          required={true}
          value={venue}
          onChange={e => setVenue(e.target.value)}
          variant="outlined"
          className={classes.inputField}
          color="secondary"
        />
        <TextField
          label="Price (in ₹)"
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
          variant="outlined"
          className={classes.inputField}
          color="secondary"
        />
        <TextField
          label="Discount (in %)"
          type="number"
          value={discount}
          onChange={e => setDiscount(e.target.value)}
          variant="outlined"
          className={classes.inputField}
          color="secondary"
        />
        <div className={classes.buttonContainer}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              if (name !== "" && description !== "" && venue !== "") {
                clearFields();
                props.addEvent(eventInfo);
              }
            }}
            className={classes.button}
          >
            Submit
          </Button>
          <Button
            onClick={clearFields}
            variant="outlined"
            color="secondary"
            className={classes.button}
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addEvent: eventInfo => dispatch(addEvent(eventInfo))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withWidth()(withStyles(styles)(AddEventForm)));
