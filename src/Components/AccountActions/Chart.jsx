import React, { Component } from 'react'
import {Bar, Line} from 'react-chartjs-2'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
export class Chart extends Component {
    
    state = {
        chartData: {
            labels: ['Deposit', 'Withdrawal', 'Transfer', 'Food', 'Gas'],
            datasets:[
                {
                    label:'Account Expense Summary',
                    // Get data from state :
                    data:
                        // console.log(this.state)
                        // Pass in array we got from the back end. 
                        this.props?.chartData?.chartData,

                    backgroundColor: [
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,200,0.6)',
                        'rgba(75,192,190,0.6)',
                        'rgba(200,99,132,0.6)',
                        'rgba(255,99,132,0.6)',
                    ]
                }
            ]
        }
    }
    
    render() {
        // console.log(this.props.chartData.chartData)
        // console.log(this.state.chartData.datasets[0].data.chartData)
        // console.log('inside chart')
        // const chartStyle = { height:'80vh', width:'100vw'}
        return (

            <div className = 'chart-container '>

                <Bar id='bar'
                    data={this.state.chartData}
                    options = {{
                        title:{
                            display:true,
                            text: 'Expense Summary',
                            position:'right'
                        },
                        layout:{
          
                        }
                    }}
                />
                <Line id ='line'
                     data={this.state.chartData}
                     options = {{
                         layout:{
                        //      padding:{
                        //     left: 140,
                        //     right:140,
                        //     bottom: 100
                        // },                         
                     }
                     }}                   
                />
            </div>
        )
    }
}

const mstp = (appState) => {
    // console.log(appState.chartData)
    return {chartData:appState.chartData}
}
export default connect(mstp)(withRouter(Chart))
