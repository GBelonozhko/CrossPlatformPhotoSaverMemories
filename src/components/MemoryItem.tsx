import React from 'react'
import {IonCard, IonCardHeader, IonCardTitle, } from '@ionic/react'

const MemoryItem:React.FC<{image: string; title:string}> = props => {

    return (
        <IonCard>
        <img src={props.image} alt={props.title}/>
        <IonCardHeader>
            <IonCardTitle>
                {props.title}
            </IonCardTitle>
        </IonCardHeader>
    </IonCard>
    )
}

export default MemoryItem;