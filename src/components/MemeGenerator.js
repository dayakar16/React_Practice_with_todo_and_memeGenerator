import React,{Component} from 'react'

class MemeGenerator extends Component { 
    constructor () { 
        super()
        this.state = { 
                 topText : "",
                 bottomText : "",
                 randomImage : "",
                 allmemeImages : []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() { 
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then (response => { 
            const { memes} = response.data
            console.log(memes[0])
            this.setState({allmemeImages : memes})
        })
    }
      
     handleChange(event) { 
         const {name,value} = event.target
         this.setState({[name]: value})
     }

     handleClick(event){
         event.preventDefault()
         const randNum = Math.floor(Math.random()*this.state.allmemeImages.length)
         const ranImage = this.state.allmemeImages[randNum].url
         this.setState({randomImage : ranImage})
     }

    render() { 
        return ( 
            <div>
          <form className='meme-form'> 
           <input type='text' name='topText' value={this.state.topText} onChange={this.handleChange}/>
           <input type='text' name='bottomText' value={this.state.bottomText} onChange={this.handleChange}/>
            <button onClick={this.handleClick}>Gen</button>
          </form>
          <div className='meme'>
             <img src = {this.randomImage} alt='problem?' />
             <h1 className='top'>{this.state.topText}</h1>
             <h2 className='bottom'>{this.state.bottomText}</h2>
          </div>
          </div>
        )
    }
}

export default MemeGenerator; 