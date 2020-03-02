import React, { Component } from 'react'
import {Bar, Line, Radar} from 'react-chartjs-2'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
export class Chart extends Component {
    
    state = {
        chartData: {
            labels: ['Deposit', 'Withdrawal', 'Transfer', 'Food', 'Gas'],
            datasets:[
                {
                    label:'Expense for Feb, 2020',
                    // Get data from state :
                    data:
                        // console.log(this.state)
                        // Pass in array we got from the back end. 
                        this.props.chartData.chartData,
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
        console.log(this.props.chartData.chartData)
        // console.log(this.state.chartData.datasets[0].data.chartData)
        // console.log('inside chart')
        return (
            <div className = 'chart'>
                
                <h2>Chart Component</h2>
                <Line
                    data={this.state.chartData}
                    options = {{
                        title:{
                            display:true,
                            text: 'Expense Summary',
                            position:'right'
                        },
                        layout:{
                            padding:{
                                left: 70,
                                right: 70
                            }
                        }
                    }}
                />
                <Bar id ='bar'
                     data={this.state.chartData}
                     options = {{}}                   
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
