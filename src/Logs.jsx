import { CardComponent } from "./Card";
import { collection, getDocs } from "firebase/firestore";
import { database } from "./firebaseconfig";
import { useEffect, useState } from "react";
function LogsComponent() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const callLogsCollection = collection(database, "call_logs");

        const logsSnapshot = await getDocs(callLogsCollection);
        const logsList = logsSnapshot.docs.map((doc) => ({
          id: doc.id, // The document ID
          ...doc.data(), // Extract the document fields (transcript, date, etc.)
        }));
        setLogs(logsList);
      } catch (error) {
        console.error("Error fetching logs:", error);
      } finally {
        setLoading(false); // Once the fetching is complete, set loading to false
      }
    };
    fetchLogs();
  }, []);

  return (
    <div className="p-4">
      {loading ? (
        <p>Loading logs...</p> // Show loading message while fetching data
      ) : logs.length > 0 ? (
        // Map through the logs and render a CardComponent for each log
        logs.map((log) => (
          <CardComponent
            key={log.id}
            title="MyTitle" // Default title for each card
            content={log.transcript || "No transcript available"} // Content from Firestore (or fallback)
            date={log.date || "No date available"} // Date from Firestore (or fallback)
          />
        ))
      ) : (
        <p>No logs available</p> // Show if no logs exist in the collection
      )}
    </div>
  );
}



export default LogsComponent;
 