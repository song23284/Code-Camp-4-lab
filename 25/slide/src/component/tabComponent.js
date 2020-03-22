import React from 'react'


class TabComponent extends React.Component{
state={
     tablist:['tab1','tab2','tab3']
     ,componentList:['conttent1',
    'content2','conntet3'],
    current:0
}


rendermenu =  ()=> {
    return this.state.tablist.map((tab,idx)=>{
         if (idx ==this.state.current){

   return  <div style={{borderStyle:'inset',margin:'5px 5px'}} onClick={() => {this.setState({current:idx})}} > &nbsp;{tab } &nbsp;  </div>

}
return  <div style={{borderStyle:'outset',margin:'5px 5px'}} onClick={() => {this.setState({current:idx})}} > &nbsp;{tab } &nbsp;  </div>


})
     
    }
render = ()=>{

 return (
    <div  className='Root'>
     <div style={{display:'flex',flexDirection:'row'}}> 
      {this.rendermenu() }  
      </div >
      <div style={{display:'flex',justifyContent:'center',border:'solid',height:'372px'}} >
          {this.state.componentList[this.state.current]}
      </div>

    </div>
 )


}


}
 
export default TabComponent;