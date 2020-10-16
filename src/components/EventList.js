import React from "react";
import { connect } from "react-redux";
import { viewDiscount, viewNoDiscount, viewFree, viewAll } from "../redux";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";

const styles = () => ({
  cardContainer: {
    width: "85%",
    margin: "2% auto"
  },
  cardTitle: {
    textTransform: "capitalize"
  }
});

function containerStyle(width) {
  let output = width === "xs" ? { width: "95%" } : { width: "35%" };
  return { ...output, overflow: "hidden" };
}

function EventList(props) {
  const { classes } = props;

  return (
    <div style={containerStyle(props.width)}>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          List of events:{" "}
        </Typography>
        <ButtonGroup color="secondary" variant="contained">
          <Button
            onClick={props.viewAll}
            style={{ padding: "6px", lineHeight: "1.05" }}
          >
            All
          </Button>
          <Button
            onClick={props.viewFree}
            style={{ padding: "6px", lineHeight: "1.05" }}
          >
            Free
          </Button>
          <Button
            onClick={props.viewDiscount}
            style={{ padding: "6px", lineHeight: "1.05" }}
          >
            Discount
          </Button>
          <Button
            onClick={props.viewNoDiscount}
            style={{ padding: "6px", lineHeight: "1.05" }}
          >
            No Discount
          </Button>
        </ButtonGroup>
      </div>
      {props.eventList &&
        props.eventList.map((event, i) => {
          if (event.visible) {
            return (
              <Card className={classes.cardContainer}>
                <CardContent>
                  <Typography variant="h5" className={classes.cardTitle}>
                    {event.name}
                  </Typography>
                  <Typography variant="caption" style={{ color: "#8a8a8a" }}>
                    Venue: {event.venue}
                  </Typography>
                  <Typography variant="body2">{event.description}</Typography>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Typography
                      variant="subtitle2"
                      style={{ color: "#f50057" }}
                    >
                      Price: ₹ {event.price}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      style={{ color: "#f50057" }}
                    >
                      Discount: {event.discount}%
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            );
          } else {
            return null;
          }
        })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    eventList: state.eventList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    viewDiscount: () => dispatch(viewDiscount()),
    viewNoDiscount: () => dispatch(viewNoDiscount()),
    viewFree: () => dispatch(viewFree()),
    viewAll: () => dispatch(viewAll())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withWidth()(withStyles(styles)(EventList)));
