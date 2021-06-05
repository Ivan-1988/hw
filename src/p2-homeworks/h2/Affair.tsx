import React from 'react';
import {AffairType} from "./HW2";
import s from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    const setColor = () => {
        switch (props.affair.priority) {
            case 'high':
                return 'red'
            case 'low':
                return 'green'
            default:
                return 'yellow'
        }
    }

    const StylePriority = {
        color: setColor()
    }
    return (
        <div className={s.affairWrapper}>
            <div className={s.affairName}>{props.affair.name}</div>
            <div className={s.affairPriority}>
                <div style={StylePriority}>{props.affair.priority}</div>
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
