import React from 'react';
import ReactDOM from 'react-dom';
import './bor.css';
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
	</div>)
	}

}
ReactDOM.render(<App/>,document.getElementById('root'));
class Nom1 extends React.Component {
	constructor() {
		super();
		this.state = {
			names: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро'],
			check: [false, false, false, false, false]
		};
	}

	handleCheckboxChange(event) {
	 const index = parseInt(event.target.value, 10);
		const newCheck = this.state.check;
			
		newCheck[index] = !newCheck[index];
		this.setState({ check: newCheck });
	}

	render() {
		const list = this.state.names.map((name, index) => {

			return (

				<li key={index}>
					{this.state.check[index] ? <s>{name}</s> : name}

					<input
					value={index}

						type="checkbox"
						checked={this.state.check[index]}
						onChange={this.handleCheckboxChange.bind(this)}
					/>
				</li>
			);
		});

		return (
			<div>
				<h3>1</h3>
				<ul>
					{list}
				</ul>
				<hr/>
			</div>
		);
	}
}

ReactDOM.render(<Nom1/>,document.getElementById('N1'));

class Nom2 extends React.Component {
	constructor() {
		super();
	const names = {
        id1: { name: 'Коля', lastn: 'Петрук', salary: 4000 },
        id2: { name: 'Василь', lastn: 'Котечиський', salary: 9000 },
        id3: { name: 'Петро', lastn: 'Лопр', salary: 1200 },
        id4: { name: 'Іван', lastn: 'Шута', salary: 3400 },
        id5: { name: 'Дмитро', lastn: 'Ворний', salary: 7000 }
    };
    const check = [true, true, true, true, true];
    const sum = Object.values(names).reduce((sum, {salary}) => sum + salary, 0);
    //Метод reduce()виконує надану користувачем функцію зворотного виклику «зменшення» для
    //кожного елемента масиву по порядку, передаючи значення, що повертається з обчислення 
    //для попереднього елемента. Кінцевим результатом запуску редуктора по всіх елементах масиву 
    //є одне значення.
    // sum - це аккумулятор, який зберігає суму всіх зарплат, а { salary } - це
    // поточний елемент масиву. Об'єкт { salary } містить властивість salary, яку метод reduce()
    // використовує для додавання до загальної суми sum.
    //0 - це початкове значення
    this.state = { names, check, sum };

	}
	handleCheckboxChange(event) {
	 const index = parseInt(event.target.value, 10);
		const newCheck = this.state.check;
			
		newCheck[index] = !newCheck[index];
		this.setState({ check: newCheck });
		if (this.state.check[index]) {
			this.state.sum=this.state.sum+this.state.names[`id${index + 1}`].salary;
		}else{
			this.state.sum=this.state.sum-this.state.names[`id${index + 1}`].salary;
		}
		this.setState({ sum: this.state.sum});
	}
	render() {
		const list = Object.values(this.state.names).map((id,index) => {
//console.log(id);
			return (

				 <tr key={index}>
				 <td>{id.name}</td>
				 <td>{id.lastn}</td>
				 <td>{id.salary}</td>
				 <td><input
					value={index}
	                checked={this.state.check[index]}
						onChange={this.handleCheckboxChange.bind(this)}
						type="checkbox"
					
					/></td>
					</tr>
				
			);
		});

		return (
			<div>
				<h3>2</h3>
				 <table>
				<tbody>		
			{list}
			</tbody>
			 </table>
			 <p>{this.state.sum}</p>
				<hr/>
			</div>
		);
	}
}

ReactDOM.render(<Nom2/>,document.getElementById('N2'));

class Nom3 extends React.Component {
	constructor() {
		super();
		this.state = {
			names: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро'],
			check: [true, true, true, true, true]
		};
	}

	handleCheckboxChange(event) {
	 const index = parseInt(event.target.value, 10);
		const newCheck = this.state.check;
			
		newCheck[index] = !newCheck[index];
		this.setState({ check: newCheck });
	}

	render() {
		const list = this.state.names.map((name, index) => {

			return (<div>
<input
					value={index}

						type="checkbox"
						checked={this.state.check[index]}
						onChange={this.handleCheckboxChange.bind(this)}
					/>
				<p key={index}>
					{this.state.check[index] ? name :""}

					
				</p>
				</div>
			);
		});

		return (
			<div>
				<h3>3</h3>
				<ul>
					{list}
				</ul>
				<hr/>
			</div>
		);
	}
}

ReactDOM.render(<Nom3/>,document.getElementById('N3'));
class Nom4 extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [
		{name: 'Микола', surname: 'Шевченко', age: 30},
		{name: 'Василь', surname: 'Чумак', age: 40},
		{name: 'Петро', surname: 'Стеценко', age: 50},
	],

			check: [true, true, true]
		};
	}

	handleCheckboxChange(event) {
	 const index = parseInt(event.target.value, 10);

		const newCheck = this.state.check;
			
		newCheck[index] = !newCheck[index];
		this.setState({ check: newCheck });
	//	console.log(this.state.check[index]);
	}

	render() {
		const list = this.state.users.map((user, index) => {

			return (

				<li key={index}>
					

								
                 
				<p>{this.state.check[index] ? (user.name+" "+user.surname+" "+user.age) : user.name}</p>
				 <input
					value={index}

						type="checkbox"
						checked={this.state.check[index]}
						onChange={this.handleCheckboxChange.bind(this)}
				/>
				</li>
			);
		});

		return (
			<div>
				<h3>4</h3>
				<ul>
					{list}
				</ul>
				<hr/>
			</div>
		);
	}
}

ReactDOM.render(<Nom4/>,document.getElementById('N4'));
class Nom5 extends React.Component {
	constructor() {
		super();
		this.state = {
			names: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро'],
			check: [false, false, false, false, false],value:'-'
		};
	}

	handleCheckboxChange(event) {
	
		this.setState({ value: event.target.value });

	}

	kj(event,name,index) {
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
		const newCheck = this.state.check;
			if (!newCheck[name]) {
				newCheck[name] = !newCheck[name];
			}
		

		this.setState({ check: newCheck });


		this.setState({ value: this.state.names[name] });
		console.log(name);
	//	console.log(this.state.check[index]);
	}
	render() {
				const list = this.state.names.map((name, index) => {

			return (

				<li  value={index} onClick={this.Click.bind(this,name,index)}>
					

								
                 
				<p>{this.state.names[index]}</p>
				{this.state.check[index] ? ( <input
					type = "text"
					value={this.state.value}
					onChange={this.handleCheckboxChange.bind(this)}
					autoFocus={true} 
					onBlur={this.kj.bind(this,name,index)}
				/>) : ""}
				
				</li>
			);
		});

		return (
			<div>
				<h3>5</h3>
				<ul>
					{list}
				</ul>
				<hr/>
			</div>
		);
	}
}

ReactDOM.render(<Nom5/>,document.getElementById('N5'));
class Nom6 extends React.Component {
	constructor() {
		super();
		this.state = {
	users: [
		{name: 'Микола', age: 30},
		{name: 'Василь', age: 40},
		{name: 'Петро', age: 50},
	],
			check: [false, false, false],
			check2: [false, false, false]
};

		
	}
Click1(event,name,index){

console.log(index);
		const newCheck = this.state.check;
			if (!newCheck[name]) {
				newCheck[name] = !newCheck[name];
			}
		

		this.setState({ check: newCheck });

	}

handleCheckboxChange(event,namee,index){

 const newNames = this.state.users; 	
 console.log(newNames[index]);	
		newNames[index].name = event.target.value;
       this.setState({ names: newNames });

	}
Click2(event,name,index){

console.log(index);
		const newCheck = this.state.check2;
			if (!newCheck[name]) {
				newCheck[name] = !newCheck[name];
			}
		

		this.setState({ check2: newCheck });

	}

handleCheckboxChange2(event,namee,index){

 const newNames = this.state.users; 	
 console.log(newNames[index]);	
		newNames[index].age = parseInt(event.target.value);
       this.setState({ names: newNames });

	}

	render() {
				const list = this.state.users.map((namee, index) => {

			return (

				< tr key={index}  >
					 <td>{namee.name}		<button
					
					value={this.state.value}
					onClick={this.Click1.bind(this,namee,index)}>редaгувати
				{this.state.check[index] ? ( <input
					type = "text"
					value={namee.name}
					onChange={(event) => this.handleCheckboxChange(event, namee, index)}
					//Функція стрілки (event) => this.handleCheckboxChange(event, name, index)автоматично
					// зв’язується this з екземпляром класу, дозволяючи нам отримати доступ
					// до handleCheckboxChangeметоду через this.

					//по іншому функція не бачить евента і value

				/>) : ""}
				</button></td>
					 <td>{namee.age}<button
					
					value={this.state.value}
					onClick={this.Click2.bind(this,namee,index)}>редaгувати
				{this.state.check2[index] ? ( <input
					type = "text"
					value={namee.age}
					onChange={(event) => this.handleCheckboxChange2(event, namee, index)}
					//Функція стрілки (event) => this.handleCheckboxChange(event, name, index)автоматично
					// зв’язується this з екземпляром класу, дозволяючи нам отримати доступ
					// до handleCheckboxChangeметоду через this.

					//по іншому функція не бачить евента і value

				/>) : ""}
				</button></td>
								
                 
			
		
				
				</tr>
			);
		});

		return (
			<div>
				<h3>6</h3>
				<table>
					<tbody>{list}</tbody>
				</table>
				<hr/>
			</div>
		);
	}
}

ReactDOM.render(<Nom6/>,document.getElementById('N6'));
class Nom7 extends React.Component {
constructor() {
		super();
		this.state = {
			names: ['Лвів-Івано-Франківськ', 'Київ-Житомир', 'Чернівці-Хмельницький'],
			option:0
		};
	}

	handleCheckboxChange(index,name) {
console.log(index);
console.log(name);
		this.setState({ option: index });
		console.log(this.state.option);
	}

	render() {
		const list = this.state.names.map((name, index) => {
			console.log(index+1);
console.log(name);
			return (

				<li key={index}>
					{name}

					<input
					value={index}

						type="radio"
							checked={this.state.option == index+1}
						onChange={this.handleCheckboxChange.bind(this,index+1,name)}
					/>
				</li>
			);
		});

		return (
			<div>
			<p>Ваш выбір: {this.state.option!=0 ? this.state.names[this.state.option-1]:""}</p>
				<h3>7</h3>
				<ul>
					{list}
				</ul>
				<hr/>
			</div>
		);
	}
}

ReactDOM.render(<Nom7/>,document.getElementById('N7'));

class Nom8 extends React.Component {

constructor() {
		super();
		this.state = {value: "",value2: "",texts:[],time:[],id:[],val_id: 1,edit:[]
	}
}
handleCheckboxChange(event){
		this.setState({value: event.target.value})
	}
handleCheckboxChange2(event){
		this.setState({value2: event.target.value})
	}
		addText(){
		this.setState({val_id:this.state.val_id+1});
		const date = new Date();
		const Time = (date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds());
		
		const array = this.state.texts.concat(this.state.value);
		this.setState({texts: array});
		const array2 = this.state.time.concat(Time);
		this.setState({time: array2});
		const array3 = this.state.id.concat(this.state.val_id);
		this.setState({id: array3});
		const array4 = this.state.edit.concat(false);
		this.setState({edit: array4});

		
	}
	editText(item){
		
		const date = new Date();
		const Time = (date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds());
		this.state.texts.splice(item,1,this.state.value2);
	//	const array = this.state.texts.concat(this.state.value);
this.setState({texts: this.state.texts});
	//	const array2 = this.state.time.concat(Time);
		this.state.time.splice(item,1,Time);
		this.setState({time: this.state.time});;
	//	const array4 = this.state.edit.concat(false);
	this.state.edit.splice(item,1,false);
		this.setState({edit:this.state.edit});

		
	}

	deleteClick(index){
		console.log(index);
			this.state.texts.splice(index,1);
			this.setState({texts: this.state.texts});
			this.state.time.splice(index,1);
			this.setState({time: this.state.time});
			this.state.id.splice(index,1);
			this.setState({id: this.state.id});
			this.state.edit.splice(index,1);
		    this.setState({edit:this.state.edit});
	}

	editClick(index,this_item){
		console.log(index);
	this.state.edit.splice(index,1,true);
		this.setState({edit:this.state.edit});
		this.setState({value2:this_item})

	}
	render() {
		const text = Object.keys(this.state.texts).map((item,index)=>{
    		const this_item = this.state.texts[item];
    		const this_time = this.state.time[item];
    		const this_id = this.state.id[item];
    		console.log(this.state.texts[item]);
    		console.log(this.state.time[item]);
    		return <li key={index}>{this_item.text}<h4> Запис {this_id}</h4> 
    		
    		<button onClick={this.deleteClick.bind(this,item)}>Delete</button>
    		<button onClick={this.editClick.bind(this,this_item.id,this_item)}>edit</button>
    		<p>{this_item}</p>
    		<p>{this_time}</p>
    		{this.state.edit[item] ? <div><textarea value={this.state.value2} onChange={this.handleCheckboxChange2.bind(this)}>this_item</textarea>
    		<button onClick={this.editText.bind(this,item)}>Add</button> </div> : ""}
    		</li>

    	})
    	return(
    	<div>
    	<h3>8</h3>
    	<ul>{text}</ul>
    	<textarea value={this.state.value} onChange={this.handleCheckboxChange.bind(this)}/>
    	<button onClick={this.addText.bind(this)}>Add</button>
    	<hr/>
    	</div>
    	);
    }

  }

  
  
 const app = document.getElementById("N8")
ReactDOM.render(<Nom8/>,document.getElementById('N8'));
class Nom9 extends React.Component {
	constructor() {
		super();
	const names = [
         { name: 'Коля', lastn: 'Петрук', salary: 4000 },
         { name: 'Василь', lastn: 'Котечиський', salary: 9000 },
         { name: 'Петро', lastn: 'Лопр', salary: 1200 },
         { name: 'Іван', lastn: 'Шута', salary: 3400 },
         { name: 'Дмитро', lastn: 'Ворний', salary: 7000 }
    ];
    const check = [true, true, true, true, true];

    //Метод reduce()виконує надану користувачем функцію зворотного виклику «зменшення» для
    //кожного елемента масиву по порядку, передаючи значення, що повертається з обчислення 
    //для попереднього елемента. Кінцевим результатом запуску редуктора по всіх елементах масиву 
    //є одне значення.
    // sum - це аккумулятор, який зберігає суму всіх зарплат, а { salary } - це
    // поточний елемент масиву. Об'єкт { salary } містить властивість salary, яку метод reduce()
    // використовує для додавання до загальної суми sum.
    //0 - це початкове значення
    this.state = { names, check};

	}
   Click1(){
const newNames = this.state.names; 
newNames.sort((a,b) => a.name.localeCompare(b.name));
console.log(newNames);
this.setState({names:newNames});
	}
	Click2(){
const newNames = this.state.names; 
newNames.sort((a,b) => a.lastn.localeCompare(b.lastn));
console.log(newNames);
this.setState({lastn:newNames});
	}
	Click3(){

const newNames = this.state.names; 
newNames.sort((a,b) => a.salary - b.salary);
console.log(newNames);
this.setState({salary:newNames});
	}
	render() {
		const list = Object.values(this.state.names).map((id,index) => {
console.log(index);
			return (

				 <tr key={index+1}>
				
				 <div> 
				 <td>{id.name}</td>
				 <td>{id.lastn}</td>
				 <td>{id.salary}</td>
				 </div>
				 
				
					</tr>
				
			);
		});

		return (
			<div>
				<h3>9</h3>
				 <table>
				<tbody>
				<thead>	
				 <tr key = '0'>
				 <div> 
				 <td><button onClick={this.Click1.bind(this)}>Сортувати за і'ям</button></td>
				 <td><button onClick={this.Click2.bind(this)}>Сортувати за прізвищем</button></td>
				 <td><button onClick={this.Click3.bind(this)}>Сортувати за зарплатою</button></td></div> 
			
				 </tr>	
				 </thead>
			{list}
			</tbody>
			 </table>
			
				<hr/>
			</div>
		);
	}
}

ReactDOM.render(<Nom9/>,document.getElementById('N9'));
class Nom10 extends React.Component {
	constructor() {
		super();


    this.state = {l:['українська','англійська'],locu:["Пн","Вт","Ср","Чт","Пт","Сб","Нд"
         ],loca:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],value:'0'}
	}
  handleSelectChange1(event) {
  	console.log(this.state.value);
			this.setState({value: event.target.value});
	}

	render() {
	const arr1 = this.state.l.map((item, index) => {
			//	console.log(day_arindex+'-'+item);
			return <option key={index} value={index} >{item}</option>;
		
		});
	const arr2 = this.state.locu.map((item, index) => {
			//	console.log(day_arindex+'-'+item);
			return <option key={index} value={index} >{item}</option>;
		
		});
const arr3 = this.state.loca.map((item, index) => {
			//	console.log(day_arindex+'-'+item);
			return <option key={index} value={index} >{item}</option>;
		
		});



		return (
			<div>
				<h3>10</h3>
				 <select value={this.state.value}
				onChange={this.handleSelectChange1.bind(this)}
			>
			{arr1}
			</select>

			{this.state.value == '0' ? <select 
			>
			{arr2}
			</select>:this.state.value == '1' ?<select 
			>
			{arr3}
			</select> :"-"
		}

				<hr/>
			</div>
		);
	}
}

ReactDOM.render(<Nom10/>,document.getElementById('N10'));