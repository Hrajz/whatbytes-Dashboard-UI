const SyllabusWiseAnalysis = () => {
  const skills = [
    { name: "HTML Tools, Forms, History", percentage: 80 },
    { name: "Tags & References in HTML", percentage: 60 },
    { name: "Tables & References in HTML", percentage: 24 },
    { name: "Tables & CSS Basics", percentage: 49 },
  ];

  return (
    <div className="p-8 bg-white shadow-md rounded-md m-2 border border-slate-200 ">
      <h2 className="text-lg font-bold mb-4">Syllabus Wise Analysis</h2>
      <div className="p-4">
        {skills.map((skill, index) => (
          <div key={index} className="mb-8">
            <div className="flex justify-between mb-4 text-slate-600">
              <span>{skill.name}</span>
            </div>
            <div className="flex items-center">
              <div className="w-full flex items-center bg-gray-200 rounded-full h-2.5 mr-4">
                <div
                  className={`h-2.5 rounded-full ${
                    skill.percentage > 75
                      ? "bg-blue-500"
                      : skill.percentage < 75 && skill.percentage > 50
                      ? "bg-orange-500"
                      : skill.percentage < 50 && skill.percentage > 25
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <span
                className={`${
                  skill.percentage > 75
                    ? "text-blue-500"
                    : skill.percentage < 75 && skill.percentage > 50
                    ? "text-orange-500"
                    : skill.percentage < 50 && skill.percentage > 25
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                <strong> {skill.percentage}% </strong>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusWiseAnalysis;
