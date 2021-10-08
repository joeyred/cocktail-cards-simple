

const card = (props, styles) => {
  const {
    name,
    glass,
    ingredients,
    instructions,
    mixingMethod,
    postMixingInstructions,
    garnish
  } = props; 
  return `
    <article class="${styles.card}>
      <header>
        <h1>${name}</h1>
        <span>${glass}</span>
      </header>
      
      ${ingredients ? section() : null}

      ${instructions ? section() : null}

      ${mixingMethod ? section() : null}

      ${postMixingInstructions ? section() : null}

      ${garnish ? section() : null}
    </article>
  `;
}

const section = (props, styles) => {
  
  return `
    <section>
    
    </section>
  `;
}