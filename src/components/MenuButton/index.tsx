import { useState } from 'react';

const MenuButton = () => {
	const [clicked, setClicked] = useState<boolean>(false);

	return (
		<button
			onClick={() => setClicked(!clicked)}
			aria-label='Toggle menu'
			aria-expanded={clicked}
			className='relative flex h-14 w-14 flex-col items-center justify-center gap-1.25 rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors cursor-pointer border-none outline-none *:h-0.5 *:w-5.5'
		>
			<span
				className='block rounded-sm bg-white transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] origin-center'
				style={{
					transform: clicked
						? 'translateY(7px) rotate(45deg)'
						: 'none',
				}}
			/>
			<span
				className='block rounded-sm bg-white transition-all duration-250 ease-in origin-center'
				style={{
					opacity: clicked ? 0 : 1,
					transform: clicked ? 'scaleX(0)' : 'none',
				}}
			/>
			<span
				className='block rounded-sm bg-white transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] origin-center'
				style={{
					transform: clicked
						? 'translateY(-7px) rotate(-45deg)'
						: 'none',
				}}
			/>
		</button>
	);
};

export default MenuButton;
