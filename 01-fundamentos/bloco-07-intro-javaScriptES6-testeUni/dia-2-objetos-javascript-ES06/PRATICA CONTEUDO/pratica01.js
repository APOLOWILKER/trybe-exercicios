

const customer = {
  firstName: 'John',
  age: 34,
  job: 'cop',
};

function getCustomer(customer, newkey, valueKey) {
  newkey = "lastName";
  valueKey = "Bond";
  customer[newkey] = valueKey;
  return customer;
}
console.log(getCustomer());