type CancelablePromise = Promise<any> & { cancel: any }

function sleep(timeout: number): CancelablePromise {
  let res: (v: string) => void, timer: NodeJS.Timer;
  let promise = new Promise(resolve => {
    res = resolve
    timer = setTimeout(() => {
      resolve('done')
    }, timeout)
  }) as CancelablePromise
  let cancel = function (data: string) {
    res(data)
    clearTimeout(timer)
  }
  promise.cancel = cancel;
  return promise
}

export default sleep;

