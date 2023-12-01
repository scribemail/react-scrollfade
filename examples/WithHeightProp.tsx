import React from 'react';
import ScrollFade from '../lib/ScrollFade';

const WithHeightProp = () => (
    <div>
        <div
            style={{
                width: 500,
                position: 'relative',
                height: 300,
                overflowY: 'auto',
                background: 'red',
            }}
        >
            <ScrollFade height={220} />
            <p>Dolor amet eu occaecat excepteur do adipisicing cillum duis. Est ullamco ullamco sit ea irure consequat iddo ex enim consectetur nisi duis elit. Qui mollit magna exercitation est sit.</p>
            <p>Magna nostrud anim fugiataliquip consectetur excepteur nostrud voluptate magna reprehenderit magna sunt. Nostrud do sint consequatsunt occaecat Lorem proident nulla. Lorem nisi do culpa nisi elit. Deserunt incididunt anim exercitationcupidatat tempor non minim duis fugiat eiusmod qui mollit do. Ut ea esse proident ex dolore esse officianulla enim nostrud irure nulla ipsum. Exercitation proident incididunt ea quis tempor Lorem eu officiaexcepteur aliqua ea dolore dolor id.</p>
            <p>Ex cillum sunt sunt eiusmod cupidatat irure veniam ullamco commodoqui tempor. Ea ullamco consequat fugiat cillum laborum consectetur velit voluptate eu sint eiusmodexercitation commodo. Consequat elit cupidatat ut eiusmod velit aliquip esse deserunt occaecat sint suntreprehenderit. Tempor aliqua cillum in in. Dolor nostrud adipisicing in ea esse voluptate incididunt.</p>
            <p>Situt Lorem consectetur ex. Qui reprehenderit nisi veniam elit aliqua commodo enim. Proident pariatur idofficia dolor nostrud deserunt do sint in excepteur reprehenderit nostrud exercitation cupidatat. Qui fugiatreprehenderit enim ex nulla do ad amet aliqua deserunt. Aliquip adipisicing amet anim id labore excepteur euduis occaecat qui sunt amet incididunt cillum.</p>
            <p>Sit incididunt mollit aliqua eiusmod nulla irure sit nisienim exercitation elit. Culpa in quis amet excepteur eiusmod duis proident eiusmod ut. Qui quis officiadolore reprehenderit enim aliqua laboris.</p>
            <p>Consectetur culpa magna voluptate occaecat esse duis quis est.Duis exercitation anim velit proident enim eu culpa ullamco magna magna ullamco in consequat minim. Aliquiput ad anim et consequat deserunt. Laborum ex et irure culpa irure ea. Tempor aliquip dolore ea veniamexcepteur magna ipsum pariatur adipisicing quis qui amet. Dolor exercitation in Lorem labore laborumadipisicing. Laborum consequat ex officia quis Lorem proident ut ullamco.</p>
        </div>
    </div>
);

export default WithHeightProp;
