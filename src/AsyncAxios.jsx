import { useEffect, useState } from "react";
import axios from "axios";

function AsyncAxios() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('https://randomuser.me/api/')
        console.log(1, res)
        const { seed } = res.data.info;
        console.log(2, seed)
        const res2 = await axios.get(`https://randomuser.me/api/?seed=${seed}`)
        console.log(3, res2)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default AsyncAxios;

