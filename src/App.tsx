import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { happy, sad } from "ionicons/icons";

import Home from "./pages/Home";
import GoodMemories from "./pages/GoodMemories";
import BadMemories from "./pages/BadMemories";
import NewMemory from "./pages/NewMemories";

import MemoriesContext from "./data/memories-context";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/theme.css";
import { useContext } from "react";

const App: React.FC = () => {
  const memoriesCtx = useContext(MemoriesContext);

  const {initContext} = memoriesCtx;

  useEffect(() => {
    initContext();
  }, [initContext]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path='/home' component={Home} exact={true} />
            <Route
              path='/good-memories'
              component={GoodMemories}
              exact={true}
            />
            <Route path='/bad-memories' component={BadMemories} exact={true} />
            <Route path='/new-memory' component={NewMemory} exact={true} />
            <Route
              exact
              path='/'
              render={() => <Redirect to='/good-memories' />}
            />
          </IonRouterOutlet>
          <IonTabBar slot='bottom'>
            <IonTabButton href='/good-memories' tab='good'>
              <IonIcon icon={happy} />
              <IonLabel>Good Memories</IonLabel>
            </IonTabButton>
            <IonTabButton href='/bad-memories' tab='bad'>
              <IonIcon icon={sad} />
              <IonLabel>Bad Memories</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
