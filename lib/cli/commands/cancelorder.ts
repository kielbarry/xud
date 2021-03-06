import { callback, loadXudClient } from '../command';
import { Arguments } from 'yargs';
import { RemoveOrderRequest } from '../../proto/xudrpc_pb';

export const command = 'removeorder <order_id>';

export const describe = 'remove an order';

export const builder = {
  order_id: {
    type: 'string',
  },
};

export const handler = (argv: Arguments) => {
  const request = new RemoveOrderRequest();
  request.setOrderId(argv.order_id);
  loadXudClient(argv).removeOrder(request, callback);
};
