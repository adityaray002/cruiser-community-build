
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TimeSelection = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const times = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
  
  return (
    <div>
      <Card className="bg-gray-800/80 border-gray-700">
        <CardContent className="p-8">
          <div className="grid grid-cols-7 gap-1 mb-4">
            {/* Header */}
            <div></div>
            {days.map(day => (
              <div 
                key={day} 
                className={`p-3 text-center font-semibold ${
                  day === "Tuesday" ? "bg-green-400 text-black" : "bg-gray-700 text-white"
                }`}
              >
                {day}
              </div>
            ))}
            
            {/* Time slots */}
            {times.map(time => (
              <div key={time} className="contents">
                <div className="p-3 bg-gray-700 text-white text-center font-medium">
                  {time}
                </div>
                {days.map(day => (
                  <div 
                    key={`${day}-${time}`} 
                    className={`p-3 text-center cursor-pointer transition-colors ${
                      day === "Tuesday" && time === "09:00" 
                        ? "bg-green-400 text-black" 
                        : "bg-gray-600 hover:bg-gray-500 text-white"
                    }`}
                  >
                    {time}
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-green-400 hover:bg-green-500 text-black font-semibold px-12"
            >
              BOOK
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimeSelection;
