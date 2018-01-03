import React, { Component } from 'react'
import styles from './Articles.css'
import MainBox from '../components/mainBox/index'
class Articles extends Component {
    componentDidMount(){
    }
    render() {
        return (
            <div
                ref = {(wrapper) => {
                    this.wrapper = wrapper
                }}
            >
                <div
                    className={styles.main}
                >
                    <MainBox>
                        <div>aaaabbbb</div>
                        <div>aaaabbbb</div>
                        <div>aaaabbbb</div>
                        <div>aaaabbbb</div>
                        <div>aaaabbbb</div>
                        <div>aaaabbbb</div>
                        <div>aaaabbbb</div>
                        <div>aaaabbbb</div>
                        <div>aaaabbbb</div>
                        <div>aaaabbbb</div>
                        <div>aaaabbbb</div>
                        <div>aaaabbbb</div>
                        <div>aaaabbbb</div>
                    </MainBox>
                    <MainBox>
                        <div>123123132231413242342352344234</div>
                        <div>123123132231413242342352344234</div>
                        <div>123123132231413242342352344234</div>
                        <div>123123132231413242342352344234</div>
                        <div>123123132231413242342352344234</div>
                        <div>123123132231413242342352344234</div>
                        <div>123123132231413242342352344234</div>
                        <div>123123132231413242342352344234</div>
                        <div>123123132231413242342352344234</div>
                        <div>123123132231413242342352344234</div>
                    </MainBox>
                </div>
            </div>
            
        )
    }
}

export default Articles