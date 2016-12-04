import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const Cell = ({data, onCheckBoxClicked}) => {
    return (
        <tr>
            <td>
                <input type="checkbox" defaultChecked={data.checked} onChange={onCheckBoxClicked(data)}/>
            </td>
            <td className="success">{data.id}</td>
            <td className="warning">{data.title}</td>
            <td className="warning">{data.userId}</td>
        </tr>
    );
};

export default ({data, onCheckBoxClicked})=> {
    return (
        <table className="table">
            <tbody>
            <tr>
                <th>SN</th>
                <th>ID</th>
                <th>Title</th>
                <th>Userid</th>
            </tr>
            { data.map(item => (
                <Cell data={item} onCheckBoxClicked={onCheckBoxClicked} key={item.id}/>
            ))}
            </tbody>
        </table>

    );
};