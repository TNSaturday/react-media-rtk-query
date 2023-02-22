import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button>Default</Button>
      <Button outline>Outline</Button>
      <Button rounded> rounded</Button>
      <Button outline rounded>
        Outline rounded
      </Button>
      <hr />
      <Button.Primary>Primary</Button.Primary>
      <Button.Primary outline>Primary outline</Button.Primary>
      <Button.Primary rounded>Primary rounded</Button.Primary>
      <Button.Primary outline rounded>
        Primary outline rounded
      </Button.Primary>
      <hr />
      <Button.Secondary>Secondary</Button.Secondary>
      <Button.Secondary outline>Secondary outline</Button.Secondary>
      <Button.Secondary rounded>Secondary rounded</Button.Secondary>
      <Button.Secondary outline rounded>
        Secondary outline rounded
      </Button.Secondary>
      <hr />
      <Button.Success>Success</Button.Success>
      <Button.Success outline>Success outline</Button.Success>
      <Button.Success rounded>Success rounded</Button.Success>
      <Button.Success outline rounded>
        Success outline rounded
      </Button.Success>
      <hr />
      <Button.Danger>Danger</Button.Danger>
      <Button.Danger outline>Danger outline</Button.Danger>
      <Button.Danger rounded>Danger rounded</Button.Danger>
      <Button.Danger outline rounded>
        Danger outline rounded
      </Button.Danger>
      <hr />
      <Button.Warning>Warning</Button.Warning>
      <Button.Warning outline>Warning outline</Button.Warning>
      <Button.Warning rounded>Warning rounded</Button.Warning>
      <Button.Warning outline rounded>
        Warning outline rounded
      </Button.Warning>
    </div>
  );
}

export default App;
