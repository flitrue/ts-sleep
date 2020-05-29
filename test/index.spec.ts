import sleep from '../src/index'
import { performance } from 'perf_hooks'

test('正确执行sleep方法', async () => {
  expect(typeof sleep).toBe('function')
  const start = performance.now()
  await sleep(2000)
  expect(performance.now() - start).toBeGreaterThanOrEqual(2000)
})

test('then', async () => {
  const start = performance.now();
  return sleep(2000).then(res => {
    expect(res).toBe('done')
    expect(performance.now() - start).toBeGreaterThanOrEqual(2000)
  });
});

// 提前resolve测试
test('2s后中断promise', async () => {
  const start = performance.now();
  let p = sleep(5000);
  setTimeout(() => {
    p.cancel('2s later')
  }, 2000)
  return p.then(res => {
    expect(res).toBe('2s later')
    expect(performance.now() - start).toBeGreaterThanOrEqual(2000)
  })
});
