import MenuButton from '../MenuButton';
import ToggleButton from '../ToggleButton';
import { useStateStore } from '../../store';

const Navbar = () => {
	const { menuOpen, toggleMenu } = useStateStore();

	return (
		<nav className='fixed w-full z-50 h-fit bg-amber-100 flex flex-row justify-between px-10'>
			<MenuButton open={menuOpen} onClick={toggleMenu} />
			<div className='flex flex-row'>
				<ToggleButton
					init={false}
					src1='chinese-lang.png'
					src2='english-lang.png'
					alt1='Chinese'
					alt2='English'
				/>
				<ToggleButton
					init={false}
					src1='music.png'
					src2='music-slash.png'
					alt1='Music On'
					alt2='Music Off'
				/>
			</div>
		</nav>
	);
};

export default Navbar;
