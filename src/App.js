import './App.scss';

import { RecipeCard } from './components/RecipeCard';

import uuid from './utils/uuid';

import { specialty, summerUpdate } from './data/cocktails';

function Cards(props) {
  const { items } = props;
  // console.log(specialty);
  // const data = items || [];
  return (
    <ul className='cheatsheet'>
      {items.map((item, index) => {
        if (index === 6) {

        }
        return index === 6 ? (
          <li className='cheatsheet-item'>
            <RecipeCard {...item} key={`${uuid()}`} />
            <div className='spacer'></div>
          </li>
        ) : (
          <li className='cheatsheet-item'>
            <RecipeCard {...item} key={`${uuid()}-${index}`} />
          </li>
        )
      })}
    </ul>
  );
}

function App(props) {
  const { isSummer } = props;

  const heading = isSummer ? 'Summer Cocktails' : 'Specialty Cocktails';
  const items = isSummer ? summerUpdate : specialty;
  // console.log(specialty);
  return (
    <div className="App">
      <h1 className="page-heading">{heading}</h1>
      <Cards items={items} />
    </div>
  );
}

export default App;
