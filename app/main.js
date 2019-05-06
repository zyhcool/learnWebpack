// const a = require("./a.js");
// // const b = require("./b.js");

// a();
// // b();
import Greeter from "./Greeter";

import React from 'react';
import {render} from 'react-dom';
import "./main.css";

render(<Greeter />, document.getElementById('root'));