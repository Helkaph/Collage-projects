import React, { useState } from 'react';
import { nanoid } from 'nanoid'

 function id() {
   return nanoid()
 }
 const initProds = [
	{id: id(), name: 'prod1', catg: 'catg1', cost: 100},
	{id: id(), name: 'prod2', catg: 'catg2', cost: 200},
	{id: id(), name: 'prod3', catg: 'catg3', cost: 300},
];
const obj = {
	id: 'new id',
	name: '',
	catg: '',
	cost: ''
}
function getInitObj() {
	return {
		id: id(),
		name: '',
		catg: '',
		cost: ''
	}
}
function App() {
	const [prods, setProds] = useState(initProds);
	const [obj, setObj] = useState(getInitObj());
	const [editId, setEditId] = useState(null);


	const result = prods.map(note => {
		return <div>
			<table>
				<tbody>
					<tr key={note.id}>
						<td style={{border: '1px solid black'}}>{note.name}</td>
						<td style={{border: '1px solid black'}}>{note.catg}</td>
						<td style={{border: '1px solid black'}}>{note.cost}</td>
						<td style={{border: '1px solid black'}}><button onClick={() => remItem(note.id)}>Delete</button></td>
						<td style={{border: '1px solid black'}}><button onClick={() => setEditId(note.id)}>Edit</button></td>
					</tr>
				</tbody>
			</table>
		</div>
	})
	function remItem(id) {
		setProds(prods.filter(note => note.id != id));
	}
	function getValue(prop) {
		if (editId) {
			return prods.reduce((res, note) => note.id === editId ? note[prop] : res, '');
		} else {
			return obj[prop];
		}
	}
	function changeItem(prop, event) {
		if (editId) {
			setProds(prods.map(note => note.id === editId ? {...note, [prop]: event.target.value} : note));
		} else {
			setObj({...obj, [prop]: event.target.value});
		}
	}
	function saveItem() {
		if (editId) {
			setEditId(null);
		} else {
			setProds([...prods, obj]);
			setObj(getInitObj());
		}
	}

	return <div>
		{result}
		<br />
		<input type="text"
		value={getValue('name')}
		onChange={event => changeItem('name', event)}
		/>
		<input type="text"
		value={getValue('catg')}
		onChange={event => changeItem('catg', event)}
		/>
		<input type="text" 
		value={getValue('cost')}
		onChange={event => changeItem('cost', event)}
		/>
		<button onClick={saveItem}>Save</button>

	</div>
}


export default App;