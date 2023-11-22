import React from 'react';
import ParentList from './ParentList';
export default function ListRender() {
    // let names = ['noor','sana','abdul'];
    const names = [{'id':1,'name':'noor'},{'id':2,'name':'sana'},{'id':3,'name':'xyz'}];
    //map method apply function on each element and return and updated array
    //if you want to write any js code in html it should be written in  {} 
    // let updated_names = names.map(name => <h2>{name}</h2>)
    //sending data to parentList component using map method 
    //each and every item should have an unique id
     const persons = names.map(person =><ParentList key={person.id} person={person.name}/>)
    
  return (
    <div>
        {persons}
        {/* <ParentList arr={names}/> */}
    </div>
  )
}
