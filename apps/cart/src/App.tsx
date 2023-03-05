import React from "react";
import ReactDOM from "react-dom";

import { PhoenixStoreProvider } from 'phoenix-home-ui/store';

import App from './module';

ReactDOM.render(<PhoenixStoreProvider><App /></PhoenixStoreProvider>, document.getElementById("app"));
