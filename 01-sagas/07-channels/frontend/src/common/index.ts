export const actionIds = {
  GET_NUMBER_REQUEST_START:
    "[0] Request a new number to the NumberGenerator async service.",
  GET_NUMBER_REQUEST_COMPLETED:
    "[1] NumberGenerator async service returned a new number.",
  START_SOCKET_SUBSCRIPTION: "[4] Start listening to the web socket",
  STOP_SOCKET_SUBSCRIPTION: "[5] Close socket connection",
  CURRENCY_UPDATE_RECEIVED: "[6] Got a currency update from the server",
};

export interface BaseAction {
  type: string;
  payload?;
}
