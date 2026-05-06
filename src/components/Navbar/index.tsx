import { useState } from 'react';
import MenuButton from '../MenuButton';
import ToggleButton from '../ToggleButton';

const Navbar = ({ onMenuToggle }: NavbarProps) => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => {
		const next = !open;
		setOpen(next);
		onMenuToggle(next);
	};

	return (
		<nav className='fixed w-full z-50 h-fit bg-amber-100 flex flex-row justify-between px-10'>
			<MenuButton open={open} onClick={handleToggle} />
			<div className='flex flex-row'>
				<ToggleButton
					init={false}
					src1='/chinese-lang.png'
					src2='/english-lang.png'
					alt1='Chinese'
					alt2='English'
				/>
				<ToggleButton
					init={false}
					src1='/music.png'
					src2='/music-slash.png'
					alt1='Music On'
					alt2='Music Off'
				/>
			</div>
		</nav>
	);
};

export default Navbar;
