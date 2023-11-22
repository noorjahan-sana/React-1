
import './App.css';
// import ClassComponent from './Components/ClassComponent';
// import FunctionalComponent from './Components/FunctionalComponent';
// import ClassState from './StateFolder/ClassState';
// import ParentClass from './MethodProp/ParentClass';
// import IfElse from './ConditionalRendering/IfElse';
// import ListRender from './List/ListRender';
// import ParentList from './List/ParentList';
// import FormHandle from './Form/FormHandle';
// import LifeCycleA from './ClassLifeCycle/LifeCycleA';
// import ParentComp from './PureComponents/ParentComp';
// import Reference from './PureComponents/Reference';
// import Counter from './HigherOrderComp/Counter';
import GetList from './HTTP-Request/GetList';
import PostList from './HTTP-Request/PostList';
function App() {
  return (
    <div className="App">
      {/* <ClassComponent name="ClassProps" branch="cse"/> */}
      {/* sending props as an attribute */}
      {/* <FunctionalComponent name="FunctionalProps" branch="ece"/> */}
      {/* sending props as an children we can send any tag <p> <button> any tag*/}
      {/* <FunctionalComponent><p>Sending props children</p> </FunctionalComponent> */}


      {/* <ClassState/> */}

      {/* <ParentClass/> */}

      {/* <IfElse/> */}

      {/* <ListRender/> */}
      
      {/* <FormHandle /> */}
      
      {/* <LifeCycleA/> */}

      {/* <ParentComp/> */}

      {/* <Reference/> */}

      {/* <Counter/> */}

      {/* <GetList/> */}

      <PostList/>
    </div>
  );
}

export default App;
