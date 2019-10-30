import React, { Component } from 'react';
import './Search.css';
import axios from 'axios';

export default class Search extends Component {

    state ={
        tokens : null,
        token_string :''
    };

    handleClick = ()=>{
        console.log('okey ');
        // let token_obj = {
        //     json:true,
        //     body:{
        //         token_string: 'sin(x)'
        //     }
        // }
        // axios.post('http://13.232.16.204:7000/tokenize',{token_obj}).then((response)=>{
        //     console.log(response.data.data);
        //     this.setState({tokens:response.data.data});
        // }).catch((err)=>{
        //     console.log(err);
        // })

        axios({
            method :  'post',
            url:'http://13.232.16.204:7000/tokenize',
            data:{
                token_string :this.state.token_string
            }
        }).then((response)=>{
            console.log(response);
            this.setState({tokens:response.data.data}); 
        }).catch((err)=>{
            console.log(err);
        })
    }

    clearToken = ()=>{
        console.log('clearing the token');
        this.setState({tokens:null , token_string :''});
    }
    changeData = (e)=>{
        console.log(e.target.value);
        this.setState({token_string : e.target.value})
   
    }

    render() {
        let tokens;
        if(this.state.tokens !== null){
            tokens = this.state.tokens.map((token_obj,index)=>{
                return (<li key={index}><h5>{token_obj['value']}  ---- {token_obj['meta']}</h5></li>)
            });
        }else{
            tokens = 'Submit an ascii math eqn to see tokens'
        }
        return (
            <div id='box'>
                <div id="search">
                    <input type="text" name="ascii-text" placeholder="ascii math eqn ..." value={this.state.token_string} onChange={this.changeData}/>
                    {/* <input type="submit" name="tokenise" value="tokenise"  /> */}
                    <div id="button-box">
                        <input type="submit" name='tokenise' value="Tokenise" onClick={this.handleClick}></input>
                        <input type="submit" name='Empty' value="Clear" onClick={this.clearToken}></input>
                    </div>
                    <div id="search-results">
                        <ul>
                            {tokens}
                        </ul>
                    </div>
                    
                   
                </div>
{/* 
                <div id="search-results">
                    {tokens}
                </div> */}
            </div>
            
        )
    }
}
