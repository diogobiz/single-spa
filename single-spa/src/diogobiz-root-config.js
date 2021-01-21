import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () => System.import("@single-spa/welcome"),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@diogobiz/react-single",
  app: () => System.import("@diogobiz/react-single"),
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@diogobiz/react-multiples",
  app: () => System.import("@diogobiz/react-multiples"),
  activeWhen: ["/react-multiples"],
});

registerApplication({
  name: "@diogobiz/react-route",
  app: () => System.import("@diogobiz/react-route"),
  activeWhen: ["/react-route"],
});

registerApplication({
  name: "@diogobiz/react-lazy",
  app: () => System.import("@diogobiz/react-lazy"),
  activeWhen: (location) => location.pathname.includes('react-lazy'),
});

registerApplication({
  name: "@diogobiz/react-header",
  app: () => System.import("@diogobiz/react-header"),
  activeWhen: ["/"],
});


start({
  urlRerouteOnly: true,
});
