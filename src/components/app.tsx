import React from 'react';
import { Route } from 'react-router-dom';
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import ExternalHtmlPage from './render_html';
import HomePage from '../pages/index';

const getDynamicPath = (subPath: string) => {
  const dynamicPath = process.env.REACT_APP_BASE_URL || '';
  return `${dynamicPath}/${subPath}`;
};

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/public/index.html"
                element={<ExternalHtmlPage filePath={getDynamicPath("public/index.html")} />}
              />
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};

export default MyApp;
