
achievements = [
  badRequest,
  unauthorised,
  forbidden,
  notFound,
  methodNotAllowed,
  notAcceptable,
  proxyAuthenticationRequired,
  requestTimeout,
  conflict,
  gone,
  lengthRequired,
  preconditionFailed,
  payloadTooLarge,
  uriTooLong,
  unsupportedMediaType,
  expectationFailed,
  imATeapot,
  misdirectedRequest,
  tooEarly,
  upgradeRequired,
  preconditionRequired,
  tooManyRequests,
  requestHeaderFieldsTooLarge,
  unavailableForLegalReasons,
];
function setState(object) {
  if (localStorage.getItem(object.code) == "f") {
    object.DOMe.parentElement.classList.remove("complete");
    object.DOMe.parentElement.classList.add("incomplete");
    object.DOMe.checked = false;
  } else if (localStorage.getItem(object.code) == "t") {
    object.DOMe.parentElement.classList.add("complete");
    object.DOMe.parentElement.classList.remove("incomplete");
    object.DOMe.checked = true;
  } else {
    console.error(
      "[ERR] [CORE] [CRIT] Invalid state for code " + object.code + ": '" + localStorage.getItem(object.code) + "'"
    );
  }
}

achievements.forEach((Response) => {
  setState(Response);
});