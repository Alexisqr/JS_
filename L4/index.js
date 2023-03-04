import React from 'react';
import ReactDOM from 'react-dom';
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
		<div id = 'N8'>
		</div>
		<div id = 'N9'>
		</div>
		<div id = 'N10'>
		</div>
	    <div id = 'N11'>
		</div>
		<div id = 'N12'>
		</div>
		<div id = 'N13'>
		</div>
		<div id = 'N14'>
		</div>
	    <div id = 'N15'>
		</div>
	    <div id = 'N16'>
		</div>
	
	</div>)
	}

}
ReactDOM.render(<App/>,document.getElementById('root'));
class Nom1 extends React.Component {
    constructor() {
		super();
		this.state = {names: ['Коля', 'Василь', 'Петро','Іван','Дмитро']};
	}

	render() {
		const list = this.state.names.map((name, index) => {
			return <li key={index}>{name}</li>;
		});

		return <div>
		<h3>1</h3>
		<ul>
		
			{list}
		</ul>
		<hr/>
		</div>
	}
}
ReactDOM.render(<Nom1/>,document.getElementById('N1'));
class Nom2 extends React.Component {
    constructor() {
		super();
		this.state = {names: ['Коля', 'Василь', 'Петро','Іван','Дмитро']};
	}
    addName() {
	this.state.names.push('пункт'); 
	this.setState({names: this.state.names}); 
     }

	render() {
		const list = this.state.names.map((name, index) => {
			return <li key={index}>{name}</li>;
		});

		return <div>
		<h3>2</h3>
		<ul>
		
			{list}
		</ul>
		<button onClick={this.addName.bind(this)}>Кнопка</button>
		<hr/>
		</div>
	}
}
ReactDOM.render(<Nom2/>,document.getElementById('N2'));
class Nom3 extends React.Component {
       constructor() {
		super();
		this.state = {names: ['Коля', 'Василь', 'Петро','Іван','Дмитро']};
	}
    addName() {
		this.state.names.splice(this.state.names.length-1); 
	this.setState({names: this.state.names}); 
     }

	render() {
		const list = this.state.names.map((name, index) => {
			return <li key={index}>{name}</li>;
		});

		return <div>
		<h3>3</h3>
		<ul>
		
			{list}
		</ul>
		<button onClick={this.addName.bind(this)}>Кнопка</button>
		<hr/>
		</div>
	}
}
ReactDOM.render(<Nom3/>,document.getElementById('N3'));
class Nom4 extends React.Component {
       constructor() {
		super();
		this.state = {names: ['Коля', 'Василь', 'Петро','Іван','Дмитро']};
	}
    addName(index) {
		this.state.names.splice(index,1); 
	this.setState({names: this.state.names}); 
     }

	render() {
		const list = this.state.names.map((name, index) => {
			return <li key={index}>{name}<button onClick={this.addName.bind(this,index)}>Кнопка</button></li>
			;
		});

		return <div>
		<h3>4</h3>
		<ul>
		
			{list}
		</ul>
		
		<hr/>
		</div>
	}
}
ReactDOM.render(<Nom4/>,document.getElementById('N4'));
class Nom5 extends React.Component {
     	constructor() {
		super();
		this.state = {text: ''};
	}

    addText(event) {
		this.setState({text: event.target.value});
	}

	render() {
		return <div>
		<h3>5</h3>	
		<p>{this.state.text}</p>
		<input value={this.state.text} onChange={this.addText.bind(this)} />
		<hr/>
		</div>
	}
}
ReactDOM.render(<Nom5/>,document.getElementById('N5'));
class Nom6 extends React.Component {//вивід в верхнЬому регістрі
     	constructor() {
		super();
		this.state = {text: ''};
	}

    addText(event) {
		this.setState({text: event.target.value});
	}

	render() {
		return <div>
		<h3>6</h3>	
		<p>{this.state.text.toUpperCase()}</p>
		<input value={this.state.text} onChange={this.addText.bind(this)} />
		<hr/>
		</div>
	}
}
ReactDOM.render(<Nom6/>,document.getElementById('N6'));
class Nom7 extends React.Component {
     	constructor() {
		super();
		this.state = {age:'0'};
	}

    addText(event) {
		this.setState({age: event.target.value});
	}

	render() {
		return <div>
		<h3>7</h3>	
		<p>{2023- parseInt(this.state.age)}</p>
		<input value={this.state.age} onChange={this.addText.bind(this)} />
		<hr/>
		</div>
	}
}
ReactDOM.render(<Nom7/>,document.getElementById('N7'));
class Nom8 extends React.Component {
     	constructor() {
		super();
		this.state = {Fn:'',Ln:'',Mn:''};
	}

    addText(event) {

    	const words = event.target.value.split(" ");
		this.setState({Fn: words[0]});
		this.setState({Ln: words[1]});
		this.setState({Mn: words[2]});
	}

	render() {
		return <div>
		<h3>8</h3>	
		<p>{this.state.Fn}</p>
		<p>{this.state.Ln}</p>
		<p>{this.state.Mn}</p>
		<input  onChange={this.addText.bind(this)} />
		<hr/>
		</div>
	}
}
ReactDOM.render(<Nom8/>,document.getElementById('N8'));
class Nom9 extends React.Component {
     	constructor() {
		super();
		this.state = {text: '',h:''};
	}

    addText(event) {
		this.setState({text: event.target.value});
	}
	handleSubmit(event) {
		this.setState({h:this.state.text});
		event.preventDefault(); 
	}

	render() {
		return <div>
		<h3>9</h3>	
		<p>{this.state.h}</p>
		<form onSubmit={this.handleSubmit.bind(this)}>
		<input onChange={this.addText.bind(this)} />
		<input type="submit" />
		</form>
		<hr/>
		</div>
	}
}
ReactDOM.render(<Nom9/>,document.getElementById('N9'));
class Nom10 extends React.Component {
     	constructor() {
		super();
		this.state = {n1: '',n2:'',s:''};
	}

    addText1(event) {
		this.setState({n1: event.target.value});
	}
	addText2(event) {
		this.setState({n2: event.target.value});
	}
	handleSubmit(event) {
		this.setState({s:( parseInt(this.state.n1)+ parseInt(this.state.n2))});
		event.preventDefault(); 
	}

	render() {
		return <div>
		<h3>10</h3>	
		
		<form onSubmit={this.handleSubmit.bind(this)}>
		<input onChange={this.addText1.bind(this)} />
		<input onChange={this.addText2.bind(this)} />
		<input type="submit" />
		</form>
		<p>{this.state.s}</p>
		<hr/>
		</div>
	}
}
ReactDOM.render(<Nom10/>,document.getElementById('N10'));
class Nom11 extends React.Component {
     	constructor() {
		super();
		this.state = {Fn:'',Ln:'',Mn:'',s:''};
	}

    addText1(event) {
		this.setState({Fn: event.target.value});
	}
	addText2(event) {
		this.setState({Ln: event.target.value});
	}
	addText3(event) {
		this.setState({Mn: event.target.value});
	}
	handleSubmit(event) {
		this.setState({s:( this.state.Fn +" "+ this.state.Ln +" "+ this.state.Mn)});
		event.preventDefault(); 
	}

	render() {
		return <div>
		<h3>11</h3>	
		
		<form onSubmit={this.handleSubmit.bind(this)}>
		<input onChange={this.addText1.bind(this)} />
		<input onChange={this.addText2.bind(this)} />
		<input onChange={this.addText3.bind(this)} />
		<input type="submit" />
		</form>
		<p>{this.state.s}</p>
		<hr/>
		</div>
	}
}
ReactDOM.render(<Nom11/>,document.getElementById('N11'));
class Nom12 extends React.Component {
constructor() {
		super();
		this.state = {names: ['Коля', 'Василь', 'Петро','Іван','Дмитро'],nam:''};
	}
    addName(event) {
	this.state.names.push(this.state.nam); 
	this.setState({names: this.state.names});
	event.preventDefault();  
     }
handleChange(event) {
		this.setState({nam: event.target.value});
	}


	render() {
		const list = this.state.names.map((name, index) => {
			return <li key={index}>{name}</li>;
		});

		return <div>
		<h3>12</h3>
		<ul>
		
			{list}
		</ul>

				<form onSubmit={this.addName.bind(this)}>
<input value={this.state.value} onChange={this.handleChange.bind(this)}/>
					<input type="submit" />
				</form>

		<hr/>
		</div>
	}
}
ReactDOM.render(<Nom12/>,document.getElementById('N12'));
class Nom13 extends React.Component {
constructor() {
		super();
		this.state = {names: ['Коля', 'Василь', 'Петро','Іван','Дмитро'],nam:''};
	}
    addName(event) {
	this.state.names.push(this.state.nam); 
	this.setState({names: this.state.names});
	event.preventDefault();  
     }
handleChange(event) {
		this.setState({nam: event.target.value});
	}

delName(index) {
		this.state.names.splice(index,1); 
	this.setState({names: this.state.names});
     }

	render() {
		const list = this.state.names.map((name, index) => {
			return <li key={index}>{name}<button onClick={this.delName.bind(this,index)}>Кнопка</button></li>;
		});

		return <div>
		<h3>13</h3>
		<ul>
		
			{list}
		</ul>

				<form onSubmit={this.addName.bind(this)}>
<input value={this.state.value} onChange={this.handleChange.bind(this)}/>
					<input type="submit" />
				</form>

		<hr/>
		</div>
	}
}
ReactDOM.render(<Nom13/>,document.getElementById('N13'));
class Nom14 extends React.Component {
       constructor() {
		super();
		this.state = {
	hrefs: [
		{href: '1.html', text: 'посилання 1'},
		{href: '2.html', text: 'посилання 2'},
		{href: '3.html', text: 'посилання 3'},
	],href2:'',text2:''

};

	}
addName(event) {
	this.state.hrefs.push({href:this.state.href2,text:this.state.text2}); 
	this.setState({hrefs: this.state.hrefs});
	event.preventDefault();
     }

	handleChange(event) {
		this.setState({href2: event.target.value});
	}
	handleChange2(event) {
		this.setState({text2: event.target.value});
	}
	render() {
		const list = this.state.hrefs.map((hrefs, index) => {
			return <li  key={index}><a href = {hrefs.href}>{hrefs.text}</a></li>;
		});

		return<div> 
		<h3>14</h3>
		<ul>
		
			{list}
		</ul>
		<form onSubmit={this.addName.bind(this)}>
<input  onChange={this.handleChange.bind(this)}/>
<input  onChange={this.handleChange2.bind(this)}/>
					<input type="submit" />
				</form></div>;
	}


}

ReactDOM.render(<Nom14/>,document.getElementById('N14'));

class Nom15 extends React.Component {
       constructor() {
		super();
		this.state = {
	hrefs: [
		{href: '1.html', text: 'посилання 1'},
		{href: '2.html', text: 'посилання 2'},
		{href: '3.html', text: 'посилання 3'},
	],index:''

};

	}
addName(event) {
	this.state.hrefs.splice(this.state.index,1); 
	this.setState({hrefs: this.state.hrefs}); 
	event.preventDefault();
     }

	handleChange(event) {
		this.setState({index:parseInt(event.target.value)});
	}

	render() {
		const list = this.state.hrefs.map((hrefs, index) => {
			return <li  key={index}><a href = {hrefs.href}>{hrefs.text}</a></li>;
		});

		return<div> 
		<h3>15</h3>
		<ul>
		
			{list}
		</ul>
		<form onSubmit={this.addName.bind(this)}>
<input  onChange={this.handleChange.bind(this)}/>
					<input type="submit" />
				</form></div>;
	}


}

ReactDOM.render(<Nom15/>,document.getElementById('N15'));
class Nom16 extends React.Component {
       constructor() {
		super();
		this.state = {
	users: [
		{name: 'Коля', age: 30},
		{name: 'Василь', age: 40},
		{name: 'Петро', age: 50},
	]
,name1:'',age1:''

};

	}
addName(event) {
	this.state.users.push({name:this.state.name1,age:this.state.age1});
	this.setState({users: this.state.users}); 
	event.preventDefault();
     }

	handleChange(event) {
		this.setState({name1: event.target.value});
	}
	handleChange2(event) {
		this.setState({age1: event.target.value});
	}

	render() {
		const list = this.state.users.map((users, index) => {
			return <tr  key={index}><td>{users.name}</td><td>{users.age}</td>
	</tr>;
		});

		return<div> 
		<h3>16</h3>
		<table>
		<tbody>		
			{list}
			</tbody>
		</table>
		<form onSubmit={this.addName.bind(this)}>
<input  onChange={this.handleChange.bind(this)}/>
<input  onChange={this.handleChange2.bind(this)}/>
					<input type="submit" />
				</form></div>;
	}


}

ReactDOM.render(<Nom16/>,document.getElementById('N16'));