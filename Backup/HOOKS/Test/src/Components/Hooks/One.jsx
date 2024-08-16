import react  from 'react'

class One extends react.Component{
    state={
        msg:"Hello"
    }
    Website=(src)=>{
        this.setState(`url${src}`)
    }

    render(){
        return <>
                <h1>This is a One component</h1>
                <h2>{msg}</h2>
                <button onClick={()=>{this.Website('https://education.nationalgeographic.org/resource/mount-everest/')}}></button>
               </>
    }

}
export default One