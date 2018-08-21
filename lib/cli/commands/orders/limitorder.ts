import { callback, loadXudClient } from '../../command';
import { Arguments } from 'yargs';
import { PlaceOrderRequest, Order } from '../../../proto/xudrpc_pb';

export const command = 'limitorder <pair_id> <order_id> <quantity> <price>';

export const describe = 'place a limit order';

export const builder = {
  pair_id: {
    type: 'string',
  },
  order_id: {
    type: 'string',
  },
  quantity: {
    type: 'number',
  },
  price: {
    type: 'number',
  },
};

export const handler = (argv: Arguments) => {
  const request = new PlaceOrderRequest();

  const order = new Order();
  order.setPairId(argv.pair_id);
  order.setLocalId(argv.order_id);
  order.setQuantity(argv.quantity);
  order.setPrice(argv.price);

  request.setOrder(order);

  loadXudClient(argv).placeOrder(request, callback);
};