import React, { lazy, ReactElement, Suspense, useCallback } from "react";
import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";

export interface IDynamicRoutesProps {
  Loading: ReactElement;
}

const DynamicPage = (
  props: IDynamicRoutesProps & Pick<RouteComponentProps, "location">
) => {
  const Page = lazy(async () => {
    try {
      if (props.location.pathname === "") {
        return await import("./pages/index");
      }

      return await import("./pages" + props.location.pathname);
    } catch (e) {
      if (/not find module/.test(e.message)) {
        return await import("./pages/404");
      }
      if (/Loading chunk \d+ failed/.test(e.message)) {
        window.location.reload();
        return;
      }
      throw e;
    }
  });

  return (
    <Suspense fallback={props.Loading}>
      <Page />
    </Suspense>
  );
};

export const DynamicRoutes = (props: IDynamicRoutesProps) => {
  const render = useCallback(
    (renderProps: RouteComponentProps) => (
      <DynamicPage location={renderProps.location} Loading={props.Loading} />
    ),
    [props.Loading]
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={render} />
      </Switch>
    </BrowserRouter>
  );
};
