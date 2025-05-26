
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TimeSelection = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const times = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
  
  return (
    <div>
      <Card className="bg-gray-800/80 border-gray-700">
        <CardContent className="p-4 md:p-8">
          {/* Mobile View */}
          <div className="md:hidden">
            <div className="grid grid-cols-3 gap-1 mb-4">
              {days.slice(0, 3).map(day => (
                <div 
                  key={day} 
                  className={`p-2 text-center font-semibold text-xs ${
                    day === "Tuesday" ? "bg-green-400 text-black" : "bg-gray-700 text-white"
                  }`}
                >
                  {day.slice(0, 3)}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-1 mb-4">
              {days.slice(3).map(day => (
                <div 
                  key={day} 
                  className={`p-2 text-center font-semibold text-xs ${
                    day === "Tuesday" ? "bg-green-400 text-black" : "bg-gray-700 text-white"
                  }`}
                >
                  {day.slice(0, 3)}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-6">
              {times.map(time => (
                <div 
                  key={time} 
                  className={`p-3 text-center cursor-pointer transition-colors text-sm ${
                    time === "09:00" 
                      ? "bg-green-400 text-black" 
                      : "bg-gray-600 hover:bg-gray-500 text-white"
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="grid grid-cols-7 gap-1 mb-4">
              {/* Header */}
              <div></div>
              {days.map(day => (
                <div 
                  key={day} 
                  className={`p-2 lg:p-3 text-center font-semibold text-sm lg:text-base ${
                    day === "Tuesday" ? "bg-green-400 text-black" : "bg-gray-700 text-white"
                  }`}
                >
                  {day}
                </div>
              ))}
              
              {/* Time slots */}
              {times.map(time => (
                <div key={time} className="contents">
                  <div className="p-2 lg:p-3 bg-gray-700 text-white text-center font-medium text-sm lg:text-base">
                    {time}
                  </div>
                  {days.map(day => (
                    <div 
                      key={`${day}-${time}`} 
                      className={`p-2 lg:p-3 text-center cursor-pointer transition-colors text-sm lg:text-base ${
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
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 md:px-12 h-12 w-full sm:w-auto"
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
