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
	</div>)
	}

}
ReactDOM.render(<App/>,document.getElementById('root'));
class Nom1 extends React.Component {
	constructor() {
		super();
		this.state = {
			value: ""
			
		};
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		
		return (
			<div>
				<h3>1</h3>
				    <input class={this.state.value.length>3&&this.state.value.length<10 ? "tr" :"fl"} type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
				<hr/>
			</div>
		);
	}
}
ReactDOM.render(<Nom1/>,document.getElementById('N1'));
class Nom2 extends React.Component {
		constructor() {
		super();

  const names = [
         { name: 'Коля', lastn: 'Петрук', salary: 4000 , gender:"M"},
         { name: 'Василь', lastn: 'Котечиський', salary: 9000 , gender:"M"},
         { name: 'Петро', lastn: 'Лопр', salary: 1200 , gender:"M"},
         { name: 'Світлана', lastn: 'Шута', salary: 3400, gender:"F"},
         { name: 'Дмитро', lastn: 'Ворний', salary: 7000 , gender:"M"}
    ];
    this.state = {name:"",lastn:"",salary:"",gender:"",names};
}

   addname(event) {   	
		this.setState({name: event.target.value});
	}
	 addlastn(event) {   	
		this.setState({lastn: event.target.value});
	}
	 addsalary(event) {   	
		this.setState({salary: event.target.value});
	}
	 addgender(event) {   	
		this.setState({gender: event.target.value});
	}
	handleSubmit(event) {
		
		const array = {name:this.state.name,lastn:this.state.lastn,salary:this.state.salary,gender:this.state.gender};	
		const array2 = this.state.names.concat(array);	
		this.setState({names: array2});
		event.preventDefault(); 
	}

	render() {
		const list = Object.values(this.state.names).map((id,index) => {
//console.log(id);
			return (

				 <tr key={index}>
				 <td>{id.name}</td>
				 <td>{id.lastn}</td>
				 <td>{id.salary}</td>
				 <td>{id.gender}</td>
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
			<form onSubmit={this.handleSubmit.bind(this)}>
		<input onChange={this.addname.bind(this)} />
		<input onChange={this.addlastn.bind(this)} />
		<input onChange={this.addsalary.bind(this)} />
		<select
				value={this.state.value}
				onChange={this.addgender.bind(this)}
			>

			<option  value='M'>M</option>
			<option  value='F'>F</option>
		

			</select>
		<input type="submit" />
		</form>
				<hr/>
			</div>
		);
	}}
ReactDOM.render(<Nom2/>,document.getElementById('N2'));
class Nom3 extends React.Component {
		constructor() {
		super();

  const names = [
         { name: '1Девід', lastn: 'Петрук', salary: 4000},
         { name: '2Пітер', lastn: 'Котечиський', salary: 9000 },
         { name: '3Девід', lastn: 'Лопр', salary: 1200 },
         { name: '4Девід', lastn: 'Шута', salary: 3400},
         { name: '5Девід', lastn: 'Ворний', salary: 7000 },
          { name: '6Пітер', lastn: 'Петрук', salary: 4000},
         { name: '7Девід', lastn: 'Котечиський', salary: 9000 },
         { name: '8Девід', lastn: 'Лопр', salary: 1200 },
         { name: '9Пітер', lastn: 'Шута', salary: 3400},
          { name: '10Тед', lastn: 'Петрук', salary: 4000},
         { name: '11Девід', lastn: 'Котечиський', salary: 9000 },
         { name: '12Девід', lastn: 'Лопр', salary: 1200 },
         { name: '13Девід', lastn: 'Шута', salary: 3400},
          { name: '14Пітер', lastn: 'Петрук', salary: 4000},
         { name: '15Девід', lastn: 'Котечиський', salary: 9000 },
         { name: '16Пітер', lastn: 'Лопр', salary: 1200 },
         { name: '17Тед', lastn: 'Шута', salary: 3400},
         { name: '18Девід', lastn: 'Петрук', salary: 4000},
         { name: '19Пітер', lastn: 'Котечиський', salary: 9000 },
         { name: '20Тед', lastn: 'Лопр', salary: 1200 },
         { name: '21Девід', lastn: 'Шута', salary: 3400},
         { name: '22Девід', lastn: 'Ворний', salary: 7000 },
          { name: '23Пітер', lastn: 'Петрук', salary: 4000},
         { name: '24Тед', lastn: 'Котечиський', salary: 9000 },
         { name: '25Девід', lastn: 'Лопр', salary: 1200 },
         { name: '26Девід', lastn: 'Шута', salary: 3400},
          { name: '27Пітер', lastn: 'Петрук', salary: 4000},
         { name: '28Девід', lastn: 'Котечиський', salary: 9000 },
         { name: '29Девід', lastn: 'Лопр', salary: 1200 },
         { name: '30Пітер', lastn: 'Шута', salary: 3400},
          { name: '31Девід', lastn: 'Петрук', salary: 4000},
         { name: '32Девід', lastn: 'Котечиський', salary: 9000 },
         { name: '33Тед', lastn: 'Лопр', salary: 1200 },
         { name: '34Девід', lastn: 'Шута', salary: 3400}
    ];
    this.state = {names,page: 1,
			pageSize: 10};
}

 handlePageChange = (event) => {
		this.setState({

			page: Number(event.target.dataset.page)
		});
		//звернення до значення data-page як раніше звертаталис до value
	}

	
	render() {
			const startIndex = (this.state.page - 1) * this.state.pageSize;
		const endIndex = startIndex + this.state.pageSize;

	
		const visibleNames = this.state.names.slice(startIndex, endIndex);

		
		const numPages = Math.ceil(this.state.names.length / this.state.pageSize);
		const pageLinks = Array.from({length: numPages}, (_, index) => {
			const pageNumber = index + 1;
		
		//створює масив з numPages елементів, де кожен елемент отримує значення undefined. 
		//Параметр _ визначається, але не використовується в тілі стрілкової функції, 
		//індекс кожного елемента index обчислюється як index + 1.
		//Атрибут data-page містить номер сторінки, щоб відслідковувати, на яку сторінку користувач натиснув. 
//Атрибут data- *  додає додаткові дані до елемента .
			return (
				<a
					href="#"
					key={pageNumber}
					data-page={pageNumber}
					onClick={this.handlePageChange}
					
				>
					{pageNumber}
				</a>
			);
		});
		const list = Object.values(visibleNames).map((id,index) => {
//console.log(id);
//if (index >= this.state.page-1&&index<this.state.pageSize+1) {


			return (

				 <tr key={index}>
				 <td>{id.name}</td>
				 <td>{id.lastn}</td>
				 <td>{id.salary}</td>
			
					</tr>
				
			);
//		}else { return("");};
		});

		return (
			<div>
				<h3>3</h3>
				{pageLinks}
				 <table>
				<tbody>		
			{list}
			</tbody>
			 </table>
			
				<hr/>
			</div>
		);
	}}
ReactDOM.render(<Nom3/>,document.getElementById('N3'));
class Nom4 extends React.Component {
constructor() {
		super();
		this.state = {texts: [
			],value:'',value2:null};
	}


	handleChange(event) {
			this.setState({value: event.target.value });
		


	}
	handleSelectChange(event) {
		this.setState({value2: event.target.value});
	}

st(){

this.state.texts.push(this.state.value);
this.setState({texts: this.state.texts});
}
	render() {
				const arr = this.state.texts.map((item, index) => {
			return <option key={index} value={item}>{item}</option>;
		});
		return <div>
		    <h3>4</h3>
		    <p>{this.state.value2!=null ?this.state.value2:this.state.texts[0]}</p>
		    <select 	value={this.state.value2}
				onChange={this.handleSelectChange.bind(this)}>
		    	{arr}
		    	</select>
			<input value={this.state.value} onChange={this.handleChange.bind(this)} />
			<button onClick={this.st.bind(this)}>Кнопка</button>
		
 <hr/>
		</div>;
	}
}
ReactDOM.render(<Nom4/>,document.getElementById('N4'));
class Nom5 extends React.Component {
constructor() {
		super();
		this.state = {texts: [
			],value:null,value2:"$",value3:"$",sum:null};
	}


	handleChange(event) {
			this.setState({value:parseInt(event.target.value)});
		


	}
	handleSelectChange(event) {
		this.setState({value2: event.target.value});
	}
	handleSelectChange2(event) {
		this.setState({value3: event.target.value});
	}

st(){
if (this.state.value2==this.state.value3) {
this.setState({sum: this.state.value});
return;
};
if (this.state.value2=="$") {
	if (this.state.value3=="грн") {
		this.setState({sum: this.state.value*36.96});
	}else{
		this.setState({sum: this.state.value*4.36});
	}
	return;
};
if (this.state.value2=="грн") {
	if (this.state.value3=="$") {
		this.setState({sum: this.state.value*0.027});
	}else{
		this.setState({sum: this.state.value*0.12});
	}
	return;
};
if (this.state.value2=="zł") {
	if (this.state.value3=="$") {
		this.setState({sum: this.state.value*0.23});
	}else{
		this.setState({sum: this.state.value*8.48});
	}
	return;
};

}
	render() {
				const arr = this.state.texts.map((item, index) => {
			return <option key={index} value={item}>{item}</option>;
		});
		return <div>
		    <h3>5</h3>
		   
		    <input value={this.state.value} onChange={this.handleChange.bind(this)} />
		    <select 	value={this.state.value2}
				onChange={this.handleSelectChange.bind(this)}>
		    	<option  value="$">$</option>
		    	<option  value="грн">грн</option>
		    	<option  value="zł">zł</option>
		    	</select>
		    	<select 	value={this.state.value3}
				onChange={this.handleSelectChange2.bind(this)}>
		    	<option  value="$">$</option>
		    	<option  value="грн">грн</option>
		    	<option  value="zł">zł</option>
		    	</select>
			
			<button onClick={this.st.bind(this)}>Кнопка</button>
		 <p>{this.state.sum!=null ?this.state.sum:""}</p>
 <hr/>
		</div>;
	}
}
ReactDOM.render(<Nom5/>,document.getElementById('N5'));
class Nom6 extends React.Component {
	constructor() {
		super();
		this.state = {
	test: [
		{
			question: 'Нащо кіт точить кігті об диван?',
			answers: [
				'Диван лякає кота',
				'Щоб вам насолити',
				'Створює мистецтво абстракції',
				'Точить кігті',
				'Позує',
			],
			right: 4, //номер правильної відповіді
			option:0,
		},
		{
			question: 'Коти якої породи мають підвищену температуру тіла?',
			answers: [
				'Персицькі',
				'Свінкси',
				'Британськи',
				'Бобтейлс',
				'Абсинські',
			],
			right: 2, //номер правильної відповіді
			option:0,
		},
		{
			question: 'Ви любите котів?',
			answers: [
				'Ні',
				'Незнаю',
				'Можливо',
				'Трішки',
				'ТААААААААААААААААК',
			],
			right: 5, //номер правильної відповіді
			option:0
		},
	]
};

	}
	handleRadioChange(event, name, index) {
		const newNames = this.state.test; 	
 
		newNames[index].option =parseInt(event.target.value);
    // console.log(event.target.value+"---");
    // console.log(this.state.test[0].option);
     // console.log(this.state.test[1].option);
     //  console.log(this.state.test[2].option);
		this.setState({test:newNames});
		
	}


	

	render() {
		const list = this.state.test.map((name, index) => {
 console.log(this.state.test[index].option);
 console.log(this.state.test[index].right);
 
			return(
				<div>
				<h2 class={this.state.test[index].option==this.state.test[index].right&&this.state.test[index].option!=0?"tr":
				this.state.test[index].option!=0?"fl":""}>{this.state.test[index].question}</h2>
				<input
				name={this.state.test[index].question}

				type="radio"
				value="1"
				checked={this.state.test[index].option === 1}
				onChange={(event) => this.handleRadioChange(event, name, index)}
			/><p	class={this.state.test[index].option==this.state.test[index].right&&this.state.test[index].option==1?"tr":
				this.state.test[index].option==1?"fl":""}>{this.state.test[index].answers[0]}</p>

			<input
				name={this.state.test[index].question}
				type="radio"
				value="2"
				checked={this.state.test[index].option === 2}
				onChange={(event) => this.handleRadioChange(event, name, index)}
			/><p	class={this.state.test[index].option==this.state.test[index].right&&this.state.test[index].option==2?"tr":
				this.state.test[index].option==2?"fl":""}>{this.state.test[index].answers[1]}</p>
			<input
				name={this.state.test[index].question}
				type="radio"
				value="3"
				checked={this.state.test[index].option === 3}
				onChange={(event) => this.handleRadioChange(event, name, index)}
			/><p	class={this.state.test[index].option==this.state.test[index].right&&this.state.test[index].option==3?"tr":
				this.state.test[index].option==3?"fl":""}>{this.state.test[index].answers[2]}</p>
	         <input
				name={this.state.test[index].question}
				type="radio"
				value="4"
				checked={this.state.test[index].option === 4}
				onChange={(event) => this.handleRadioChange(event, name, index)}
			/><p	class={this.state.test[index].option==this.state.test[index].right&&this.state.test[index].option==4?"tr":
				this.state.test[index].option==4?"fl":""}>{this.state.test[index].answers[3]}</p>
		
			<input
				name={this.state.test[index].question}
				type="radio"
				value="5"
				checked={this.state.test[index].option === 5}
				onChange={(event) => this.handleRadioChange(event, name, index)}
			/><p	class={this.state.test[index].option==this.state.test[index].right&&this.state.test[index].option==5?"tr":
				this.state.test[index].option==5?"fl":""}>{this.state.test[index].answers[4]}</p>
            </div>

					   );
  });
		
		return (
			<div>
				<h3>6-7</h3>
				    {list}
				<hr/>
			</div>)
	
    }
}


ReactDOM.render(<Nom6/>,document.getElementById('N6'));
