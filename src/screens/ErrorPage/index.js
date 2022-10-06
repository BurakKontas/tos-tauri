import React from 'react';
import { useNavigate, useRouteError } from "react-router-dom";

import './index.css';

function ErrorPage() {
const [countDown, setCountDown] = React.useState(5);
var navigate = useNavigate()

const error = useRouteError();
React.useLayoutEffect(() => {
  if(countDown === 5) {
    console.error(error)
  }

  setTimeout(() => {
    clearTimeout(countDownTimer);
    navigate("/");
  },5000)

  var countDownTimer = setInterval(() => {
    setCountDown(countDown-1);
  },1000);
},[error,navigate,countDown]);


return (
  <div className="error-page">
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>Redirecting to main page in {countDown}</p>
    </div>
  </div>
);
} 

export default ErrorPage;