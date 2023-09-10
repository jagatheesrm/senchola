import React,{useState} from 'react'
import Chart from "react-apexcharts";
import './Dashboard.css'
import Presentaion from '../DImages/presentation.jpg'
import Meeting from '../DImages/meeting.jpg'
import {AiFillCheckCircle,AiOutlineFieldTime} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {MdDateRange} from 'react-icons/md'
const Dashboard = () => {
  const [state,setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 3,
        opacity: 0.5
      },
      xaxis: {
        categories: ["Mon","Tue","Wed","Thu","Fri","Sat"]
      },
      colors:['rgb(83, 180, 80)']
    },
    series: [
      {
        name: "series-1",
        data: ["1hr", "2hr", "3hr", "4hr", "5hr","3.5hr"]
      }
    ]
})
  return (
  <>
    <div className='dashboard'>
    
      <div className='graph'>
      <h3>Performance</h3>
      <Chart
              options={state.options}
              series={state.series}
              type="bar"
              className="chart"
            />
      </div>
    </div>

    <div className='works'>
        <div className='project'>
          <div className='project-list-1'>
              <h4>Presentation</h4>
              <img src={Presentaion} alt='Presentation' className='img-fluid'/>
          </div>
          <div className='project-list-2'>
              <h4>Meeting</h4>
              <img src={Meeting} alt='metting' className='img-fluid'/>
          </div>

          <table className='table table-hover'>
            <thead>
            <tr>
              <th>Task</th>
              <th>Team</th>
              <th>Date</th>
              <th>State</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Login/Signup Page</td>
              <td>Ui/Ux Design</td>
              <td>July 20</td>
              <td className='text text-center'><AiOutlineFieldTime className='text text-danger'/></td>
            </tr>
            <tr>
              <td>Signup Page</td>
              <td>Ui/Ux Design</td>
              <td>July 20</td>
              <td className='text text-center'><AiOutlineFieldTime className='text text-danger'/></td>
            </tr>
            <tr>
              <td>Landing page with react</td>
              <td>Ui/Ux Design</td>
              <td>July 20</td>
              <td className='text text-center'><AiFillCheckCircle className='text text-success'/></td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className='meeting'>
          <div className='meet-headline'>
            <div className='date'>
              <h6>Upcoming Meeting</h6>
              <span>Monday, 7 August</span>
            </div>
          </div>

          <div className='meeting-alert'>
              <span>General Meeting</span>
              <div className='conducter'>
                <div className='icon'><i><CgProfile/></i><span> SathisKumar</span></div>
                <div className='icon'><i><MdDateRange/></i><span> Mon, August 7</span></div>
              </div>
              <div className='conducter'>
                <i><AiOutlineFieldTime/> 9:30 - 10:30 </i>
                <i><MdDateRange/> Teams</i>
              </div>
              <button className='btn-join'>Join to The Meeting</button>
          </div>
          
          <div className='meeting-alert'>
              <span>General Meeting</span>
              <div className='conducter'>
                <div className='icon'><i><CgProfile/></i><span> Kavya</span></div>
                <div className='icon'><i><MdDateRange/></i><span> Mon, August 7</span></div>
              </div>
              <div className='conducter'>
                <i><AiOutlineFieldTime/> 9:30 - 10:30 </i>
                <i><MdDateRange/> Teams</i>
              </div>
              <button className='btn-join'>Join to The Meeting</button>
          </div>
   
        </div>
      </div>
  
  </>
  )
}

export default Dashboard
