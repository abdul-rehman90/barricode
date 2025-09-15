import React from 'react';
import Visions from '../about-us/visions';
import {
    securityGrowLeftSection,
    securityGrowRightSection,
} from './constants';

function SecurityGrow() {
    return (
        <Visions
            leftSection={securityGrowLeftSection}
            rightSection={securityGrowRightSection}
        />
    );
}

export default SecurityGrow;
