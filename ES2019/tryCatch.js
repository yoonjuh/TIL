/**
 * From ES2019, when we use try && catch,
 * We can omit the e on catch if we do not need it
 */

function doSomething(someData) {
  try {
    /** Do some logic */
  } catch {
    /** catch(e) */
    console.log("Something is wrong", someData);
  }
}
