class Response {
  constructor(name, code, DOMe) {
    this.name = name;
    this.code = code;
    this.DOMe = DOMe;
  }
}

let badRequest = new Response(
  "badRequest",
  "400",
  document.getElementById("400")
);
let unauthorised = new Response(
  "unauthorised",
  "401",
  document.getElementById("401")
);
let forbidden = new Response(
  "forbidden",
  "403",
  document.getElementById("403")
);
let notFound = new Response(
  "notFound",
  "404",
  document.getElementById("404")
);
let methodNotAllowed = new Response(
  "methodNotAllowed",
  "405",
  document.getElementById("405")
);
let notAcceptable = new Response(
  "notAcceptable",
  "406",
  document.getElementById("406")
);
let proxyAuthenticationRequired = new Response(
  "proxyAuthenticationRequired",
  "407",
  document.getElementById("407")
);
let requestTimeout = new Response(
  "requestTimeout",
  "408",
  document.getElementById("408")
);
let conflict = new Response(
  "conflict",
  "409",
  document.getElementById("409")
);
let gone = new Response(
  "gone",
  "410",
  document.getElementById("410")
);
let lengthRequired = new Response(
  "lengthRequired",
  "411",
  document.getElementById("411")
);
let preconditionFailed = new Response(
  "preconditionFailed",
  "412",
  document.getElementById("412")
);
let payloadTooLarge = new Response(
  "payloadTooLarge",
  "413",
  document.getElementById("413")
);
let uriTooLong = new Response(
  "uriTooLong",
  "414",
  document.getElementById("414")
);
let unsupportedMediaType = new Response(
  "unsupportedMediaType",
  "415",
  document.getElementById("415")
);
let expectationFailed = new Response(
  "expectationFailed",
  "417",
  document.getElementById("417")
);
let imATeapot = new Response(
  "imATeapot",
  "418",
  document.getElementById("418")
);
let misdirectedRequest = new Response(
  "misdirectedRequest",
  "421",
  document.getElementById("421")
);
let unprocessableEntity = new Response(
  "unprocessableEntity",
  "422",
  document.getElementById("422")
);
let locked = new Response(
  "locked",
  "423",
  document.getElementById("423")
);
let failedDependency = new Response(
  "failedDependency",
  "424",
  document.getElementById("424")
);
let tooEarly = new Response(
  "tooEarly",
  "425",
  document.getElementById("425")
);
let upgradeRequired = new Response(
  "upgradeRequired",
  "426",
  document.getElementById("426")
);
let preconditionRequired = new Response(
  "preconditionRequired",
  "428",
  document.getElementById("428")
);
let tooManyRequests = new Response(
  "tooManyRequests",
  "429",
  document.getElementById("429")
);
let requestHeaderFieldsTooLarge = new Response(
  "requestHeaderFieldsTooLarge",
  "431",
  document.getElementById("431")
);
let unavailableForLegalReasons = new Response(
  "unavailableForLegalReasons",
  "451",
  document.getElementById("451")
);
// checking if the user has visited the page before
var loadNo = localStorage.getItem("firstLoad");
if (!loadNo) {
  console.log("[CORE] [INIT] Beginning initiation...");
  init("badRequest", "400", "f");
  init("unauthorized", "401", "f");
  init("forbidden", "403", "f");
  init("notFound", "404", "f");
  init("methodNotAllowed", "405", "f");
  init("notAcceptable", "406", "f");
  init("proxyAuthenticationRequired", "407", "f");
  init("requestTimeout", "408", "f");
  init("conflict", "409", "f");
  init("gone", "410", "f");
  init("lengthRequired", "411", "f");
  init("preconditionFailed", "412", "f");
  init("payloadTooLarge", "413", "f");
  init("uriTooLong", "414", "f");
  init("unsupportedMediaType", "415", "f");
  init("expectationFailed", "417", "f");
  init("imATeapot", "418", "f");
  init("misdirectedRequest", "421", "f");
  init("unprocessableEntity", "422", "f");
  init("locked", "423", "f");
  init("failedDependency", "424", "f");
  init("tooEarly", "425", "f");
  init("upgradeRequired", "426", "f");
  init("preconditionRequired", "428", "f");
  init("tooManyRequests", "429", "f");
  init("requestHeaderFieldsTooLarge", "431", "f");
  init("unavailableForLegalReasons", "451", "f");
  localStorage.setItem("firstLoad", "-1");
} else {
  let achievements = [
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
    unprocessableEntity,
    locked,
    failedDependency,
    tooEarly,
    upgradeRequired,
    preconditionRequired,
    tooManyRequests,
    requestHeaderFieldsTooLarge,
    unavailableForLegalReasons,
  ];
}

function init(name, code, status) {
  try {
    localStorage.setItem(code, status);
  } catch (e) {
    console.error("[ERR] [INIT] [CA$H] " + e);
  }
  console.info(
    "[INIT] [CA$H] Initialised response " +
      code +
      " - " +
      name +
      " - set to " +
      status
  );
}

function clear() {
  console.log("[LOGS] [PURG] [CACHE] Clearing cache...");
  localStorage.clear();
  console.log("[LOGS] [PURG] [CACHE] Cache successfully cleared.");
  console.log("[LOGS] [PURG] Clearing checkboxes...");
  let inputs = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
  console.log("[LOGS] [PURG] Checkboxes successfully cleared.");
  console.log("[LOGS] [PURG] Reloading page to apply changes...");
  location.reload();
}

function set(checkbox) {
  if (checkbox.checked === true) {
    try {
      localStorage.setItem(checkbox.id, "t");
      checkbox.parentElement.classList.remove("incomplete");
      checkbox.parentElement.classList.add("complete");
    } catch (e) {
      console.error("[ERR] [CACHE] " + e);
    }
    console.log("[CORE] [CACHE] [ACTV] " + checkbox.id + " set to t");
  } else {
    try {
      localStorage.setItem(checkbox.id, "f");
      checkbox.parentElement.classList.add("incomplete");
      checkbox.parentElement.classList.remove("complete");
    } catch (e) {
      console.error("[ERR] [CACHE] " + e);
    }
    console.log("[CORE] [CACHE] [DEAC] " + checkbox.id + " set to f");
  }
}
