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
  onSelect: (val: string) => void;
};

interface MenuButtonProps {
  open: boolean;
  onClick: () => void;
}

interface NavbarProps {
  onMenuToggle: (open: boolean) => void;
}

type NavbarItem = {
    title: string;
    icon: string;
}