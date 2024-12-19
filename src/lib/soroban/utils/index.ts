import { rpc } from '@stellar/stellar-sdk';

import { SOROBANRPC_URL } from '../../../constants';

export const sorobanServer = new rpc.Server(SOROBANRPC_URL);
