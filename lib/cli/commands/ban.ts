import { callback, loadXudClient } from '../command';
import { Arguments } from 'yargs';
import { BanRequest } from '../../proto/xudrpc_pb';

export const command = 'ban <node_pub_key>';

export const describe = 'ban an xu node';

export const builder = {
  node_pub_key: {
    description: 'nodePubKey of the node to ban',
    type: 'string',
  },
};

export const handler = (argv: Arguments) => {
  const request = new BanRequest();
  request.setNodePubKey(argv.node_pub_key);
  loadXudClient(argv).ban(request, callback);
};
