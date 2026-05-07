const StartButton = () => {
	return (
		<div className='flex items-center justify-center p-10 bg-slate-900'>
			{' '}
			<button className='group relative flex items-center justify-center transition-all duration-300 active:scale-95 hover:cursor-pointer'>
				<div className='absolute inset-0 rounded-full bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

				<div className='relative flex items-center px-12 py-3 bg-linear-to-b from-[#fdfcf1] to-[#e2d5b4] border-2 border-[#d3bc8e] rounded-full shadow-[0_0_15px_rgba(211,188,142,0.5)] overflow-hidden'>
					<div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/60 to-transparent' />

					<div className='w-2 h-2 rotate-45 border border-[#d3bc8e] bg-[#ece5d8] mr-4 shadow-sm' />

					<span className='text-[#495057] font-serif font-bold tracking-[0.2em] text-lg drop-shadow-sm'>
						Start
					</span>

					<div className='w-2 h-2 rotate-45 border border-[#d3bc8e] bg-[#ece5d8] ml-4 shadow-sm' />

					<div className='absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-[#d3bc8e] to-transparent opacity-50' />
					<div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-[#d3bc8e] to-transparent opacity-50' />
				</div>

				<div className='absolute -inset-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-between items-center pointer-events-none'>
					<div className='w-1 h-8 border-l-2 border-y-2 border-cyan-400/50 rounded-l-md' />
					<div className='w-1 h-8 border-r-2 border-y-2 border-cyan-400/50 rounded-r-md' />
				</div>
			</button>
		</div>
	);
};

export default StartButton;
