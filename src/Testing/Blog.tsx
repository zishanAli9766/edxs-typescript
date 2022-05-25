import React, { FC } from 'react'

const Blog: FC<any> = () => {
    return (
        <div className="mainCls">
            <ul>
                <li key='Test1' className="liCls">Test1</li>
                <li key='Test2' className="liCls">Test2</li>
                <li key='Test3' className="liCls">Test3</li>
            </ul>
            <div className="numbers">   
                <span>one</span>
                <span>two</span>
            </div>
            <div>
                <button className="my-button disabled btn-primary">Submit</button>
            </div>
            <div className="some-class" />
        </div>
    )
}

export default Blog