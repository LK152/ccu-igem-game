import { useState } from 'react';

const ToggleButton = ({ init, src1, src2, alt1, alt2 }: ToggleButtonProps) => {
	const [clicked, setClicked] = useState<boolean>(init);

	return (
		<button
			onClick={() => setClicked(!clicked)}
			aria-label={clicked ? alt1 : alt2}
			className='flex h-14 w-14 items-center justify-center rounded-full 
                border-none outline-none cursor-pointer overflow-hidden
                transition-all duration-200 ease-in-out
                hover:bg-white/20 
                active:scale-90 
                focus-visible:ring-2 focus-visible:ring-white/50'
		>
			<img
				src={`/${clicked ? src1 : src2}`}
				alt={clicked ? alt1 : alt2}
				key={clicked ? 'icon1' : 'icon2'}
				className='h-7 w-7 object-contain transition-all duration-300 animate-in fade-in zoom-in-75'
			/>
		</button>
	);
};

export default ToggleButton;
