export type ActionWithPayloadType<P> = {
  type: string;
  payload: P;
}; // Only payLoad type is needed as the type is already a string
export type Action<T> = {
  type: T;
};

/* old version of createAction in plain javaScript
export const createAction = (type, payload) => ({ type, payload });

export const createAction = <P>(type: string, payload: P) => ({
  type,
  payload,
});
*/
