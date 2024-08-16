import DropdownClearable from "../../app/layout/dropMenu"

export default function hero2() {
  return (
    
    <div>

        <div className='hero2' />

        <div className='hero2-txt' style={{borderBottom: 'dashed #FF9F1C',borderRadius:'20px'}}>
            <h1 style={{fontSize: '5rem',textAlign: 'center',marginBottom: '2rem'}}>X products</h1>
            <DropdownClearable />
        </div>
    </div>
  )
}
