import axios from "axios";
import { useEffect, useState } from "react";

function ServerList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/boardlist/"
        );
        setList(response.data);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };

    fetchList();
  }, []);
  return (
    <>
      <ul>
        {list.map((instance) => (
          <li key={instance.id}>{instance.title}</li>
        ))}
      </ul>
    </>
  );
}

export default ServerList;
