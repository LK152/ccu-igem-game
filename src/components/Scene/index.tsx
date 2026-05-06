const Scene = ({ bg, text }: SceneProps) => {
	return (
		<div className='relative w-full h-screen overflow-hidden'>
			<img
				src={bg}
				alt='scene background'
				className='w-full h-full object-cover'
			/>
			<div className='absolute bottom-0 left-0 right-0 bg-gray-500/60 backdrop-blur-md px-8 py-6'>
				<p className='text-white text-center text-xl font-bold leading-relaxed'>
					{text}
				</p>
				<div className='flex justify-end mt-2'>
					<span className='text-white text-sm'>▼</span>
				</div>
			</div>
		</div>
	);
};

export default Scene;
