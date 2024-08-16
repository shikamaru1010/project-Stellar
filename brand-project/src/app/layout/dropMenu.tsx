import { Dropdown } from 'semantic-ui-react'
const options =[
 {key: 1,text: 'BEST SELLING', value: 1},       
 {key: 1,text: 'ALPHABETICALLY A-Z', value: 1},       
 {key: 1,text: 'ALPHABETICALLY Z-A', value: 2},       
 {key: 1,text: 'PRICE, LOW TO HIGH', value: 3},       
 {key: 1,text: 'PRICE,  HIGH TO LOW', value: 4},       
]
const DropdownClearable = () =>{
     return <Dropdown className='dropdown-menu' clearable options={options} selection />
};
export default DropdownClearable;