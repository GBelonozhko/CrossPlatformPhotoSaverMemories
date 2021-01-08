import React from 'react';
import {IonFab, IonFabButton, IonIcon} from '@ionic/react';
import { add } from 'ionicons/icons';


const FixedBottomFab: React.FC = props => {

    return(
        <IonFab vertical='bottom' horizontal='end'>
              <IonFabButton routerLink='/new-memory'>
                <IonIcon icon={add} />
              </IonFabButton>
            </IonFab>
    );
}

export default FixedBottomFab;