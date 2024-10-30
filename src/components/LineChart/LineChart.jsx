import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentsData = [
        { id: 1, name: "Alice", math: 88, physics: 75, chemistry: 82 },
        { id: 2, name: "Bob", math: 92, physics: 85, chemistry: 79 },
        { id: 3, name: "Charlie", math: 76, physics: 78, chemistry: 84 },
        { id: 4, name: "Daisy", math: 85, physics: 88, chemistry: 91 },
        { id: 5, name: "Ethan", math: 91, physics: 92, chemistry: 87 },
        { id: 6, name: "Fiona", math: 83, physics: 77, chemistry: 74 },
        { id: 7, name: "George", math: 79, physics: 82, chemistry: 89 },
        { id: 8, name: "Hannah", math: 88, physics: 80, chemistry: 86 },
        { id: 9, name: "Isaac", math: 90, physics: 89, chemistry: 78 },
        { id: 10, name: "Jade", math: 84, physics: 81, chemistry: 85 }
      ];
      
      
      
    return (
        <div>
            <LChart width={800} height={500} data={studentsData}>
                <XAxis  dataKey="name" ></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke="red" ></Line>
                <Line dataKey="physics" stroke="purple"></Line>
                 <Line dataKey="chemistry" stroke="green"></Line>
            </LChart>
            
        </div>
    );
};

export default LineChart;