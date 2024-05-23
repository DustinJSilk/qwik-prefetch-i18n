import {
  PrefetchGraph,
  PrefetchServiceWorker,
  component$,
  getLocale,
} from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import "./global.css";
import { useI18n } from "./i18n";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider>
   * component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  useI18n();
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body>
        <RouterOutlet />
        <PrefetchServiceWorker
          base={import.meta.env.DEV ? "/build/" : `/build/${getLocale()}/`}
          scope="/"
          path="../../qwik-prefetch-service-worker.js"
        />
        <PrefetchGraph
          base={import.meta.env.DEV ? "/build/" : `/build/${getLocale()}/`}
        />
      </body>
    </QwikCityProvider>
  );
});
