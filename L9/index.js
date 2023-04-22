 import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
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

class User10 extends React.Component {
	constructor() {
		super();
	}

	render() {
	return <tr>

				<td>{this.props.name}</td>
				<td>{this.props.lastname}</td>
				<td><input type="number"
				defaultValue={this.props.cil} 
					value={this.props.cil}
               onChange={(event) => this.props.handleCheckboxChange(event, this.props.index)} 
					
				/></td>
				<td><input type="number"
				defaultValue={this.props.prise} 
					value={this.props.prise}
               onChange={(event) => this.props.handleCheckboxChange2(event, this.props.index)} 
					
				/></td>
				<td>{this.props.cil*this.props.prise}</td>
				
				 
					
		</tr>;
	}
}

class App10 extends React.Component {
	constructor() {
		super();

	this.state = {
	users: [
		{name: 'Олег',lastname:'Ліберт', cil: 21,prise:26,},
		{name: 'Ігор',lastname:'Котичинський', cil: 34,prise:27,},
		{name: 'Ірина',lastname:'Лісова', cil: 5,prise:43,},
		],check: [true, true, true]
		};
	}
	handleCheckboxChange(event,index) {
  	console.log(event.target.value);
     	this.state.users[index].cil =+event.target.value;
		this.setState({'users': this.state.users});

	}
handleCheckboxChange2(event,index) {
  	console.log(event.target.value);
     	this.state.users[index].prise =+event.target.value;
		this.setState({'users': this.state.users});

	}
	render() {
		const users = this.state.users.map((item, index) => {
return<User10 value={this.state.value} key={index} index = {index} lastname={item.lastname} name={item.name} cil={item.cil}
 prise={item.prise}  handleCheckboxChange2={this.handleCheckboxChange2.bind(this)}  handleCheckboxChange={this.handleCheckboxChange.bind(this)} />;
		});
		return <div>
		<h3>1</h3>
		 <table >
			
				<tr>
				 <th>ім’я</th>
				 <th>Прізвище</th>
				 <th>кількість</th>
				 <th>ставка</th>
				  <th>пов вартість</th>
		

					</tr>
			{users}
		
			 </table>
		
			 { <TotalPrice2 users={this.state.users} check={this.state.check}/>}
		</div>;
	}
}
ReactDOM.render(<App10/>,document.getElementById('N1'));

class Question2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      result: ''
    };
  }

  handleInputChange(event) {
    this.setState({ answer: event.target.value });
  }

  checkAnswer() {
   
    const result = (this.state.answer === String(this.props.correctAnswer))
      ? <p className='tr'>Ваша відповідь: {this.state.answer}. Правильна!</p>
      : <p className='fl'>Ваша відповідь: {this.state.answer}. Неправельна,правильна відповідь: {this.props.correctAnswer}</p>;
console.log(result);
    this.setState({ result });
  }

  render() {
    return (
      <li className='question'>
      <div>{this.props.question}</div>
      {this.state.result ? this.state.result : (
        <form onSubmit={(event) => {
          event.preventDefault();
          this.checkAnswer();
        }}>
          <input type='text' value={this.state.answer} onChange={this.handleInputChange.bind(this)} />
          <br/>
          <button type='submit'>скласти тест</button>
        </form>
      )}
    </li>
    );
  }
}

class Test2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        { question: 'Скільки життів в кішки?', correctAnswer: 9 },
        { question: 'Чи вийде зелений якщо змішати синій і жовтий?', correctAnswer: 'так' },
        { question: 'Скільки років найстарішій людині на землі?', correctAnswer: 122 }
      ],
      isSubmitted: false
    };
  }

  handleSubmit() {
    this.setState({ isSubmitted: true });
  }

  render() {
    const questions = this.state.questions.map((question, index) => {
      return (
        <Question2
          key={index}
          question={question.question}
          correctAnswer={question.correctAnswer}
        />
      );
    });

    return (
      <div>
      	<h3>2</h3>
        <ol>{questions}</ol>
     
        
      </div>
    );
  }
}

ReactDOM.render(<Test2 />, document.getElementById('N2'));
 class Question3 extends React.Component{
	constructor(){
		super();
	}
	render(){
		
		return <li>
				<p>{this.props.index + 1}.{this.props.question}</p>
	<input 	className='answerTest' 
					onChange={this.props.save.bind(null, this.props.index)}
					value={this.props.res !== '' ? this.props.res : ' '}
					/>
				
					
		</li>;
		
	}
}
class Result2 extends React.Component{
	constructor(){
		super();
	}
	render(){

		var result = this.props.questions.map((item, index) => {
			
			
			return <li key={index}>
				{index + 1}. {item.question}
				<p>
					{this.props.checkAnswer(index) ? <p className='tr'>Ваша відповідь: {item.res}. Правильна!</p> :<p className='fl'>Ваша відповідь: 
					{item.res}. Неправельна,правильна відповідь: {item.res}</p>}
				</p>
			</li>
		});
		
		return <ul>{result}</ul>;
	}
}
class Test3 extends React.Component {
	constructor(){
		super();
		this.state = {
			    questions: [
        { question: 'Скільки життів в кішки?', correctAnswer: 9,res:'' },
        { question: 'Чи вийде зелений якщо змішати синій і жовтий?', correctAnswer: 'так',res:'' },
        { question: 'Скільки років найстарішій людині на землі?', correctAnswer: 122,res:''}
      ],
			number: 0,
			check: true
		}
	}
	checkTest(){
		this.setState({check: false});
	}

	next(event){
		let number = this.state.number + Number(event.target.dataset.direction);
		
		if(number < 0 || number == this.state.questions.length) return;

		this.setState({number: number})
	}
	save(index, event){
	this.state.questions[index].res = event.target.value.trim();
		this.setState({questions: this.state.questions})
	}
	get(index){
		var item = this.state.questions[index];
		console.log(item);
		return <Question3
				index={index}
				question={item.question}
				res={item.res}
				save={this.save.bind(this)}
			/>;
	}
	checkAnswer(index){
			//console.log(item);
		return this.state.questions[index].correctAnswer == this.state.questions[index].res;//tr or fl
	}
	render(){
		var List = <div>
				<ul>{this.get(this.state.number)}</ul>
			
					 
		
		 <div>
			<form onClick = {this.next.bind(this)}>
				<input 
					type='button' 
					className='leftRight' 
					value='Назад' 
					data-direction='-1'
				/>
				<input 
					type='button' 
					className='leftRight' 
					value='Вперед'
					data-direction='1' 
				/>
			</form>
			{this.state.number==this.state.questions.length-1 ?<button onClick={this.checkTest.bind(this)}>Провірити відповіці</button> : ''}
		</div>
			</div>;
			
		return <div>
		<h3>3</h3>
			{this.state.check ? List : 
				<Result2
					questions={this.state.questions}
					checkAnswer={this.checkAnswer.bind(this)}

				/>
			}
		</div>
	}
}
ReactDOM.render(<Test3/>, document.getElementById('N3'));
 class Question4 extends React.Component{
	constructor(){
		super();
	}
	render(){
		var listVariants = this.props.var.map((item, index)=>{
			return<div>
				<p>{item}</p>
				<input 
						type='radio' 
						checked={index == this.props.checked ? true : false}
						value={index}
					/>
			
		</div>});
		return <li>
				<p>{this.props.index + 1}.{this.props.question}</p>
	<form onChange = {this.props.save.bind(null, this.props.index)}>
				{listVariants}
				</form>	
		</li>;
		
	}
}
class Result3 extends React.Component{
	constructor(){
		super();
	}
	render(){

		var result = this.props.questions.map((item, index) => {
			
			
			return <li key={index}>
				{index + 1}. {item.question}
				<p>
					{this.props.checkAnswer(index) ? <p className='tr'>Ваша відповідь: {item.res}. Правильна!</p> :<p className='fl'>Ваша відповідь: 
					{item.res}. Неправельна,правильна відповідь: {item.res}</p>}
				</p>
			</li>
		});
		
		return <ul>{result}</ul>;
	}
}
class Test4 extends React.Component {
	constructor(){
		super();
		this.state = {
			    questions: [
        { question: 'Скільки життів в кішки?', correctAnswer: 9,res:'' ,var: [6, 9, 8, 4],checked:null},
        { question: 'Чи вийде зелений якщо змішати синій і жовтий?', correctAnswer: 'так',res:'' ,var: ['так','ні'],checked:null},
        { question: 'Скільки років найстарішій людині на землі?', correctAnswer: 122,res:'',var: [120, 130, 122, 100],checked:null}
      ],
			number: 0,
			check: true
		}
	}
	checkTest(){
		this.setState({check: false});
	}

	next(event){
		let number = this.state.number + Number(event.target.dataset.direction);
		
		if(number < 0 || number == this.state.questions.length) return;

		this.setState({number: number})
	}
	save(index, event){
			console.log(index);
		console.log(event.target.value);
		this.state.questions[index].checked = event.target.value;
		this.state.questions[index].res = this.state.questions[index].var[event.target.value];
		this.setState({questions: this.state.questions});
	}
	get(index){
		var item = this.state.questions[index];
		console.log(item);
		return <Question4
				index={index}
				question={item.question}
				res={item.res}
				var={item.var}
				checked={item.checked}
				save={this.save.bind(this)}
			/>;
	}
	checkAnswer(index){
			//console.log(item);
		return this.state.questions[index].correctAnswer == this.state.questions[index].res;//tr or fl
	}
	render(){
		var List = <div>
				<ul>{this.get(this.state.number)}</ul>
			
					 
		
		 <div>
			<form onClick = {this.next.bind(this)}>
				<input 
					type='button' 
					className='leftRight' 
					value='Назад' 
					data-direction='-1'
				/>
				<input 
					type='button' 
					className='leftRight' 
					value='Вперед'
					data-direction='1' 
				/>
			</form>
			{this.state.number==this.state.questions.length-1 ?<button onClick={this.checkTest.bind(this)}>Провірити відповіці</button> : ''}
		</div>
			</div>;
			
		return <div>
		<h3>4</h3>
			{this.state.check ? List : 
				<Result3
					questions={this.state.questions}
					checkAnswer={this.checkAnswer.bind(this)}

				/>
			}
		</div>
	}
}
ReactDOM.render(<Test4/>, document.getElementById('N4'));

class Question5 extends React.Component{
	constructor(){
		super();
	}
	render(){
		var List = this.props.var.map((item, index)=>{
			return<div key={index}>
				<p>{item}</p>
				<input 
						type='checkbox' 
						checked={this.props.getChecked(this.props.index, index) ? true : false}
							onChange = {this.props.save.bind(null, this.props.index)}
						data-index={index}
						
					/>
			
		</div>
console.log(this.props.questions);
	}
	);
		return <li>
				<p>{this.props.index + 1}.{this.props.question}</p>
	<form >
				{List}
				</form>	
		</li>
		
	}
}
class Result5 extends React.Component{
	constructor(){
		super();
	}
	render(){

		var result = this.props.questions.map((item, index) => {
			let var_ = item.var.map(function(item){return item ;});
			let correctAnswer_ = item.correctAnswer.map(function(item){

				return item ;});
			
			return <li key={index}>
				{index + 1}. {item.question}
				
					{this.props.checkAnswer(index) ? <p className='tr'>Ваша відповідь:{var_.join(', ')}. Правильна!</p> :<p className='fl'>Ваша відповідь: 
					{var_.join(', ')}. Неправельна,правильна відповідь: {correctAnswer_.join(', ')}</p>}
				
			</li>
		});
		
		return <ul>{result}</ul>;
	}
}
class Test5 extends React.Component {
	constructor(){
		super();
		this.state = {
			    questions: [
        { question: 'Скільки життів в кішки?', correctAnswer: [9,1],res:[] ,var: [6, 9, 8, 1]},
        { question: 'Чи вийде зелений якщо змішати синій і жовтий?', correctAnswer: ['так'],res:[] ,var: ['так','ні']},
        { question: 'Скільки років найстарішій людині на землі?', correctAnswer: [122,120],res:[],var: [120, 130, 122, 100]}
      ],
			number: 0,
			check: true
		}
	}
	checkTest(){
		this.setState({check: false});
	}

	next(event){
		let number = this.state.number + Number(event.target.dataset.direction);
		
		if(number < 0 || number == this.state.questions.length) return;

		this.setState({number: number})
	}
	save(index, event){
		//console.log(index);
	    let answers = this.state.questions[index].res
		let	answer = +event.target.dataset.index;
//console.log(this.state.questions);
		if(event.target.checked){
		//	console.log(answer);
			answers.push(answer);
		} else {
			answers = answers.filter(function(item){
				console.log(item);
						return item !== answer;
					});
		}
		this.state.questions[index].res = answers;
	//console.log(this.state.questions[index].res);
		this.setState({questions: this.state.questions});
				//console.log(this.state.questions);
	}
	//get(event){
//		console.log(this.state.questions[this.state.number]);
//		var item = this.state.questions[this.state.number];
		
//		return <Question4
//				index={this.state.number}
//				question={item.question}
//				res={item.res}
//				var={item.var}
//				checked={item.checked}
//				save={this.save.bind(this)}
//				getChecked={this.getChecked.bind(this)}
//			/>;
//	}
	checkAnswer(index){
		let arr = new Array();
		let f =0;
		for (var i = 0; i < this.state.questions[index].res.length; i++) {
			for (var j = 0; j < this.state.questions[index].var.length;j++) {
				if (this.state.questions[index].var[j]==this.state.questions[index].var[this.state.questions[index].res[i]]) {
						//console.log(this.state.questions[index].var[j]);
					arr[f]=this.state.questions[index].var[j]
					f++;
				}
			}

		}
	//	console.log(arr);
		arr.sort();
		let arr2 = this.state.questions[index].correctAnswer.sort();
		//console.log('---------------------------------------------');
		for (var i = 0; i <= arr2.length; i++) {

				if(arr[i]!= arr2[i]){
					return false
					

				}

			
		}
		 return true
	}
	getChecked(index, indexCheckbox){
		return this.state.questions[index].res.some(function(item){
			return item == indexCheckbox;
		});
	}
	render(){
		console.log(this.state.questions);
		var List = <div>
				<ul> <Question5
				index={this.state.number}
				questions={this.state.questions}
				question={this.state.questions[this.state.number].question}
				res={this.state.questions[this.state.number].res}
				var={this.state.questions[this.state.number].var}
				check={this.state.check}
				save={this.save.bind(this)}
				getChecked={this.getChecked.bind(this)}
			/></ul>
			
					 
		
		 <div>
			<form onClick = {this.next.bind(this)}>
				<input 
					type='button' 
					className='leftRight' 
					value='Назад' 
					data-direction='-1'
				/>
				<input 
					type='button' 
					className='leftRight' 
					value='Вперед'
					data-direction='1' 
				/>
			</form>
			{this.state.number==this.state.questions.length-1 ?<button onClick={this.checkTest.bind(this)}>Провірити відповіці</button> : ''}
		</div>
			</div>;
			console.log(this.state.questions);
		return <div>
		<h3>5</h3>
			{this.state.check ? List : 
				<Result5
					questions={this.state.questions}
					checkAnswer={this.checkAnswer.bind(this)}

				/>
			}
		</div>
	}
}
ReactDOM.render(<Test5/>, document.getElementById('N5'));


class TextList extends React.Component {
  render() {
    const text = Object.keys(this.props.texts).map((item,index)=>{
      const this_item = this.props.texts[item];
      const this_id = this.props.id[item];

      return (
        <li key={index}>{this_item.text}<h4 className ={this.props.check[item] ?  "r6" : ' '}> Запис {this_id}. {this_item}<input
            type="checkbox"
            value={item}
            checked={this.props.check[item]}
            onChange={(event) => this.props.handleRadioChange(event, item)}
          /></h4>
          <button onClick={() => this.props.deleteClick(item)}>Delete</button>
          <button onClick={() => this.props.editClick(item,this.props.texts[item])}>edit</button>
          {this.props.edit[item] ? (
            <div>
              <textarea value={this.props.value2} onChange={(event) => this.props.handleCheckboxChange2(event, item)}>{this_item}</textarea>
              <button onClick={() => this.props.editText(item)}>Add</button>
            </div>
          ) : ""}
        </li>
      )
    })
    return <ul>{text}</ul>
  }
}

class TextForm extends React.Component {
  render() {
    return (
      <div>
        <textarea value={this.props.value} onChange={this.props.handleCheckboxChange} />
        <button onClick={this.props.addText}>Add</button>
        <hr />
      </div>
    )
  }
}
class Nom6 extends React.Component {

constructor() {
		super();
		this.state = {value: "",value2: "",texts:[],id:[],val_id: 1,edit:[],check:[]
	}
}
handleCheckboxChange(event){
		this.setState({value: event.target.value})
	}
handleCheckboxChange2(event){
	console.log(event.target.value);
		this.setState({value2: event.target.value})
	}
		addText(){
		this.setState({val_id:this.state.val_id+1});
		
		
		const array = this.state.texts.concat(this.state.value);
		this.setState({texts: array});
		
		const array3 = this.state.id.concat(this.state.val_id);
		this.setState({id: array3});
		const array4 = this.state.edit.concat(false);
		this.setState({edit: array4});
		const array5 = this.state.check.concat(false);
		this.setState({check: array5});

		
	}
	editText(item){
			console.log(item);
		const date = new Date();
		const Time = (date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds());
		this.state.texts.splice(item,1,this.state.value2);
	//	const array = this.state.texts.concat(this.state.value);
this.setState({texts: this.state.texts});
	
		
	//	const array4 = this.state.edit.concat(false);
	this.state.edit.splice(item,1,false);
		this.setState({edit:this.state.edit});

		
	}

	deleteClick(index){
		console.log(index);
			this.state.texts.splice(index,1);
			this.setState({texts: this.state.texts});
			
			this.state.id.splice(index,1);
			this.setState({id: this.state.id});
			this.state.edit.splice(index,1);
		    this.setState({edit:this.state.edit});
		    this.state.check.splice(index,1);
		    this.setState({check:this.state.check});
	}
handleRadioChange(event, index) {
		const newNames = this.state.check; 	
 
		newNames[index] = !newNames[index];
		this.setState({check:newNames});
		
	}
	editClick(index,this_item){
		console.log(index);
		console.log(this_item);
	this.state.edit.splice(index,1,true);
		this.setState({edit:this.state.edit});
		this.setState({value2:this.this_item})

	}
	render() {
		
    	return(
    	<div>
    	<h3>6</h3>
    	<ul><TextList value2 = {this.state.value2} texts = {this.state.texts} id = {this.state.id} check = {this.state.check} edit = {this.state.edit} 
    	handleRadioChange={this.handleRadioChange.bind(this) } deleteClick={this.deleteClick.bind(this) } 
    	editClick={this.editClick.bind(this) } editText={this.editText.bind(this) } handleCheckboxChange2={this.handleCheckboxChange2.bind(this) } /> </ul>
    	<TextForm value={this.state.value} handleCheckboxChange={this.handleCheckboxChange.bind(this) } addText={this.addText.bind(this) }/>

    	</div>
    	);
    }

  }

  

ReactDOM.render(<Nom6/>,document.getElementById('N6'));
class TextList2 extends React.Component {
  render() {
    const text = Object.keys(this.props.texts).map((item,index)=>{
      const this_item = this.props.texts[item];
      const this_id = this.props.id[item];
      	console.log(item+index);
	console.log(this.props.d[item]+this.props.d1);
	console.log(this.props.m[item]+this.props.m1);
	console.log(this.props.y[item]+this.props.y1);
      return (<div>
       {this.props.d[item] == this.props.d1&&this.props.m[item] == this.props.m1&&this.props.y[item] == this.props.y1 ?  <li key={index}>{this_item.text}<h4 className ={this.props.check[item] ?  "r6" : ' '}> Запис {this_id}. {this_item}<input
            type="checkbox"
            value={item}
            checked={this.props.check[item]}
            onChange={(event) => this.props.handleRadioChange(event, item)}
          /></h4>
          <button onClick={() => this.props.deleteClick(item)}>Delete</button>
          <button onClick={() => this.props.editClick(item,this.props.texts[item])}>edit</button>
          {this.props.edit[item] ? (
            <div>
              <textarea value={this.props.value2} onChange={(event) => this.props.handleCheckboxChange2(event, item)}>{this_item}</textarea>
              <button onClick={() => this.props.editText(item)}>Add</button>
            </div>
          ) : ""}
        </li> : ''}</div>
      )
    })
    return <ul>{text}</ul>
  }
}

class TextForm2 extends React.Component {
  render() {
    return (
      <div>
        <textarea value={this.props.value} onChange={this.props.handleCheckboxChange} />
        <button onClick={this.props.addText}>Add</button>
        <hr />
      </div>
    )
  }
}
class Calendar extends React.Component {
  constructor() {
super();
		this.state = {value: "",value2: "",texts:[],id:[],val_id: 1,edit:[],check:[],d:[],m:[],y:[],d1:'',m1:'',y1:'',check1:false,dat:new Date()}
  }
st(date,index){
console.log(date);
console.log(index);
this.setState({d1: index});
this.setState({m1: date.getMonth()});
this.setState({y1: date.getFullYear()});
this.setState({check1: true});
}
handleCheckboxChange(event){
		this.setState({value: event.target.value})
	}
handleCheckboxChange2(event){
	console.log(event.target.value);
		this.setState({value2: event.target.value})
	}
		addText(){
		this.setState({val_id:this.state.val_id+1});
		
const array6 = this.state.d.concat(this.state.d1);
				const array7 = this.state.m.concat(this.state.m1);
					const array8 = this.state.y.concat(this.state.y1);

			this.setState({d: array6});
		this.setState({m: array7});
		this.setState({y: array8});

		const array = this.state.texts.concat(this.state.value);
		this.setState({texts: array});
		
		const array3 = this.state.id.concat(this.state.val_id);
		this.setState({id: array3});
		const array4 = this.state.edit.concat(false);
		this.setState({edit: array4});
		const array5 = this.state.check.concat(false);
		this.setState({check: array5});

		
	}
	editText(item){
			console.log(item);
		const date = new Date();
		const Time = (date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds());
		this.state.texts.splice(item,1,this.state.value2);

			
	//	const array = this.state.texts.concat(this.state.value);
this.setState({texts: this.state.texts});
	
	
	//	const array4 = this.state.edit.concat(false);
	this.state.edit.splice(item,1,false);
		this.setState({edit:this.state.edit});

		
	}

	deleteClick(index){
		console.log(index);
			this.state.texts.splice(index,1);
			this.setState({texts: this.state.texts});
			
			this.state.id.splice(index,1);
			this.setState({id: this.state.id});
			this.state.edit.splice(index,1);
		    this.setState({edit:this.state.edit});
		    this.state.check.splice(index,1);
		    this.setState({check:this.state.check});
	}
handleRadioChange(event, index) {
		const newNames = this.state.check; 	
 
		newNames[index] = !newNames[index];
		this.setState({check:newNames});
		
	}
	editClick(index,this_item){
		console.log(index);
		console.log(this_item);
	this.state.edit.splice(index,1,true);
		this.setState({edit:this.state.edit});
		this.setState({value2:this.this_item})

	}
	st3(){
		console.log(new Date(this.state.dat.getFullYear(), this.state.dat.getMonth()+1, 1));
		var kkk = this.state.dat;
		if (this.state.dat.getMonth()!= 11) {
			console.log('----');
			kkk = new Date(this.state.dat.getFullYear(), this.state.dat.getMonth()+1, 1);
		}
else{
	kkk = new Date(this.state.dat.getFullYear(), this.state.dat.getMonth()+1, 1);
}

this.setState({dat:kkk})

}
st2(){
	var kkk = this.state.dat;
		if (this.state.dat.getMonth()!= 0) {
			 kkk = new Date(this.state.dat.getFullYear(), this.state.dat.getMonth()-1, 1);
		}
else{
    kkk = new Date(this.state.dat.getFullYear(), this.state.dat.getMonth()-1, 1);
}

this.setState({dat:kkk})

}
  render() {
    // Get the current month and year
  const d = this.state.dat;
    const days = [];
    const firstDay = new Date(d.getFullYear(), d.getMonth(), 0).getDay();
    console.log(firstDay);
    const lastDate = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
const month = d.getMonth();
const years = d.getFullYear();
    for (let i = 1 - firstDay; i <= lastDate; i++) {
      if (i <= 0) {
        days.push(<td></td>);
      } else {
        days.push(<td>{i} <button onClick={this.st.bind(this,d,i)}>Add</button></td>);
      }
      if ((i + firstDay) % 7 === 0) {
        days.push(<tr></tr>);
      }
    }
   

    // Render the table
    return (<div>
    	<button onClick={this.st2.bind(this)}>назад</button>
    	<button onClick={this.st3.bind(this)}>Вперед</button>
    	
    	{month}
    	{years}
    	<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr>
    	{days}
    	</table>
    	{this.state.check1 == true ? <TextList2 value2 = {this.state.value2} d = {this.state.d} d1 = {this.state.d1}		m = {this.state.m}m1 = {this.state.m1}
    		y = {this.state.y}y1 = {this.state.y1} texts = {this.state.texts} id = {this.state.id} check = {this.state.check} edit = {this.state.edit} 
    	handleRadioChange={this.handleRadioChange.bind(this) } deleteClick={this.deleteClick.bind(this) } 
    	editClick={this.editClick.bind(this) } editText={this.editText.bind(this) } handleCheckboxChange2={this.handleCheckboxChange2.bind(this) } /> : ''}
    	{this.state.check1 == true ?<TextForm2 value={this.state.value} handleCheckboxChange={this.handleCheckboxChange.bind(this) } addText={this.addText.bind(this) }/>: ''}
    	</div>
    );
  }
}

ReactDOM.render(<Calendar/>,document.getElementById('N7'));