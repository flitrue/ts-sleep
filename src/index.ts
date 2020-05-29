type CancelablePromise = Promise<any> & { cancel: any }

function sleep(timeout: number): CancelablePromise {
  let res
  let promise = new Promise(resolve => {
    res = resolve
    setTimeout(() => {
      resolve('done')
    }, timeout)
  }) as CancelablePromise
  promise.cancel = res;
  return promise
}

export default sleep;