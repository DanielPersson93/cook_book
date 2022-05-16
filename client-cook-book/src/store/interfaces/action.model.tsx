export interface Action<R, T> {
    payload: R;
    type: T;
}
