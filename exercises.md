# Exercise 1

- Create a "Count" context.

- The context provider should contain **the count**, a function to **increment the count**, and a function to **decrement the count**.

- The count context provider should wrap the whole app.

- Create three components in our app,
  1. `Count`: A component that renders the count
  2. `IncrementCount`: A component in charge of incrementing the count
  3. `DecrementCount`: A component in charge of decrement the count

Use your context in this three components to provide the values from the "Count" context.

# Exercise 2

- Extend the count context to include functionality that allows us to control the amount by which we increment and decrement the count

- Create a new component called `Step`. This component should control the value by which we increment and decrement the count.
