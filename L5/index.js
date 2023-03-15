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
	
	</div>)
	}

}
ReactDOM.render(<App/>,document.getElementById('root'));
class Nom1 extends React.Component {
	constructor() {
		super();
		this.state = {value: 'абзац'};
	}


	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		return <div>
		    <h3>1</h3>
			<p>{this.state.value}</p>
	        <textarea value={this.state.value} onChange={this.handleChange.bind(this)} />
	        <hr/>
		</div>;
	}
}
ReactDOM.render(<Nom1/>,document.getElementById('N1'));
class Nom2 extends React.Component {
	constructor() {
		super();
		this.state = {checked: false};
	}


	handleCheckboxChange(event) {
		this.setState({checked: !this.state.checked});
	}

	render() {
		return <div>
		    <h3>2</h3>
			<p>Стан: {this.state.checked ? 'відмічено' : 'не відмічено'}</p>
			<input
				type="checkbox"
				checked={this.state.checked}
				onChange={this.handleCheckboxChange.bind(this)}
			/>

	        <hr/>
		</div>;
	}
}
ReactDOM.render(<Nom2/>,document.getElementById('N2'));
class Nom3 extends React.Component {
	constructor() {
		super();
		this.state = {checked: false};
	}


	handleCheckboxChange(event) {
		this.setState({checked: !this.state.checked});
	}

	render() {
		return <div>
		    <h3>3</h3>
			{this.state.checked ? <p>'абзац з текстом,абзац з текстом,абзац з текстом,абзац з текcтом' </p>: ''}
			<input
				type="checkbox"
				checked={this.state.checked}
				onChange={this.handleCheckboxChange.bind(this)}
			/>

	        <hr/>
		</div>;
	}
}
ReactDOM.render(<Nom3/>,document.getElementById('N3'));
class Nom4 extends React.Component {
	constructor() {
		super();
		this.state = {value: 'Львів',
			langs: [
				'Львів',
				'Київ',
				'Чернівці',
				'Херсон',
			]
};
	}


		handleSelectChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		const options = this.state.langs.map((item, index) => {
			return <option key={index} value={item}>{item}</option>;
		});

		return <div>
		    <h3>4</h3>
				<p>Ви обрали : {this.state.value}</p>
		<select
				value={this.state.value}
				onChange={this.handleSelectChange.bind(this)}
			>

				{options}

			</select>



	        <hr/>
		</div>;
	}
}
ReactDOM.render(<Nom4/>,document.getElementById('N4'));
class Nom5 extends React.Component {
	constructor() {
		super();
		this.state = {option:'1'};
	}


	handleRadioChange(event) {
		this.setState({option: event.target.value});
	}


	render() {
		return <div>
		    <h3>5</h3>
			<p>Ваш выбір: {this.state.option}</p>

			<input
				name="lang"
				type="radio"
				value="1"
				checked={this.state.option == '1'}
				onChange={this.handleRadioChange.bind(this)}
			/>1

			<input
				name="lang"
				type="radio"
				value="2"
				checked={this.state.option == '2'}
				onChange={this.handleRadioChange.bind(this)}
			/>2
			<input
				name="lang"
				type="radio"
				value="3"
				checked={this.state.option == '3'}
				onChange={this.handleRadioChange.bind(this)}
			/>3
 <hr/>
		</div>;
	}
}
ReactDOM.render(<Nom5/>,document.getElementById('N5'));
class Nom6 extends React.Component {
	constructor() {
		super();
		this.state = {texts: [
			],value:''};
	}


	handleChange(event) {
			this.setState({value: event.target.value });
		


	}

st(){

this.state.texts.push(this.state.value);
this.setState({texts: this.state.texts});
}
	render() {
				const arr = this.state.texts.map((item, index) => {
			return <p key={index} value={index}>{item}</p>;
		});
		return <div>
		    <h3>6</h3>
		    	{arr}
			<textarea value={this.state.value} onChange={this.handleChange.bind(this)} />
			<button onClick={this.st.bind(this)}>Кнопка</button>
		
 <hr/>
		</div>;
	}
}
ReactDOM.render(<Nom6/>,document.getElementById('N6'));

class Nom7 extends React.Component {
	constructor() {
		super();
		this.state = {value: 'red',
			langs: [
				'red',
				'blue',
				'green',
				'yellow',
			]
};
	}


		handleSelectChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		const options = this.state.langs.map((item, index) => {
			return <option key={index} value={item}>{item}</option>;
		});

		return <div>
		    <h3>7</h3>
			<p style={{backgroundColor: this.state.value}}>-----------</p>
		    <select
				value={this.state.value}
				onChange={this.handleSelectChange.bind(this)}
			>

			{options}

			</select>



	        <hr/>
		</div>;
	}
}
ReactDOM.render(<Nom7/>,document.getElementById('N7'));
class Nom8 extends React.Component {
	constructor() {
		super();
		this.state = {checked: false,value:'1'};
	}

handleSelectChange(event) {
		this.setState({value: event.target.value});
			if ((this.state.checked==false && this.state.value=='1')||(this.state.checked==true && this.state.value=='0')) {
			this.setState({checked: !this.state.checked});
		}
	
	}

	handleCheckboxChange(event) {
			this.setState({checked: !this.state.checked});
	
		
	}

	render() {
		return <div>
		    <h3>8</h3>
			<p>Стан: {this.state.checked ? 'позначено' : 'не позначено'}</p>
			<input
				type="checkbox"
				checked={this.state.checked}
				onChange={this.handleCheckboxChange.bind(this)}
			/>
            <select
				value={this.state.value}
				onChange={this.handleSelectChange.bind(this)}
			>

			<option  value='1'>не позначено</option>
			<option  value='0'>позначено</option>

			</select>
	        <hr/>
		</div>;
	}
}
ReactDOM.render(<Nom8/>,document.getElementById('N8'));

class Nom9 extends React.Component {
	constructor() {
		super();
		this.state = {value:'1'};
	}
handleSelectChange(event) {
			this.setState({value: event.target.value});
	}
	render() {
		return <div>
		    <h3>9</h3>
		    {//this.state.value == '1' ? 
	//<p>вар11111111111111 </p>
	// : this.state.value == '2' ?
   // <p>вар22222222222222 </p>:
   // <p>вар33333333333333 </p>
	}
	<p>{this.state.value == '1' ? 'вар11111111111111' : ''}</p>
	<p>{this.state.value == '2' ? 'вар22222222222222' : ''}</p>
	<p>{this.state.value == '3' ? 'вар33333333333333' : ''}</p>

            <select
				value={this.state.value}
				onChange={this.handleSelectChange.bind(this)}
			>

			<option  value='1'>вар1</option>
			<option  value='2'>вар2</option>
			<option  value='3'>вар3</option>

			</select>
	        <hr/>
		</div>;
	}
}
ReactDOM.render(<Nom9/>,document.getElementById('N9'));
class Nom10 extends React.Component {
	constructor() {
		super();
		this.state = {texts: [
			],value:''};
	}


	handleChange(event) {
			this.setState({value: event.target.value });
		


	}

st(){

this.state.texts.push(this.state.value);
this.setState({texts: this.state.texts});
}
	render() {
				const arr = this.state.texts.map((item, index) => {
			return <option key={index} value={index}>{item}</option>;
		});
		return <div>
		    <h3>10</h3>
		    <select>
		    	{arr}
		    	</select>
			<input value={this.state.value} onChange={this.handleChange.bind(this)} />
			<button onClick={this.st.bind(this)}>Кнопка</button>
		
 <hr/>
		</div>;
	}
}
ReactDOM.render(<Nom10/>,document.getElementById('N10'));
class Nom11 extends React.Component {
	constructor() {
		super();
		this.state = {checked: false};
	}


	handleCheckboxChange(event) {
			this.setState({checked: !this.state.checked});
		


	}


	render() {
				
		return <div>
		    <h3>11</h3>
		   <input
				type="checkbox"
				checked={this.state.checked}
				onChange={this.handleCheckboxChange.bind(this)}
			/>
			<input disabled={this.state.checked == false ? true : false} />				
            <hr/>
		</div>;
	}
}
ReactDOM.render(<Nom11/>,document.getElementById('N11'));
function DayDate(d){
	var res ='000';
switch(d){
     case '0': 
        res= 'неділя';
     break;
     case '1':
        res= 'понеділок';
     break;
     case '2':
        res='вівторок';
     break;
     case '3':
        res= 'середа';
     break;
     case '4':
        res= 'четвер';
     break;
    case '5':
        res='п\'ятниця';
     break;
     case '6':
        res='субота';
     break;
}
return res;


}
class Nom12 extends React.Component {
	constructor() {
		super();
		this.state = {day_ar:['01','02','03','04','05','06','07','08','09','10','11','12','13',
		'14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29'
		,'30','31'
			],m_ar:['January','February','March','April','May','June','July','August','September','October','November','December']
         ,y_ar:['2024','2023','2022','2020'],value:(String(new Date().getDate()-1)),m:(String(new Date().getMonth())),
         y:(String(new Date().getFullYear())),dat:DayDate(String(new Date((String(new Date().getFullYear()))+'-'+(String(new Date().getMonth()))+'-'+String(new Date().getDate())).getDay()))
		};
	}


	handleSelectChange1(event) {
			
			this.setState({value: event.target.value});
console.log(String(parseInt(event.target.value)+1));
			console.log(this.state.y+'-'+this.state.m+'-'+parseInt((event.target.value)+1));
			var d = new Date(this.state.y+'-'+(String(parseInt(this.state.m)+1))+'-'+(String(parseInt(event.target.value)+1)));
			console.log(d);
           this.setState({dat:(DayDate(String(d.getDay())))});
	}

handleSelectChange2(event) {
			
			this.setState({m: event.target.value});
//console.log(String(new Date().getMonth()+1));
		//	console.log(this.state.y+'-'+this.state.m+'-'+parseInt((event.target.value)));
			var d = new Date(this.state.y+'-'+(String(parseInt(event.target.value)+1))+'-'+(String(parseInt(this.state.value)+1)));
			console.log(d);
           this.setState({dat:(DayDate(String(d.getDay())))});
	}
	handleSelectChange3(event) {
			
			this.setState({y: event.target.value});
//console.log(String(new Date().getMonth()+1));
			//console.log(this.state.y+'-'+this.state.m+'-'+parseInt((event.target.value)));
			var d = new Date((String(parseInt(event.target.value)))+'-'+(String(parseInt(this.state.m)+1))+'-'+(String(parseInt(this.state.value)+1)));
			console.log(d);
           this.setState({dat:(DayDate(String(d.getDay())))});
	}
	render() {
		const currentMonth = new Date();
		
			const arr1 = this.state.day_ar.map((item, index) => {
			//	console.log(index+'-'+item);
			return <option key={index} value={index} >{item}</option>;
			});
			const arr2 = this.state.m_ar.map((item, index) => {
			return <option key={index} value={index}>{item}</option>;
			});
			const arr3 = this.state.y_ar.map((item, index) => {
			return <option key={index} value={item}>{item}</option>;
			

		});
		return <div>
		    <h3>12</h3>
		    <p>{this.state.dat}</p>
		 <select value={this.state.value}
				onChange={this.handleSelectChange1.bind(this)}
			>
			{arr1}
			</select>
		<select value={this.state.m}
				onChange={this.handleSelectChange2.bind(this)}
			>
			{arr2}
			</select>
			<select value={this.state.y}
				onChange={this.handleSelectChange3.bind(this)}
			>
			{arr3}
			</select>
        <hr/>
		</div>;
	}
}
ReactDOM.render(<Nom12/>,document.getElementById('N12'));


