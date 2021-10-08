import React from 'react';

import uuid from '../../utils/uuid.js';

import styles from './RecipeCard.module.scss';


function MeasurementRender({unit, amount}) {
  if (unit === 'range') {
    return (
      <>
        <div>
          <span>{amount[0]}</span>
        </div>
        <div className={styles.to}>
          <span>to</span>
        </div>
        <div>
          <span>{amount[1]}</span>
        </div>
      </>
    );
  } 

  return (
    <>
    <div>
      <span className={styles.amount}>{amount}</span>
    </div>
    <div>
      <span className={styles.unit}>{unit}</span>
    </div>
      
    </>
  )
}

function Ingredient(props) {
  const {name, unit, amount} = props.item;

  const measurementClass = unit === 'range' ? `${styles.measurement} ${styles.range}` : styles.measurement;

  return (
    <div className={styles.ingredient}>
      <div className={measurementClass}>
        <MeasurementRender unit={unit} amount={amount} />
      </div>

      <div className={styles.ingredientName}>
        <span>{name}</span>
      </div>

    </div>
  );
}

function Instruction(props) {
  const { item } = props; 
  // console.log(item);
  return (
    <span>{item}</span>
  );
}

function ItemList({items, itemComponent, ordered = false}) {
  const DefaultListItem = () => <div>No Backup Render Solution Available At This Time</div>;
  const ListItem = itemComponent || DefaultListItem;
  // const Items = items.map((item) => <ListItem {...item} />);
  const Container = ordered ? 'ol' : 'ul';
  return (
    <Container>
      {items.map((item, index) => {
        return (
          <li key={`${uuid()}-${index}`}>
            <ListItem index={index} item={item} />
          </li>
        );
      })}
    </Container>
  )
}

export function RecipeCard(props) {
  const {
    name,
    glass,
    ingredients,
    instructions,
    mixingMethod,
    postMixingInstructions,
    garnish
  } = props;
 

  return (
    <article className={styles.card}>
      <header>
        <h1 className={styles.heading}>{name}</h1>
        <div className={styles.glassTextContainer}>
          <span className={styles.glassText}>{glass}</span>
        </div>
      </header>

      <section className={styles.ingredients}>
        <ItemList items={ingredients} itemComponent={Ingredient} />
      </section>

      <section className={styles.instructions}>
        <ItemList items={instructions} itemComponent={Instruction} ordered />
      </section>

      <section className={styles.mixingMethod}>
        <span>{mixingMethod}</span>
      </section>

      <section className={styles.postMixingInstructions}>
        <ItemList items={postMixingInstructions} itemComponent={Instruction} ordered />
      </section>

      <section className={styles.garnish}>
        <h2>Garnish</h2>
        <ItemList items={garnish} itemComponent={Instruction} />
      </section>
    </article>
  )
};