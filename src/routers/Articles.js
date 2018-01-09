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
                    <MainBox
                        imgSrc='./images/img.jpg'
                        title={
                            <div>
                                <div>创作时</div>
                                <div>的一些思考</div>
                            </div>
                        }
                    >
                        <h6 
                            style={{textAlign:'center'}}
                        >
                            遇到的问题和解决方案
                        </h6>
                        <div>1.首页点击项目如何全屏展示?</div>
                        <div>全屏主要使用了fixed来实现</div>
                        <div>2.用fixed实现全屏效果时，遇到了什么问题？</div>
                        <div>
                            fixed在移动端的问题特别多：
                            <p>
                                a.元素定位变为fixed时，会脱离文档流，为了防止后面元素顶上来，最外层的元素定位为relative，并在点击的瞬间先计算高度，并赋值，防止后面的元素顶上来
                            </p>
                            <p>
                                b.第二层元素定位为fixed，但元素由正常文档流突变为fixed，transtion并不会生效，即不会有缓动效果，为了解决这一问题，该层容器，脱离文档流时，背景透明，top，right，bottom，left为0
                            </p>
                            <p>
                                第三层元素为实际内容，点击后实际看到的效果由该元素展现，再点击的瞬间，该元素的定位为绝对定位，相对于第二层元素，先计算该元素的top值和bottom值，并赋值给style，之后通过函数计算实时的位置，左右距离则通过css百分比实现缓动
                            </p>
                            <p>
                                c.fixed元素滚动穿透问题，通过实时计算body的位置，通过展开时禁止body滚动，并给body的top属性负值，实现禁止滚动，而页面不变。浮层关闭后，body恢复滚动，并将滚动距离设置为之前的距离
                            </p>
                            <p>
                                d.fixed元素滚动有严重重叠现象，通过定死fixed元素高度，由内部元素通过iscroll库来模拟滚动，优化了滚动体验
                            </p>
                        </div>
                        <div>
                            3.路由动画
                        </div>
                        <div>
                            路由动画由react-router4和react-transtion-group2来解决，由于这两个库都比较新，百度上的解决方案都不行，甚至连这两个库的官方文档也没有跟上对方的跟新，最后是在stackoverflow上找到了解决方案，<a href="https://stackoverflow.com/questions/46001315/react-router-v4-and-react-transition-group-v2">具体请看</a>
                        </div>
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
            </div>
            
        )
    }
}

export default Articles