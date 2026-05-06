import OptionScene from '@components/OptionScene';
import './App.css';

function App() {
	return (
		<div>
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
		</div>
	);
}

export default App;
