const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const address = order['address'];
  const addressArray = Object.values(address);
  const client = order['name'];
  const phoneNumber = order['phoneNumber'];
  const street = addressArray[0];
  const number  = addressArray[1];
  const apartment = addressArray[2];

  return `Olá, pessoa. Entrega para ${client}, Telefone: ${phoneNumber}, ${street}, Nº: ${number}, AP: ${apartment}`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  orderObject = order['order'];
  pizzasObject = orderObject['pizza'];
  drinksObject = orderObject['drinks'];
  order.payment = 50;
  order.name = 'Luiza Silva';

  return `Olá, ${order['name']}, o total do seu pedido de ${pizzasObject[0]}, ${pizzasObject[1]} e ${drinksObject[0]} é ${order['payment']}`;

}

console.log(orderModifier(order));