import * as React from "react";
import "./styles.css";
import Icon from "./components/commandButtons";
import { CommandTypes } from "./constants/CommandNames";
import { BackgroundView } from "./components/styled/BackgroundView";
import { PanelView } from "./components/styled/PanelView";
import { ButtonView } from "./components/styled/ButtonView";
import { FlexView } from "./components/styled/FlexView";
import { ButtonsView } from "./components/styled/ButtonsView";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Icon name={CommandTypes.ADD} width="60" fill="Green" />
      <BackgroundView>
        <PanelView width="400px" height="60px">
          <FlexView>
            <ButtonView>Ggdsagd</ButtonView>
            <ButtonView>Ggdsagd</ButtonView>
            <ButtonsView></ButtonsView>
          </FlexView>
        </PanelView>
      </BackgroundView>
    </div>
  );
}
