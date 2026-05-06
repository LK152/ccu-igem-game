import MenuButton from '../MenuButton';
import ToggleButton from '../ToggleButton';

const Navbar = () => {
	return (
		<nav className='fixed w-full z-50 h-fit bg-amber-100 flex flex-row justify-between px-10'>
			<MenuButton />
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
