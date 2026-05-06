import OptionScene from '@components/OptionScene';
import './App.css';
import { useState } from 'react';
import Navbar from '@components/Navbar';

const NavbarItems: NavbarItem[] = [
	{ title: '回到遊戲', icon: '/left.png' },
	{
		title: '收集結局',
		icon: '/star.png',
	},
	{ title: '彩蛋', icon: '/easter.png' },
	{ title: '資訊', icon: '/contract.png' },
	{ title: '關於我們', icon: '/info.png' },
];

function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<Navbar onMenuToggle={setMenuOpen} />
			<div className='flex h-screen'>
				<div
					className={`fixed top-0 left-0 h-full z-40 bg-orange-500 flex flex-col items-baseline overflow-hidden
                        justify-center gap-8 transition-all duration-300 ease-in-out 
                        ${menuOpen ? 'w-64' : 'w-0'}`}
				>
					{NavbarItems.map((item, i) => (
						<button
							key={i}
							className='flex flex-row items-center text-white text-lg font-medium whitespace-nowrap hover:cursor-pointer'
						>
							<img
								src={item.icon}
								className='h-7 w-7 object-contain m-2'
							/>
							{item.title}
						</button>
					))}
				</div>

				<div
					className={`flex-1 transition-all duration-300 ease-in-out ${menuOpen ? 'ml-64' : 'ml-0'}`}
				>
					<main>
						<OptionScene
							bg=''
							text='
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus suscipit fugiat ex optio dicta vero, perferendis perspiciatis sunt blanditiis, est labore placeat, voluptas eveniet. Ratione neque consectetur dolorem pariatur reiciendis!
            '
							options={[
								{ text: 'Option A', value: 'a' },
								{ text: 'Option B', value: 'b' },
								{ text: 'Option C', value: 'c' },
							]}
							onSelect={(val) => console.log(val)}
						/>
					</main>
				</div>
			</div>
		</>
	);
}

export default App;
