import { Component } from "react";
export default class CCSum extends Component {
constructor(props)
{
    super.props
}
    add = (e) => {
        this.setState({ Number1: Number(e.target.value)});
        number1=e.target.value;

        this.setState({ Number2: Number(e.target.value)});
        number2=e.target.value;

    }

   render()
   {
    return(
        <div style={{color: 'puple' , margin:10 , padding:10 ,
            border: '5px dotted green'
            }}>
            Number : <input type="text" onChange={this.add}/>
            Number : <input type="text" onChange={this.add}/>
            <button  onClick={this.btnAdd} >+</button>
        </div>
    );

   }

    
 


}