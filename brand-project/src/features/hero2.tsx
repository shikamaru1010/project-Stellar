import Dropdown from "../app/layout/dropMenu"

export default function hero2() {
  return (
    
    <div>

        <div className='hero2' />

        <div className='hero2-txt' style={{borderBottom: 'solid #FF9F1C',borderRadius:'5px'}}>
            <h1 style={{fontSize: '5rem',textAlign: 'center',color: 'black'}}>X products</h1>
            <Dropdown/>
        </div>
    </div>
  )
}
