import React, { Component } from 'react'
import styles from './index.css'
import MainBox from '../../components/mainBox/index'
class Articles extends Component {
    componentDidMount(){
    }
    render() {
        return (
            <div
                className={styles.main}
            >
                <MainBox
                    imgSrc='./images/img.jpg'
                    title={
                        <div>
                            <div>创作时</div>
                            <div>的一些思考</div>
                        </div>
                    }
                >
                    <div>我是标题</div>
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
                    <input/>
                </MainBox>
                <MainBox
                    imgSrc='./images/img2.jpg'
                    title='说明'
                >
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
                <MainBox
                    imgSrc='./images/img3.jpg'
                    title='占位1'
                >
                    <div>占位1</div>
                </MainBox>
                <MainBox
                    imgSrc='./images/img4.png'
                    title='占位2'
                >
                    <div>占位2</div>
                </MainBox>
            </div>
            
        )
    }
}

export default Articles