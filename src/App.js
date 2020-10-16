import React from "react";
import "./App.css";
import AddEventForm from "./components/AddEventForm";
import { Provider } from "react-redux";
import store from "./redux/store";
import EventList from "./components/EventList";
import withWidth from "@material-ui/core/withWidth";

const outerContainerStyle = { display: "flex" };

function App(props) {
  return (
    <Provider store={store}>
      <div
        className="App"
        style={props.width !== "xs" ? outerContainerStyle : null}
      >
        <AddEventForm style={{ width: "48%" }} />
        <EventList style={{ width: "48%" }} />
      </div>
    </Provider>
  );
}

export default withWidth()(App);
