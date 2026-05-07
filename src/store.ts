import { create } from 'zustand';

type StateTypes = {
	menuOpen: boolean;
	toggleMenu: () => void;
};

export const useStateStore = create<StateTypes>()((set) => ({
	menuOpen: false,
	toggleMenu: () => {
		set((state) => ({ menuOpen: !state.menuOpen }));
	},
}));
