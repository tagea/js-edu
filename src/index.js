/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const masterJavaScriptHours = 800;
      const fullProgrammingHours = 500 + masterJavaScriptHours;
      const userHours = knowsProgramming ? masterJavaScriptHours : fullProgrammingHours;
      if(focus && config){
        return Math.ceil(userHours / config[focus]);
      }else{
        throw new Error('Enter valid data!'); 
      }
  };
  