import * as React from "react";
class Timetable extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        
                        <tr>
                            <th></th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                        </tr>
                    </thead>
                    <tr>
                        <th>8:00  TO 8 : 55 </th>
                        <td rowSpan={2}>React <br />(NV)</td>
                        <td rowSpan={2}>React <br />(NV)</td>
                        <td rowSpan={2}>AI/ML <br />(CP)</td>
                        <td rowSpan={2}>React <br />(SMS)</td>
                        <td rowSpan={2}>PD(DS)/ <br />DM(LIB)/ <br />EC(LIB)</td>
                    </tr>
                    <tr>
                    <th>8 : 55  TO 9 : 45 </th>
                    </tr>
                    <tr>
                        <th>Class / Lab Location</th>
                        <td>LL1</td>
                        <td>LL5</td>
                        <td>LL1</td>
                        <td>LL1</td>
                        <td>118</td>
                    </tr>
                    <tr>
                        <th>9 : 45  TO 10 : 00 </th>
                        <td colSpan={5}>TEA BRECK</td>
                    </tr>
                    <tr>
                        <th>10 : 00  TO 10 : 50 </th>
                        <td rowSpan={2}>.NET (PJT)/ <br />ADV JAVA(NC)</td>
                        <td rowSpan={2}>.NET (BD)/ <br />ADV JAVA(NC)</td>
                        <td rowSpan={2}>TOC <br />(AKK)</td>
                        <td rowSpan={2}>AI/ML <br />(CP)</td>
                        <td >AI/ML(CP) </td>
                    </tr>
                    <tr>
                    <th>10 : 50 TO 11:40 </th>
                    <td>TOC(AKK)</td>
                    </tr>
                    <tr>
                        <th>Class / Lab Location</th>
                        <td>LL1/LL5</td>
                        <td>LL1/LL5</td>
                        <td>201</td>
                        <td>LL6</td>
                        <td>LL7</td>
                    </tr>
                    <tr>
                        <th>11 : 40 TO 12 : 30 </th>
                        <td colSpan={5}>LUNCH BREACK</td>
                    </tr>
                    <tr>
                        <th>12 : 30   TO 1 :20 </th>
                        <td rowSpan={2}>PD(LIB)/ <br />DM(OD)/ <br />EC(RKI)</td>
                        <td rowSpan={2}>PD(DS)/ <br />DM(LIB)/ <br />EC(LIB)</td>
                        <td rowSpan={2}>PD(LIB)/ <br />DM(OD)/ <br />EC(RKI)</td>
                        <td rowSpan={2}>.NET (BD)/ <br />ADV JAVA(LIB)</td>
                        <td rowSpan={2}>.NET (LIB)/ <br />ADV JAVA(MV)</td>
                    </tr>
                    <tr>
                    <th>1 : 20 TO 2 : 10 </th>
                    </tr>
                    <tr>
                        <th>Class / Lab Location</th>
                        <td>LL1/LL5</td>
                        <td>LL1/LL5</td>
                        <td>201</td>
                        <td>LL6</td>
                        <td>LL7</td>
                    </tr>
                </table>
                
            </div>
            
        ); 
    }
}
export default Timetable;