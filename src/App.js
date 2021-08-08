import React, {
  useState
} from 'react';

import ThemeProvider, { themes } from "./components/theme";
import { Button, CheckBox, TextInput, Label, Container } from "./components";


function App() {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("Patrice");

  function onChangeHandler(event) {
    setName(event.target.value);
  }

  const style = {
    textAlign: 'center',
  }
  return (
    <ThemeProvider value={themes.green}>
      <Container style={style}>
        <h1>Koala UI</h1>
        <p>
        Koala theme is a modern web framework to accelerate front-end web development using Reactjs.
        It has been designed with simplicity.
        Just import the elements you need and start using. It is highly customizable.
        </p>
        <Button
          onClick={() => alert("Hello world")}>
          Button
        </Button>
        <Label>
          <CheckBox
            checked={checked}
            onChange={() => setChecked(!checked)} />
        </Label>
        <Label
          style={{
            display: 'inline-block',
            margin: '10px',
          }}
        >Show text box</Label>
        {
          checked && <TextInput
            value={name}
            onChange={onChangeHandler} />
        }
      </Container>
    </ThemeProvider>
  )
}

export default App;

