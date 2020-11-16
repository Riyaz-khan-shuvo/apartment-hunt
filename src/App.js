import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import AddRent from "./components/AddRent/AddRent";
import BookingList from "./components/BookingList/BookingList";
import MyRent from "./components/MyRent/MyRent";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <BookingList />
                </Route>
                <Route path="/addRentHouse">
                    <AddRent />
                </Route>
                <Route path="/bookingList">
                    <BookingList />
                </Route>
                <Route path="/myRent">
                    <MyRent />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
