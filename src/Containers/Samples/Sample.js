import React from 'react'
import './Sample.css';

export default function Sample() {
    return (
        <div id="columnss">
            {/* <ul> */}
            <div className="sample"><h5>sin^(2)alpha+tan^(2)beta+sec^(2)gamma</h5></div>
            <div className="sample"><h5>int_(-1)^(3/2)|x sin pi x|dx</h5></div>
            <div className="sample"><h5>cos6x=32cos^(6)x-48cos^(4)x+18cos^(2)x-1</h5></div>
            <div className="sample"><h5>(x^(2))/(3^(2))+(y^(2))/(b^(2))</h5></div>
            <div className="sample"><h5>(sqrt(y))int(2+sin2x)/(1+cos2x)e^(x)dx</h5></div>
            <div className="sample"><h5>f:a rarr b</h5></div>
            <div className="sample"><h5>(dy)/(dx)=(x+y)/(x-y)</h5></div>
                {/* <li>int_(1)^(2)(dx)/(x(1+2x)^(2))</li> */}
            {/* </ul> */}
        </div>
    )
}




// let tokens = Tokenizer.standardTokenize("sin^(2)alpha+tan^(2)beta+sec^(2)gamma");
// let tokens = Tokenizer.standardTokenize('int_(-1)^(3/2)|x sin pi x|dx');
// let tokens = Tokenizer.standardTokenize('cos6x=32cos^(6)x-48cos^(4)x+18cos^(2)x-1')
// let tokens = Tokenizer.standardTokenize('(x^(2))/(3^(2))+(y^(2))/(b^(2))');
// let tokens = Tokenizer.standardTokenize('(sqrt(y))int(2+sin2x)/(1+cos2x)e^(x)dx');
// let tokens = Tokenizer.standardTokenize('f:a rarr b')
// let tokens =  Tokenizer.standardTokenize('(dy)/(dx)=(x+y)/(x-y)')
// let tokens = Tokenizer.standardTokenize('int_(1)^(2)(dx)/(x(1+2x)^(2))');