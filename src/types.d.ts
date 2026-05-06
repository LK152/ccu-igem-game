type Option = {
  text: string;
  value: string;
};

type SceneProps = {
  bg: string;
  text: string;
};

type OptionSceneProps = SceneProps & {
  options: Option[];
  onSelect: (value: string) => void;
};