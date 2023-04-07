import React from 'react';
import ReactDOM from 'react-dom';
import './cs.css';
class App extends React.Component {

	render() {
		return (<div >
		<div id = 'N1'>
		</div>
		<div id = 'N2'>
		</div>
		<div id = 'N3'>
		</div>
		<div id = 'N4'>
		</div>
		<div id = 'N5'>
		</div>
	    <div id = 'N6'>
		</div>
		<div id = 'N7'>
		</div>
		<div id = 'N9'>
		</div>
		<div id = 'N10'>
		</div>
	</div>)
	}

}
ReactDOM.render(<App/>,document.getElementById('root'));
class User1 extends React.Component {
	constructor() {
		super();
	}

	render() {
	return <tr>

				<td>{this.props.name}</td>
				<td>{this.props.surname}</td>
				<td>{this.props.age}</td>
		
				 
					
		</tr>;
	}
}
class App1 extends React.Component {
	constructor() {
		super();

	this.state = {
	users: [
		{name: 'Микола', surname: 'Шевченко',age:26},
		{name: 'Василь', surname: 'Королюк',age:27},
		{name: 'Петро', surname: 'Кармалюк',age:43},
		]
		};
	}

	render() {
		const users = this.state.users.map((item, index) => {
return<User1 name={item.name} surname={item.surname} age={item.age}/>;
		});
		return <div>
		<h3>1</h3>
		 <table >
			
				<tr>
				 <th>ім’я</th>
				 <th>прізвище</th>
				 <th>вік</th>
					</tr>
			{users}
		
			 </table>
		</div>;
	}
}
ReactDOM.render(<App1/>,document.getElementById('N1'));
class User2 extends React.Component {
	constructor() {
		super();
	}

	render() {
	return <tr>

				<td>{this.props.name}</td>
				<td>{this.props.surname}</td>
				<td>{this.props.age}</td>
				<td><button onClick={this.props.showMessage}>посилання</button></td>
				 
					
		</tr>;
	}
}

class App2 extends React.Component {
	constructor() {
		super();

	this.state = {
	users: [
		{name: 'Микола', surname: 'Шевченко',age:26},
		{name: 'Василь', surname: 'Королюк',age:27},
		{name: 'Петро', surname: 'Кармалюк',age:43},
		]
		};
	}
showMessage() {
		alert('!!!');
	}

	render() {
		const users = this.state.users.map((item, index) => {
return<User2 name={item.name} surname={item.surname} age={item.age} showMessage={this.showMessage}/>;
		});
		return <div>
		<h3>2</h3>
		 <table >
			
				<tr>
				 <th>ім’я</th>
				 <th>прізвище</th>
				 <th>вік</th>
				  <th>посилання</th>
					</tr>
			{users}
		
			 </table>
		</div>;
	}
}
ReactDOM.render(<App2/>,document.getElementById('N2'));
class User3 extends React.Component {
	constructor() {
		super();
	}

	render() {
	return <tr>

				<td>{this.props.name}</td>
				<td>{this.props.surname}</td>
				<td>{this.props.age}</td>
				<td><button onClick={this.props.showMessage.bind(null,this.props.index)}>посилання</button></td>
				 
					
		</tr>;
	}
}

class App3 extends React.Component {
	constructor() {
		super();

	this.state = {
	users: [
		{name: 'Микола', surname: 'Шевченко',age:26},
		{name: 'Василь', surname: 'Королюк',age:27},
		{name: 'Петро', surname: 'Кармалюк',age:43},
		]
		};
	}
showMessage(index) {
		alert(this.state.users[index].name );
	}

	render() {
		const users = this.state.users.map((item, index) => {
return<User3 key={index} index = {index} name={item.name} surname={item.surname} age={item.age} showMessage={this.showMessage.bind(this)}/>;
		});
		return <div>
		<h3>3</h3>
		 <table >
			
				<tr>
				 <th>ім’я</th>
				 <th>прізвище</th>
				 <th>вік</th>
				  <th>посилання</th>
					</tr>
			{users}
		
			 </table>
		</div>;
	}
}
ReactDOM.render(<App3/>,document.getElementById('N3'));
class User4 extends React.Component {
	constructor() {
		super();
	}

	render() {
	return <tr>

				<td>{this.props.name}</td>
				<td>{this.props.surname}</td>
				<td>{this.props.age}</td>
				<td><button onClick={this.props.showMessage.bind(null,this.props.index)}>посилання</button></td>
				 
					
		</tr>;
	}
}

class App4 extends React.Component {
	constructor() {
		super();

	this.state = {
	users: [
		{name: 'Микола', surname: 'Шевченко',age:26},
		{name: 'Василь', surname: 'Королюк',age:27},
		{name: 'Петро', surname: 'Кармалюк',age:43},
		]
		};
	}
showMessage(index) {
	console.log(index);
		alert(index+1 );
	}

	render() {
		const users = this.state.users.map((item, index) => {
return<User4 key={index} index = {index} name={item.name} surname={item.surname} age={item.age} showMessage={this.showMessage.bind(this)} />;
		});
		return <div>
		<h3>4</h3>
		 <table >
			
				<tr>
				 <th>ім’я</th>
				 <th>прізвище</th>
				 <th>вік</th>
				  <th>посилання</th>
					</tr>
			{users}
		
			 </table>
		</div>;
	}
}
ReactDOM.render(<App4/>,document.getElementById('N4'));
class User5 extends React.Component {
	constructor() {
		super();
	}

	render() {
	return <tr>

				<td>{this.props.name}</td>
				<td>{this.props.surname}</td>
				<td>{this.props.age}</td>
				<td><button onClick={this.props.deleteUser.bind(null,this.props.index)}>посилання</button></td>
				 
					
		</tr>;
	}
}

class App5 extends React.Component {
	constructor() {
		super();

	this.state = {
	users: [
		{name: 'Микола', surname: 'Шевченко',age:26},
		{name: 'Василь', surname: 'Королюк',age:27},
		{name: 'Петро', surname: 'Кармалюк',age:43},
		]
		};
	}
deleteUser(index) {
		this.state.users.splice(index, 1);
		this.setState({users: this.state.users});
	}
	


	render() {
		const users = this.state.users.map((item, index) => {
return<User5 key={index} index = {index} name={item.name} surname={item.surname} age={item.age} deleteUser={this.deleteUser.bind(this)} />;
		});
		return <div>
		<h3>5</h3>
		 <table >
			
				<tr>
				 <th>ім’я</th>
				 <th>прізвище</th>
				 <th>вік</th>
				  <th>видалити</th>
					</tr>
			{users}
		
			 </table>
		</div>;
	}
}
ReactDOM.render(<App5/>,document.getElementById('N5'));
class User6 extends React.Component {
	constructor() {
		super();
	}

	render() {
	return <tr>

				<li  value={this.props.index} >
					

								
                 
				<p>{this.props.name}</p>
				{this.props.check ? ( <input
					type = "text"
					value={this.props.value}
					onChange={this.props.handleCheckboxChange.bind(null)}
					autoFocus={true} 
					onBlur={this.props.kj.bind(null,this.props.name,this.props.index)}
				/>) : <button onClick={this.props.Click.bind(null,this.props.name,this.props.index)}>редагувати</button>}
				
				</li>
				 
					
		</tr>;
	}
}
class Nom5 extends React.Component {
	constructor() {
		super();
		this.state = {
			names: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро'],
			check: [false, false, false, false, false],value:'-'
		};
	}

	handleCheckboxChange(event) {
	console.log(event.target.value+"+");
		this.setState({ value: event.target.value });

	}

	kj(event,name,index) {
		console.log(index+"-");
console.log(name+"-");
        const newNames = this.state.names;			
		newNames[name] = this.state.value;
        this.setState({ names: newNames });
        this.setState({ value: '-' });
        const newCheck = this.state.check;
			
		newCheck[name] = !newCheck[name];

		this.setState({ check: newCheck });

		
	
	}

Click(event,name,index){

console.log(index);
console.log(name);
		const newCheck = this.state.check;
			if (!newCheck[name]) {
				newCheck[name] = !newCheck[name];
			}
		

		this.setState({ check: newCheck });
console.log(this.state.check[name]);

		this.setState({ value: this.state.names[name] });
		
	
	}
	render() {
				const list = this.state.names.map((name, index) => {

			return (
	<User6 key={index} index = {index} name={name} value={this.state.value} check={this.state.check[index]}  Click={this.Click.bind(this)} kj={this.kj.bind(this)} handleCheckboxChange={this.handleCheckboxChange.bind(this)} />
				
			);
		});

		return (
			<div>
				<h3>6</h3>
				<ul>
					{list}
				</ul>
				<hr/>
			</div>
		);
	}
}

ReactDOM.render(<Nom5/>,document.getElementById('N6'));
class Add extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			cil: 0,
			prise: 0,
			sum: 0
		};
	}

	handleNameChange(event) {
		this.setState({name: event.target.value});
	}

	handleCilChange(event) {
		this.setState({cil: parseInt(event.target.value, 10)});
	}

	handlePriseChange(event) {
		this.setState({prise: parseInt(event.target.value, 10)});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.addProduct(this.state);
		this.setState({
			name: '',
			cil: 0,
			prise: 0,
			sum: 0
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} placeholder="Ім'я продукту" />
				<input type="number" value={this.state.cil} onChange={this.handleCilChange.bind(this)} placeholder="Кількість" />
				<input type="number" value={this.state.prise} onChange={this.handlePriseChange.bind(this)} placeholder="Ціна" />
				<button type="submit">Додати продукт</button>
			</form>
		);
	}
}
class User7 extends React.Component {
	constructor() {
		super();
	}

	render() {
	return <tr>

				<td>{this.props.name}</td>
				<td>{this.props.cil}</td>
				<td>{this.props.prise}</td>
				<td>{this.props.cil*this.props.prise}</td>
				<td><button onClick={this.props.deleteUser.bind(null,this.props.index)}>посилання</button></td>
				 
					
		</tr>;
	}
}

class App7 extends React.Component {
	constructor() {
		super();

	this.state = {
	users: [
		{name: 'Молоко', cil: 21,prise:26,},
		{name: 'Сир', cil: 34,prise:27,},
		{name: 'Сік', cil: 5,prise:43,},
		]
		};
	}
deleteUser(index) {
		this.state.users.splice(index, 1);
		this.setState({users: this.state.users});
	}
	
addProduct(product) {
	console.log(product);
	const newNames = this.state.users; 
	newNames.push(product);
   
    this.setState({ users: newNames });
  }

	render() {
		const users = this.state.users.map((item, index) => {
return<User7 key={index} index = {index} name={item.name} cil={item.cil} prise={item.prise} deleteUser={this.deleteUser.bind(this)} />;
		});
		return <div>
		<h3>7-8</h3>
		 <table >
			
				<tr>
				 <th>ім’я</th>
				 <th>кількість</th>
				 <th>ціна</th>
				  <th>пов вартість</th>
				  <th>видалити</th>

					</tr>
			{users}
		
			 </table>
			 {<Add addProduct={this.addProduct.bind(this)}/>}
		</div>;
	}
}
ReactDOM.render(<App7/>,document.getElementById('N7'));

class TotalPrice extends React.Component {
  render() {
  	let s = 0;
    
    this.props.users.map(
      (total, product) =>{
      	console.log(s);
      	console.log(total);
      	console.log(product);
      	console.log(total.cil);
      	console.log(total.prise);

     s = s + total.cil * total.prise}
    );

    return <div>Загальна вартість: {s}</div>;
  }
}
class Add9 extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			cil: 0,
			prise: 0,
			sum: 0
		};
	}

	handleNameChange(event) {
		this.setState({name: event.target.value});
	}

	handleCilChange(event) {
		this.setState({cil: parseInt(event.target.value, 10)});
	}

	handlePriseChange(event) {
		this.setState({prise: parseInt(event.target.value, 10)});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.addProduct(this.state);
		this.setState({
			name: '',
			cil: 0,
			prise: 0,
			sum: 0
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} placeholder="Ім'я продукту" />
				<input type="number" value={this.state.cil} onChange={this.handleCilChange.bind(this)} placeholder="Кількість" />
				<input type="number" value={this.state.prise} onChange={this.handlePriseChange.bind(this)} placeholder="Ціна" />
				<button type="submit">Додати продукт</button>
			</form>
		);
	}
}

class User9 extends React.Component {
	constructor() {
		super();
	}

	render() {
	return <tr>

				<td>{this.props.name}</td>
				<td>{this.props.cil}</td>
				<td>{this.props.prise}</td>
				<td>{this.props.cil*this.props.prise}</td>
				<td><button onClick={this.props.deleteUser.bind(null,this.props.index)}>посилання</button></td>
				 
					
		</tr>;
	}
}

class App9 extends React.Component {
	constructor() {
		super();

	this.state = {
	users: [
		{name: 'Молоко', cil: 21,prise:26,},
		{name: 'Сир', cil: 34,prise:27,},
		{name: 'Сік', cil: 5,prise:43,},
		]
		};
	}
deleteUser(index) {
		this.state.users.splice(index, 1);
		this.setState({users: this.state.users});
	}
	
addProduct(product) {
	console.log(product);
	const newNames = this.state.users; 
	newNames.push(product);
   
    this.setState({ users: newNames });
  }

	render() {
		const users = this.state.users.map((item, index) => {
return<User9 key={index} index = {index} name={item.name} cil={item.cil} prise={item.prise} deleteUser={this.deleteUser.bind(this)} />;
		});
		return <div>
		<h3>9</h3>
		 <table >
			
				<tr>
				 <th>ім’я</th>
				 <th>кількість</th>
				 <th>ціна</th>
				  <th>пов вартість</th>
				  <th>видалити</th>

					</tr>
			{users}
		
			 </table>
			 {<Add9 addProduct={this.addProduct.bind(this)}/>}
			 { <TotalPrice users={this.state.users} />}
		</div>;
	}
}
ReactDOM.render(<App9/>,document.getElementById('N9'));
class TotalPrice2 extends React.Component {
  render() {
  	let s = 0;
    
    this.props.users.map(
      (total, product) =>{
      //	console.log(s);
      	//console.log(total);
      //	console.log(product);
      //	console.log(total.cil);
      //	console.log(total.prise);
      	if (this.props.check[product]) {
      		s = s + total.cil * total.prise;
      	}
     }
    );

    return <div>Загальна вартість: {s}</div>;
  }
}
class Add10 extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			cil: 0,
			prise: 0,
			sum: 0
		};
	}

	handleNameChange(event) {
		this.setState({name: event.target.value});
	}

	handleCilChange(event) {
		this.setState({cil: parseInt(event.target.value, 10)});
	}

	handlePriseChange(event) {
		this.setState({prise: parseInt(event.target.value, 10)});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.addProduct(this.state);
		this.setState({
			name: '',
			cil: 0,
			prise: 0,
			sum: 0
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} placeholder="Ім'я продукту" />
				<input type="number" value={this.state.cil} onChange={this.handleCilChange.bind(this)} placeholder="Кількість" />
				<input type="number" value={this.state.prise} onChange={this.handlePriseChange.bind(this)} placeholder="Ціна" />
				<button type="submit">Додати продукт</button>
			</form>
		);
	}
}

class User10 extends React.Component {
	constructor() {
		super();
	}

	render() {
	return <tr>

				<td>{this.props.name}</td>
				<td>{this.props.cil}</td>
				<td>{this.props.prise}</td>
				<td>{this.props.cil*this.props.prise}</td>
				<td><input
					value={this.props.index}
						type="checkbox"
						checked={this.props.check}
						onChange={this.props.handleCheckboxChange.bind(null)}
					/></td>
				<td><button onClick={this.props.deleteUser.bind(null,this.props.index)}>посилання</button></td>
				 
					
		</tr>;
	}
}

class App10 extends React.Component {
	constructor() {
		super();

	this.state = {
	users: [
		{name: 'Молоко', cil: 21,prise:26,},
		{name: 'Сир', cil: 34,prise:27,},
		{name: 'Сік', cil: 5,prise:43,},
		],check: [true, true, true]
		};
	}
deleteUser(index) {
		this.state.users.splice(index, 1);
		this.setState({users: this.state.users});
	}
	
addProduct(product) {
	//console.log(product);
	const newNames = this.state.users; 
	newNames.push(product);
	const newCheck = this.state.check; 
	newCheck.push(true);
   console.log(newCheck);
    this.setState({ users: newNames });
    this.setState({ check: newCheck });
  }
  handleCheckboxChange(event) {
	 const index = parseInt(event.target.value, 10);
		const newCheck = this.state.check;
			
		newCheck[index] = !newCheck[index];
		this.setState({ check: newCheck });
	}

	render() {
		const users = this.state.users.map((item, index) => {
return<User10 key={index} index = {index} check={this.state.check[index]} name={item.name} cil={item.cil}
 prise={item.prise} deleteUser={this.deleteUser.bind(this)}  handleCheckboxChange={this.handleCheckboxChange.bind(this)} />;
		});
		return <div>
		<h3>10</h3>
		 <table >
			
				<tr>
				 <th>ім’я</th>
				 <th>кількість</th>
				 <th>ціна</th>
				  <th>пов вартість</th>
				  <th>видалити</th>

					</tr>
			{users}
		
			 </table>
			 {<Add10 addProduct={this.addProduct.bind(this)}/>}
			 { <TotalPrice2 users={this.state.users} check={this.state.check}/>}
		</div>;
	}
}
ReactDOM.render(<App10/>,document.getElementById('N10'));