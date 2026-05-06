const OptionScene = ({ bg, text, options, onSelect }: OptionSceneProps) => {
	return (
		<div className='relative w-full h-screen overflow-hidden'>
			<img
				src={bg}
				alt='scene background'
				className='w-full h-full object-cover'
			/>
			<div className='absolute bottom-0 left-0 right-0 bg-gray-500/60 backdrop-blur-md px-8 py-6'>
				<p className='text-white text-center text-xl font-bold leading-relaxed whitespace-pre-line'>
					{text}
				</p>
				<div className='flex flex-col gap-2 mt-4'>
					{options.map((option) => (
						<button
							key={option.value}
							onClick={() => onSelect(option.value)}
							className='w-full bg-white/20 hover:bg-white/40 hover:cursor-pointer text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium'
						>
							{option.text}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default OptionScene;
