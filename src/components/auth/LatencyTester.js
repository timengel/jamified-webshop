import React, {useState} from 'react';
import {generateUniqueID} from '../../../lib/crypto';
import {
  averageLatency,
  latencyItem,
  latencyTesterContainer,
  testAuthBtn,
  tip,
} from './LatencyTester.module.scss'

const LatencyTester = () => {
  // const {session, setSession} = useClerk();
  const [performance, setPerformance] = useState(
      {latencies: [], measured: false});
  const [latencyStats, setLatencyStats] = useState({total: 0, n: 0});

  const makeRequest = async (n) => {
    const start = new Date().getTime();
    const response = await fetch('api/auth', {
      method: 'GET',
    });

    console.log('##### response');
    console.log(response);

    if (response.status === 200) {
      const responseTime = new Date().getTime() - start;
      setPerformance({
        latencies: [...performance.latencies, responseTime],
        measured: true
      });
      setLatencyStats({
        total: latencyStats.total + responseTime,
        n: latencyStats.n + 1
      })
      const data = await response;
      console.log('##### response time');
      console.log(responseTime);
      console.log('##### data');
      console.log(data);
    }
  };

  return (
      <div className={latencyTesterContainer}>
        Click to test: <button className={testAuthBtn}
                               onClick={() => makeRequest(1)}
                               type='button'>Test Edge Auth</button>
        {
          (performance.measured)
              ? <div>
                <ul>
                  {
                    performance.latencies.map(
                        (l) => <li key={generateUniqueID()}
                                   className={latencyItem}>{l}ms</li>)
                  }
                </ul>
                {
                  (latencyStats.n > 0)
                      ? <div className={averageLatency}>Average latency: {
                        Math.round((latencyStats.total / latencyStats.n) * 100)
                        / 100
                      }ms</div>
                      : <div>Average auth latency: -</div>
                }
              </div>
              : <div className={tip}>Press <code>Test Edge Auth</code> to
                measure the
                Edge/middleware auth performance!</div>
        }
      </div>
  );
};

export default LatencyTester;
