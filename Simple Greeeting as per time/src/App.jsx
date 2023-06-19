import React from "react";

let currentDate = new Date();
let hour = currentDate.getHours();

let greeting = "";
const cssStyle = {}

if (hour >= 1 && hour < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";

}
else if (hour >= 12 && hour < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
}
else {
  greeting = "Good Night";
  cssStyle.color = "black"
}

function App() {
    return (
        <>
            <div>
                <h1>Hey, <span style={cssStyle}>{greeting}</span></h1>
            </div>
        </>
    );
}

export default App;