import React, { FC } from "react";

const Tables: FC<any> = () => {
    return (
        <table className="custom-border">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>First</td>
                    <td>Na</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tables