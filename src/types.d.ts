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

interface ToggleButtonProps {
	init: boolean;
	src1: string;
	src2: string;
	alt1: string;
	alt2: string;
}

type NavbarItem = {
	title: string;
	icon: string;
};
