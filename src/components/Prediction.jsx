import { useState } from "react";
import "./Prediction.css";

const Prediction = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(null); // Track error
  const [loading, setLoading] = useState(false); // Track loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error
    setResult(""); // Reset result
    setLoading(true); // Start loading

    if (!input) {
      setError("Please provide input");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();
      setLoading(false); // Stop loading

      if (response.ok) {
        setResult(data.result);
      } else {
        setError(data.error || "An error occurred");
      }
    } catch (error) {
      console.error("Error fetching prediction:", error);
      setLoading(false); // Stop loading on error
      setError("Failed to fetch prediction");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your query"
        />
        <button type="submit">Get Suggestions</button>
      </form>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Loading Indicator */}
      {loading && <p>Loading...</p>}

      {/* Result */}
      {result && (
        <div>
          <strong>Prediction:</strong>
          <div dangerouslySetInnerHTML={{ __html: result }} />
        </div>
      )}
    </div>
  );
};

export default Prediction;
