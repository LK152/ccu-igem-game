import { useState } from 'react';

interface ToggleButtonProps {
	init: boolean;
	src1: string;
	src2: string;
	alt1: string;
	alt2: string;
}

const ToggleButton = ({ init, src1, src2, alt1, alt2 }: ToggleButtonProps) => {
	const [clicked, setClicked] = useState<boolean>(init);

	return (
		<button
			onClick={() => setClicked(!clicked)}
			aria-label={clicked ? alt1 : alt2}
			className='flex h-14 w-14 items-center justify-center rounded-full transition-colors border-none outline-none cursor-pointer overflow-hidden'
		>
			<img
				src={clicked ? src1 : src2}
				alt={clicked ? alt1 : alt2}
				className='h-7 w-7 object-contain transition-all duration-200'
			/>
		</button>
	);
};

export default ToggleButton;
