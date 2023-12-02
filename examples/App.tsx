import React from 'react';
import Simple from './Simple';
import WithHeightProp from './WithHeightProp';
import WithIntensityProp from './WithIntensityProp';

export const App = () => (
    <div>
        <h1>Scrollfade Examples</h1>
        <div style={{ display: "grid", gridTemplateColumns: "33.33% 33.33% 33.33%" }}>
            <div>
                <h2>Simple</h2>
                <Simple />
            </div>
            <div>
                <h2>With height prop</h2>
                <WithHeightProp />
            </div>
            <div>
                <h2>With intensity prop</h2>
                <WithIntensityProp />
            </div>
        </div>
    </div>
);
