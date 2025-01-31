import { useState } from "react";
import "./App.css";

function App() {
  const bulkData = [
    {
      title: "What is GitHub and how does it work?",
      content:
        "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
    },
    {
      title: "How do I see GitHub's availability?",
      content: "Check our real-time status report.",
    },
    {
      title: "Why is GitHub so popular?",
      content:
        "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleOnClickChange = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
      <div className="w-[500px] bg-white p-6 rounded-lg ">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          ACCORDION
        </h1>
        <div className="space-y-3">
          {bulkData.map((data, index) => (
            <div key={index} className="border rounded-lg overflow-hidden ">
              <div
                className="flex justify-between items-center bg-gray-200 px-4 py-3 cursor-pointer hover:bg-gray-300 transition"
                onClick={() => handleOnClickChange(index)}
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  {data.title}
                </h3>
                <span className="text-gray-600">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>
              <div
                className={`transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
                } overflow-hidden bg-gray-50`}
              >
                <p className="text-gray-600">{data.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
